import { Composer, Context, Filter } from "grammy";
import { prisma } from "./bot";
import { errorHandler } from "./util";

import {
	sendPresentMessage,
	updatePresentMessage,
	updatePresentMessages,
} from "./PresentService";

export class Friend<C extends Context> extends Composer<C> {
	constructor(...args: any[]) {
		super(...args);

		this.errorBoundary(errorHandler);

		this.on("callback_query:data")
			.filter((ctx) => ctx.callbackQuery.data.startsWith("prev_present_"))
			.use((ctx) => this.prevPresent(ctx, "prev_present_"));

		this.on("callback_query:data")
			.filter((ctx) => ctx.callbackQuery.data.startsWith("next_present_"))
			.use((ctx) => this.nextPresent(ctx, "next_present_"));

		this.on("callback_query:data")
			.filter((ctx) => ctx.callbackQuery.data.startsWith("take_present_"))
			.use((ctx) => this.takePresent(ctx, "take_present_"));

		this.on("callback_query:data")
			.filter((ctx) =>
				ctx.callbackQuery.data.startsWith("revoke_present_")
			)
			.use((ctx) => this.revokePresent(ctx, "revoke_present_"));

		this.use(async (ctx) => {
			const chatId = ctx.chat?.id;

			if (chatId) {
				await sendPresentMessage(chatId);
			}
		});

		this.errorBoundary(errorHandler);
	}

	async takePresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId] = this.getInfo(ctx, prefix);

		const presents = await await prisma.present.findMany({
			orderBy: { createdAt: "asc" },
		});
		const present = presents.find((present) => present.id === presentId);

		if (!present || !presentId) {
			return;
		}

		if (present.isVacant) {
			await prisma.present.update({
				where: { id: presentId },
				data: {
					isVacant: false,
					userId: ctx.from.id,
				},
			});

			await updatePresentMessages(present.id);
			return;
		}
	}

	async revokePresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId] = this.getInfo(ctx, prefix);

		const presents = await prisma.present.findMany({
			orderBy: { createdAt: "asc" },
		});
		const present = presents.find((present) => present.id === presentId);

		if (!present || !presentId) {
			return;
		}

		if (!present.isVacant && present.userId === ctx.from.id) {
			await prisma.present.update({
				where: { id: presentId },
				data: {
					isVacant: true,
					userId: null,
				},
			});

			await updatePresentMessages(presentId);

			return;
		}
	}

	async prevPresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, messageId] = this.getInfo(ctx, prefix);

		const presents = await prisma.present.findMany({
			orderBy: { createdAt: "asc" },
		});

		if (!presentId) {
			presentId = presents[0].id;
		}

		const presentIds = presents.map((present) => present.id);
		const index = Math.max(0, presentIds.indexOf(presentId));
		const present = presents[index === 0 ? presents.length - 1 : index - 1];

		if (messageId) {
			await updatePresentMessage(present, messageId);
		}
	}

	async nextPresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, messageId] = this.getInfo(ctx, prefix);

		const presents = await prisma.present.findMany({
			orderBy: { createdAt: "asc" },
		});

		if (!presentId) {
			presentId = presents[0].id;
		}

		const presentIds = presents.map((present) => present.id);
		const index = Math.max(0, presentIds.indexOf(presentId));
		const present = presents[(index + 1) % presents.length];

		if (messageId) {
			await updatePresentMessage(present, messageId);
		}
	}

	getInfo(
		ctx: Filter<C, "callback_query:data">,
		prefix: string
	): [null | number, null | number] {
		const info: [null | number, null | number] = [null, null];

		const reg = new RegExp(`${prefix}(\\d+)`);
		const match = ctx.callbackQuery.data.match(reg);

		if (match) {
			info[0] = parseInt(match[1], 10);
		}

		const messageId = ctx.callbackQuery.message?.message_id;

		if (messageId) {
			info[1] = messageId;
		}

		return info;
	}
}
