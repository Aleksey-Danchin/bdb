import { PrismaAdapter } from "@grammyjs/storage-prisma";
import { PrismaClient } from "@prisma/client";
import { Bot, Context, SessionFlavor, enhanceStorage, session } from "grammy";

const TELEGRAM_BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"];

if (!TELEGRAM_BOT_TOKEN) {
	throw Error("TELEGRAM_BOT_TOKEN not found.");
}

interface SessionData_v0 {
	counter: number;
}

type SessionData = SessionData_v0;

type MyContext = Context & SessionFlavor<SessionData>;

export const bot = new Bot<MyContext>(TELEGRAM_BOT_TOKEN);
export const prisma = new PrismaClient();

export const sessionInit = (): SessionData => ({
	counter: 0,
});

bot.use(
	session({
		initial: sessionInit,

		storage: enhanceStorage({
			storage: new PrismaAdapter(prisma.session),
		}),
	})
);
