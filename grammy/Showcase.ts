import {
	Composer,
	Context,
	Filter,
	InlineKeyboard,
	InputMediaBuilder,
} from "grammy";
import { prisma } from "./bot";
import { errorHandler } from "./util";

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

		this.use((ctx) => {
			const chatId = ctx.chat?.id;

			if (chatId) {
				this.sendPresent(ctx, chatId);
			}
		});

		this.errorBoundary(errorHandler);
	}

	async sendPresent(ctx: Context, chatId: number) {
		const greeting = await ctx.reply("Hi").catch(errorHandler);

		const oldMessage = await prisma.presentMessage.findFirst({
			where: { chatId },
		});

		if (oldMessage) {
			await prisma.presentMessage.delete({ where: { chatId } });

			await ctx.api
				.deleteMessage(oldMessage.chatId, oldMessage.messageId)
				.catch(errorHandler);
		}

		const present = await prisma.present.findFirst();

		if (!present) {
			await ctx.api.sendMessage(
				chatId,
				"Что-то пошло не так. Попробуйте еще раз чуть позже."
			);

			return;
		}

		const inlineKeyboard = new InlineKeyboard();
		inlineKeyboard.text("<", `prev_present_${present.id}`);
		if (present.isVacant) {
			inlineKeyboard.text("Я возьму", `take_present_${present.id}`);
		} else if (present.userId === ctx.from?.id) {
			inlineKeyboard.text("Отказаться", `revoke_present_${present.id}`);
		} else {
			inlineKeyboard.text("Занято");
		}
		inlineKeyboard.text(">", `next_present_${present.id}`);

		const caption = `${present.title}\n${present.description}`;

		const message = await ctx
			.replyWithPhoto(present.image, {
				reply_markup: inlineKeyboard,
				caption,
			})
			.catch(errorHandler);

		if (message) {
			await prisma.presentMessage.create({
				data: {
					chatId,
					messageId: message.message_id,
					userId: chatId,
					presentId: present.id,
				},
			});
		}

		if (greeting) {
			await ctx.api
				.deleteMessage(greeting.chat.id, greeting.message_id)
				.catch(errorHandler);
		}
	}

	async takePresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, chatId, messageId] = this.getInfo(ctx, prefix);

		const presents = await this.getPresents();
		const present = presents.find((present) => present.id === presentId);

		if (!present || !presentId) {
			await this.updatePresentMessage(
				ctx,
				presents[0].id,
				chatId,
				messageId
			);

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

			await this.updatePresentMessage(ctx, presentId, chatId, messageId);
			return;
		}
	}

	async revokePresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, chatId, messageId] = this.getInfo(ctx, prefix);

		const presents = await this.getPresents();
		const present = presents.find((present) => present.id === presentId);

		if (!present || !presentId) {
			await this.updatePresentMessage(
				ctx,
				presents[0].id,
				chatId,
				messageId
			);

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

			await this.updatePresentMessage(ctx, presentId, chatId, messageId);
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

		await this.updatePresentMessage(ctx, present.id, chatId, messageId);
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

		await this.updatePresentMessage(ctx, present.id, chatId, messageId);
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
		presentId: number,
		chatId: number | null,
		messageId: number | null
	) {
		if (!chatId || !messageId) {
			return;
		}

		const present = await prisma.present.findFirst({
			where: { id: presentId },
		});

		if (!present) {
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
		return await prisma.present.findMany({ orderBy: { createdAt: "asc" } });
	}
}
