import {
	Composer,
	Context,
	Filter,
	InlineKeyboard,
	InputMediaBuilder,
} from "grammy";

import { Present } from ".";

const presents: Present[] = [
	{
		id: 1,
		title: "Название 1",
		image: "AgACAgIAAxkBAAOKZV7_1MAfUEnPJNJL_mIoG4BKKXQAAgbSMRt5m_lKITn4FHXJa0ABAAMCAAN5AAMzBA",
		description:
			"Reprehenderit occaecat occaecat duis mollit velit nulla non.",
		isVacant: true,
		userId: null,
	},
	{
		id: 2,
		title: "Название 2",
		image: "AgACAgIAAxkBAAOYZV8NYRWvdtZDkNuw9Wrjj5AKT_wAAk3SMRt5m_lKPkEzRuMsJOYBAAMCAANzAAMzBA",
		description:
			"Mollit quis ad fugiat duis fugiat adipisicing dolor voluptate ullamco enim cillum.",
		isVacant: false,
		userId: 446374743,
	},
];

export class Showcase<C extends Context> extends Composer<C> {
	constructor(...args: any[]) {
		super(...args);

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
	}

	async takePresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, chatId, messageId] = this.getInfo(ctx, prefix);

		const presents = await this.getPresents();
		const present = presents.find((present) => present.id === presentId);

		if (!present) {
			await this.updatePresentMessage(
				ctx,
				presents[0],
				chatId,
				messageId
			);

			return;
		}

		if (present.isVacant) {
			present.isVacant = false;
			present.userId = ctx.from.id;

			await this.updatePresentMessage(ctx, present, chatId, messageId);
			return;
		}
	}

	async revokePresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, chatId, messageId] = this.getInfo(ctx, prefix);

		const presents = await this.getPresents();
		const present = presents.find((present) => present.id === presentId);

		if (!present) {
			await this.updatePresentMessage(
				ctx,
				presents[0],
				chatId,
				messageId
			);

			return;
		}

		if (!present.isVacant && present.userId === ctx.from.id) {
			present.isVacant = true;
			present.userId = null;

			await this.updatePresentMessage(ctx, present, chatId, messageId);
			return;
		}
	}

	async prevPresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, chatId, messageId] = this.getInfo(ctx, prefix);

		const presents = await this.getPresents();

		if (!presentId) {
			presentId = presents[0].id;
		}

		const presentIds = presents.map((present) => present.id);
		const index = Math.max(0, presentIds.indexOf(presentId));
		const present = presents[index === 0 ? presents.length - 1 : index - 1];

		await this.updatePresentMessage(ctx, present, chatId, messageId);
	}

	async nextPresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, chatId, messageId] = this.getInfo(ctx, prefix);
		const presents = await this.getPresents();

		if (!presentId) {
			presentId = presents[0].id;
		}

		const presentIds = presents.map((present) => present.id);
		const index = Math.max(0, presentIds.indexOf(presentId));
		const present = presents[(index + 1) % presents.length];

		await this.updatePresentMessage(ctx, present, chatId, messageId);
	}

	getInfo(
		ctx: Filter<C, "callback_query:data">,
		prefix: string
	): [null | number, null | number, null | number] {
		const info: [null | number, null | number, null | number] = [
			null,
			null,
			null,
		];

		const reg = new RegExp(`${prefix}(\\d+)`);
		const match = ctx.callbackQuery.data.match(reg);

		if (match) {
			info[0] = parseInt(match[1], 10);
		}

		const chatId =
			ctx.chat?.id ||
			ctx.message?.chat.id ||
			ctx.callbackQuery.message?.chat.id;

		if (chatId) {
			info[1] = chatId;
		}

		const messageId = ctx.callbackQuery.message?.message_id;

		if (messageId) {
			info[2] = messageId;
		}

		return info;
	}

	async updatePresentMessage(
		ctx: Filter<C, "callback_query:data">,
		present: Present,
		chatId: number | null,
		messageId: number | null
	) {
		if (!chatId || !messageId) {
			return;
		}

		const inlineKeyboard = new InlineKeyboard();
		inlineKeyboard.text("<", `prev_present_${present.id}`);
		if (present.isVacant) {
			inlineKeyboard.text("Я возьму", `take_present_${present.id}`);
		} else if (present.userId === ctx.from.id) {
			inlineKeyboard.text("Отказаться", `revoke_present_${present.id}`);
		} else {
			inlineKeyboard.text("Занято");
		}
		inlineKeyboard.text(">", `next_present_${present.id}`);

		const caption = `${present.title}\n${present.description}`;
		const photo = InputMediaBuilder.photo(present.image, { caption });

		await ctx.api.answerCallbackQuery(ctx.callbackQuery.id);

		await ctx.api.editMessageMedia(chatId, messageId, photo, {
			reply_markup: inlineKeyboard,
		});
	}

	async getPresents() {
		return presents;
	}
}
