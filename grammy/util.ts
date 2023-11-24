import { BotError, Context, GrammyError, HttpError } from "grammy";

export const errorHandler = <T extends Context>(err: BotError<T>) => {
	if ("ctx" in err) {
		const ctx = err.ctx;
		console.error(`Error while handling update ${ctx?.update?.update_id}:`);
		const e = err.error;
		if (e instanceof GrammyError) {
			console.error("Error in request:", e.description);
		} else if (e instanceof HttpError) {
			console.error("Could not contact Telegram:", e);
		} else {
			console.error("Unknown error:", e);
		}
	} else {
		console.error("Unknown error:", err);
	}
};

export const delay = (n: number) =>
	new Promise<void>((resolve) => setTimeout(resolve, n));

export const reverse = (str: string) => str.split("").reverse().join("");

export const shuffle = <T>(items: T[]) => {
	const shuffled = [];

	while (items.length) {
		const index = Math.floor(Math.random() * items.length);
		const item = items.splice(index, 1)[0];
		shuffled.push(item);
	}

	items.push(...shuffled);
	return items;
};
