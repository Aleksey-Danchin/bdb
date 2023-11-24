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

export class Admin<C extends Context> extends Composer<C> {
	constructor(...args: any[]) {
		super(...args);

		this.errorBoundary(errorHandler);

		this.command("users", (ctx) => this.showUsers(ctx));

		this.command(["add_owner", "addowner"], (ctx) => this.addOwner(ctx));
		this.command(
			["remove_owner", "removeowner", "delete_owner", "deleteowner"],
			(ctx) => this.deleteOwner(ctx)
		);

		this.errorBoundary(errorHandler);
	}

	async showUsers(ctx: CommandContext<C>) {
		const users = await prisma.user.findMany();
		const admins = users.filter((user) => user.isAdmin);
		const owners = users.filter((user) => user.isOwner);
		const friends = users.filter((user) => user.isFriend);

		const messages = [];

		if (admins.length) {
			messages.push("Админы: " + usersToList(admins));
		} else {
			messages.push("Админов пока нет.");
		}

		if (owners.length) {
			messages.push("Владельцы: " + usersToList(owners));
		} else {
			messages.push("Владельцов пока нет.");
		}

		if (friends.length) {
			messages.push("Друзья: " + usersToList(friends));
		} else {
			messages.push("Друзей пока нет.");
		}

		ctx.reply(messages.join("\n\n"));
	}

	async addOwner(ctx: CommandContext<C>) {
		const mentions = ctx.message?.entities.filter(
			(entity) => entity.type === "mention"
		);

		if (!mentions?.length) {
			await ctx.reply("Вы не указали кого хотите сделать владельцем.");
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
			data: { isOwner: true },
		});

		await ctx.reply(
			"Следующие люди теперь владельцы:\n" +
				users.map((user) => `@${user.username}`).join(", ")
		);

		for (const user of users) {
			if (!user.isOwner) {
				await ctx.api
					.sendMessage(
						user.id,
						"Поздравляю! Теперь вы владелец бота @" +
							ctx.me.username
					)
					.catch(errorHandler);
			}
		}
	}

	async deleteOwner(ctx: CommandContext<C>) {
		const mentions = ctx.message?.entities.filter(
			(entity) => entity.type === "mention"
		);

		if (!mentions?.length) {
			await ctx.reply("Вы не указали кого убрать из владельцев.");
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
			data: { isOwner: false },
		});

		await ctx.reply(
			"Следующие люди теперь не владельцы:\n" +
				users.map((user) => `@${user.username}`).join(", ")
		);

		for (const user of users) {
			if (user.isOwner) {
				await ctx.api
					.sendMessage(
						user.id,
						"Вы больше не владелец бота @" + ctx.me.username
					)
					.catch(errorHandler);
			}
		}
	}
}
