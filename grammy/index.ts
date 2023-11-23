import { GrammyError, HttpError, InlineKeyboard } from "grammy";
import { bot } from "./bot";
import { Showcase } from "./Showcase";

export interface Present {
	id: number;
	title: string;
	image: string;
	description: string;
	isVacant: boolean;
	userId: number | null;
}

const showcase = new Showcase();

bot.use(showcase);

bot.on("message", (ctx, next) => {
	console.log("ctx.update:", ctx.update);
	console.log("ctx.message:", ctx.message);

	const inlineKeyboard = new InlineKeyboard()
		.text("<", "prev_present_1")
		.text(">", "next_present_1");

	ctx.replyWithPhoto(
		"AgACAgIAAxkBAAOKZV7_1MAfUEnPJNJL_mIoG4BKKXQAAgbSMRt5m_lKITn4FHXJa0ABAAMCAAN5AAMzBA",
		{
			reply_markup: inlineKeyboard,
			caption: "Подпись!",
		}
	);

	next();
});

bot.catch((err) => {
	const ctx = err.ctx;
	console.error(`Error while handling update ${ctx.update.update_id}:`);
	const e = err.error;
	if (e instanceof GrammyError) {
		console.error("Error in request:", e.description);
	} else if (e instanceof HttpError) {
		console.error("Could not contact Telegram:", e);
	} else {
		console.error("Unknown error:", e);
	}
});

process.once("SIGINT", () => bot.stop());
process.once("SIGTERM", () => bot.stop());

bot.start();
