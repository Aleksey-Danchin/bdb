import { bot, prisma } from "./bot";
import { run } from "@grammyjs/runner";
import { Showcase } from "./Showcase";
import { errorHandler } from "./util";

const NODE_ENV = process.env["NODE_ENV"];
bot.use(async (ctx, next) => {
	if (ctx.from?.id) {
		const data = {
			id: ctx.from.id,
			first_name: ctx.from?.first_name,
			last_name: ctx.from?.last_name,
			username: ctx.from?.username,
		};

		await prisma.user.upsert({
			where: { id: data.id },
			update: data,
			create: data,
		});

		if (NODE_ENV === "development") {
			await prisma.user.update({
				where: { id: data.id },
				data: {
					// isFriend: true,
				},
			});
		}
	}

	next();
});

const ADMIN_PASSWORD = process.env["ADMIN_PASSWORD"];
bot.on("message:text", async (ctx, next) => {
	if (ctx.message.text !== ADMIN_PASSWORD) {
		return next();
	}

	await Promise.all([
		ctx.api.deleteMessage(ctx.chat.id, ctx.message.message_id),
		ctx.api.sendMessage(ctx.chat.id, "Аве админ!"),
		prisma.user.update({
			where: { id: ctx.from.id },
			data: { isAdmin: true },
		}),
	]);
});

const showcase = new Showcase();

bot.errorBoundary(errorHandler).use(showcase);
bot.catch(errorHandler);

const runner = run(bot);

const stopRunner = () => runner.isRunning() && runner.stop();
process.once("SIGINT", stopRunner);
process.once("SIGTERM", stopRunner);
