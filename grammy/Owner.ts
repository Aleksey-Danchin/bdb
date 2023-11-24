import { CommandContext, Composer, Context } from "grammy";
import { errorHandler } from "./util";
import { prisma } from "./bot";
import { User } from "./prisma/client";

const usersToList = (users: User[]) =>
	users
		.map(
			(user) =>
				`${user.username ? `@${user.username} ` : ""}${
					user.first_name ? `${user.first_name} ` : ""
				} ${user.last_name || ""}`
		)
		.join(", ");

export class Owner<C extends Context> extends Composer<C> {
	constructor(...args: any[]) {
		super(...args);

		this.errorBoundary(errorHandler);

		this.command("friends", (ctx) => this.showFriends(ctx));

		this.command(["add_friend", "addfriend"], (ctx) => this.addFriend(ctx));
		this.command(
			["remove_friend", "removefriend", "delete_friend", "deletefriend"],
			(ctx) => this.deleteFriend(ctx)
		);

		this.errorBoundary(errorHandler);
	}

	async showFriends(ctx: CommandContext<C>) {
		const users = await prisma.user.findMany({ where: { isFriend: true } });

		if (!users.length) {
			await ctx.reply("Друзей пока не добавлено");
			return;
		}

		await ctx.reply("Список друзей: " + usersToList(users));
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
}
