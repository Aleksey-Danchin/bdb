import { PrismaAdapter } from "@grammyjs/storage-prisma";
import { PrismaClient } from "@prisma/client";
import { Bot, Context, SessionFlavor, enhanceStorage, session } from "grammy";

const TELEGRAM_BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"];

if (!TELEGRAM_BOT_TOKEN) {
	throw Error("TELEGRAM_BOT_TOKEN not found.");
}

interface SessionData {
	counter: number;
}

type MyContext = Context & SessionFlavor<SessionData>;

export const bot = new Bot<MyContext>(TELEGRAM_BOT_TOKEN);
export const prisma = new PrismaClient();

bot.use(
	session({
		initial: () => ({ counter: 0, foo: 0 }),

		storage: enhanceStorage({
			storage: new PrismaAdapter(prisma.session),
		}),
	})
);
