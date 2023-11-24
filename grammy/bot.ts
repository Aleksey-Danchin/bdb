import { PrismaAdapter } from "@grammyjs/storage-prisma";
import {
	Bot,
	Context,
	InlineKeyboard,
	SessionFlavor,
	enhanceStorage,
	session,
} from "grammy";
import { PrismaClient } from "./prisma/client";
import {
	Conversation,
	ConversationFlavor,
	conversations,
	createConversation,
} from "@grammyjs/conversations";
import { shuffle } from "./util";
import { deletePresentMessages, updatePresentMessages } from "./PresentService";

const TELEGRAM_BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"];

if (!TELEGRAM_BOT_TOKEN) {
	throw Error("TELEGRAM_BOT_TOKEN not found.");
}

interface SessionData_v0 {
	editPresentId: number | null;
}

type SessionData = SessionData_v0;

export type MyContext = Context &
	ConversationFlavor &
	SessionFlavor<SessionData>;

export const bot = new Bot<MyContext>(TELEGRAM_BOT_TOKEN);
export const prisma = new PrismaClient();

export const sessionInit = (): SessionData => ({
	editPresentId: null,
});

bot.use(
	session({
		initial: () => ({}),
	})
);

export type MyConversation = Conversation<MyContext>;

bot.use(conversations());

bot.use(createConversation(createPresent, "create_present"));
bot.use(createConversation(editPresent, "edit_present"));

async function createPresent(conversation: MyConversation, ctx: MyContext) {
	let title = "";
	let image = "";
	let description = "";

	await ctx.reply(
		"Любую информацию можно будет изменить после создания подарка."
	);

	while (true) {
		await ctx.reply("Давай дадим название подарку:");
		const data = await conversation.wait();

		if (data.message?.text) {
			title = data.message.text;
			break;
		}
	}

	while (true) {
		await ctx.reply("Пришли картинку:");
		const data = await conversation.wait();

		if (data.message?.photo?.length) {
			image = data.message.photo[0].file_id;
			break;
		}
	}

	while (true) {
		await ctx.reply(
			"Дай описания подарка. Цвет, размер, количество, где можно взять, как упаковать и тд."
		);
		const data = await conversation.wait();

		if (data.message?.text) {
			description = data.message.text;
			break;
		}
	}

	while (true) {
		const message = await ctx.replyWithPhoto(image, {
			caption: [title, description].join("\n\n"),
			reply_markup: new InlineKeyboard()
				.text("Отменить")
				.text("Все верно?")
				.text("Готово"),
		});

		const answer = await conversation.wait();

		await ctx.api.deleteMessage(message.chat.id, message.message_id);

		const text = answer.update.callback_query?.data;

		if (text === "Отменить") {
			await ctx.reply("Ты можешь добавить новый подарок в любой момент.");
			break;
		}

		if (text === "Готово") {
			await prisma.present.create({
				data: {
					title,
					image,
					description,
				},
			});

			await ctx.reply("Подарок добавлен! =)");
			break;
		}
	}
}

async function editPresent(conversation: MyConversation, ctx: MyContext) {
	if (!ctx.session.editPresentId) {
		throw Error("ctx.session.editPresentId is not number.");
	}

	const present = await prisma.present.findFirst({
		where: { id: ctx.session.editPresentId },
	});

	if (!present) {
		throw Error("Present not found");
	}

	let { title, description, image } = present;

	mainloop: while (true) {
		const message = await ctx.replyWithPhoto(image, {
			caption: [title, description].join("\n\n"),
			reply_markup: new InlineKeyboard()
				.text("Название")
				.text("Описание")
				.text("Картинку")
				.row()
				.text("Удалить")
				.text("Сохранить"),
		});

		ctx = await conversation.wait();

		await ctx.api.deleteMessage(message.chat.id, message.message_id);

		const data = ctx.update.callback_query?.data;

		if (data === "Название") {
			while (true) {
				await ctx.reply("Пришли новое название:");
				const data = await conversation.wait();
				const text = data.message?.text;

				if (text) {
					title = text;
					break;
				}
			}
		} else if (data === "Описание") {
			while (true) {
				await ctx.reply("Пришли новое описание:");
				const data = await conversation.wait();
				const text = data.message?.text;

				if (text) {
					description = text;
					break;
				}
			}
		} else if (data === "Картинку") {
			while (true) {
				await ctx.reply("Пришли новую картинку (фото):");
				const data = await conversation.wait();

				if (
					data.message?.photo?.length &&
					data.message.photo[0].file_id
				) {
					image = data.message.photo[0].file_id;
					break;
				}
			}
		} else if (data === "Удалить") {
			while (true) {
				const buttons = shuffle([
					"Удалить",
					"Нет",
					"Не надо",
					"Стоп",
				]).map((text) => InlineKeyboard.text(text));

				await ctx.reply("Удаление безвозвратное, удалить?", {
					reply_markup: InlineKeyboard.from([buttons]),
				});

				const data = await conversation.wait();
				const text = data.message?.text;

				if (text === "Удалить") {
					await deletePresentMessages(present.id);
					await prisma.present.delete({ where: { id: present.id } });
					await ctx.reply("Удалено.");
					break mainloop;
				}
			}
		} else if (data === "Сохранить") {
			await prisma.present.update({
				where: { id: present.id },
				data: { title, description, image },
			});

			await updatePresentMessages(present.id);
			await ctx.reply("Сохранено");
			break mainloop;
		}
	}
}
