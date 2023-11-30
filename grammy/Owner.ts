import { CommandContext, Composer, Filter } from "grammy";
import { errorHandler } from "./util";
import { MyContext, prisma } from "./bot";
import { User } from "./prisma/client";
import {
	sendPresentMessage,
	updatePresentMessage,
	updatePresentMessages,
} from "./PresentService";

const usersToList = (users: User[]) =>
	users
		.map(
			(user) =>
				`${user.username ? `@${user.username} ` : ""}${
					user.first_name ? `${user.first_name} ` : ""
				} ${user.last_name || ""}`
		)
		.join(", ");

export class Owner<C extends MyContext> extends Composer<C> {
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
			.filter((ctx) => ctx.callbackQuery.data.startsWith("edit_present_"))
			.use((ctx) => this.editPresent(ctx, "edit_present_"));

		this.command("friends", (ctx) => this.showFriends(ctx));

		this.command(["setshowstatus", "set_show_status"], (ctx) =>
			this.setShowStatus(ctx)
		);

		this.command(["add_friend", "addfriend"], (ctx) => this.addFriend(ctx));
		this.command(
			["remove_friend", "removefriend", "delete_friend", "deletefriend"],
			(ctx) => this.deleteFriend(ctx)
		);

		this.command(
			["addpresent", "add_present", "create_present", "createpresent"],
			(ctx) => ctx.conversation.enter("create_present")
		);

		this.use(async (ctx) => {
			const chatId = ctx.chat?.id;

			if (chatId) {
				await sendPresentMessage(chatId);
			}
		});

		this.errorBoundary(errorHandler);
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

	async editPresent(ctx: Filter<C, "callback_query:data">, prefix: string) {
		let [presentId, messageId] = this.getInfo(ctx, prefix);

		if (!presentId) {
			throw Error("Present id not found.");
		}

		const present = await prisma.present.findFirst({
			where: { id: presentId },
		});

		if (!present) {
			throw Error("Present not found");
		}

		ctx.session.editPresentId = presentId;

		await ctx.conversation.enter("edit_present");
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

	async showFriends(ctx: CommandContext<C>) {
		const users = await prisma.user.findMany({ where: { isFriend: true } });

		if (!users.length) {
			await ctx.reply("Друзей пока не добавлено");
			return;
		}

		await ctx.reply("Список друзей: " + usersToList(users));
	}

	async setShowStatus(ctx: CommandContext<C>) {
		if (!ctx.message?.text) {
			return;
		}

		const { text } = ctx.message;
		const mode = text.slice(-3).trim();

		if (!["on", "off"].includes(mode)) {
			return;
		}

		if (!ctx.from?.id) {
			return;
		}

		try {
			await prisma.user.update({
				where: { id: ctx.from.id },
				data: { isShowStatus: mode === "on" },
			});

			await ctx.reply(
				mode === "on"
					? "Теперь вы видите статус подарков"
					: "Статус подарков для вас скрыт"
			);

			await sendPresentMessage(ctx.chat.id);
		} catch (error) {
			console.error(error);
		}
	}

	async addFriend(ctx: CommandContext<C>) {
		const mentions = ctx.message?.entities.filter(
			(entity) => entity.type === "mention"
		);

		if (!mentions?.length) {
			await ctx.reply("Вы не указали кого хотите добавить в друзья.");
			return;
		}

		if (!ctx.message?.text) {
			return;
		}

		const { text } = ctx.message;

		const usernames = mentions.map((mention) =>
			text.slice(mention.offset + 1, mention.offset + mention.length)
		);

		const users = await prisma.user.findMany({
			where: {
				OR: usernames.map((username) => ({
					username: {
						mode: "insensitive",
						equals: username,
					},
				})),
			},
		});

		if (!users.length) {
			await ctx.reply(
				"К сожалению ни один из запрашеваемых людей не найден в моей базе данных. Возможно они мне еще ни разу не писали или в их профиле не указан username."
			);

			return;
		}

		const notFined = usernames.filter((username) =>
			users.every((user) => {
				return user.username?.toLowerCase() !== username.toLowerCase();
			})
		);

		if (notFined.length) {
			await ctx.reply(
				"Следующие люди не найдены в базе данных бота:\n" +
					notFined.map((username) => `@${username}`).join(", ") +
					"\n\nВозможно они еще ни разу не писали мне."
			);
		}

		await prisma.user.updateMany({
			where: { OR: users.map((user) => ({ username: user.username })) },
			data: { isFriend: true },
		});

		await ctx.reply(
			"Следующие люди теперь друзья:\n" +
				users.map((user) => `@${user.username}`).join(", ")
		);

		for (const user of users) {
			if (!user.isFriend) {
				await ctx.api
					.sendMessage(
						user.id,
						"Поздравляю! Вы можете пользоваться ботом @" +
							ctx.me.username
					)
					.catch(errorHandler);
			}
		}
	}

	async deleteFriend(ctx: CommandContext<C>) {
		const mentions = ctx.message?.entities.filter(
			(entity) => entity.type === "mention"
		);

		if (!mentions?.length) {
			await ctx.reply("Вы не указали кого убрать из друзей.");
			return;
		}

		if (!ctx.message?.text) {
			return;
		}

		const { text } = ctx.message;

		const usernames = mentions.map((mention) =>
			text.slice(mention.offset + 1, mention.offset + mention.length)
		);

		const users = await prisma.user.findMany({
			where: {
				OR: usernames.map((username) => ({
					username: {
						mode: "insensitive",
						equals: username,
					},
				})),
			},
		});

		if (!users.length) {
			await ctx.reply(
				"К сожалению ни один из запрашеваемых людей не найден в моей базе данных. Возможно они мне еще ни разу не писали или в их профиле не указан username."
			);

			return;
		}

		const notFined = usernames.filter((username) =>
			users.every((user) => {
				return user.username?.toLowerCase() !== username.toLowerCase();
			})
		);

		if (notFined.length) {
			await ctx.reply(
				"Следующие люди не найдены в базе данных бота:\n" +
					notFined.map((username) => `@${username}`).join(", ") +
					"\n\nВозможно они еще ни разу не писали мне."
			);
		}

		await prisma.user.updateMany({
			where: { OR: users.map((user) => ({ username: user.username })) },
			data: { isFriend: false },
		});

		const presents = await prisma.present.findMany({
			where: { OR: users.map((user) => ({ userId: user.id })) },
		});

		await prisma.present.updateMany({
			where: { OR: users.map((user) => ({ userId: user.id })) },
			data: { isVacant: true },
		});

		for (const present of presents) {
			await updatePresentMessages(present.id);
		}

		await ctx.reply(
			"Следующие люди теперь не в списке друзей:\n" +
				users.map((user) => `@${user.username}`).join(", ")
		);

		for (const user of users) {
			if (user.isFriend) {
				await ctx.api
					.sendMessage(
						user.id,
						"Ваши подарки анулировались. Вас удалили из бота @" +
							ctx.me.username
					)
					.catch(errorHandler);
			}
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
