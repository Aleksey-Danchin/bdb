import { bot, prisma } from "./bot";
import { run } from "@grammyjs/runner";
import { Friend } from "./Friend";
import { errorHandler, reverse } from "./util";
import { Owner } from "./Owner";
import { Admin } from "./Admin";

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

	const user = await prisma.user.findFirst({ where: { id: ctx.from.id } });
	if (!user) {
		return next();
	}

	await Promise.all([
		ctx.api.deleteMessage(ctx.chat.id, ctx.message.message_id),
		ctx.api.sendMessage(
			ctx.chat.id,
			user.isAdmin ? reverse("Аве админ!") : "Аве админ!"
		),
		prisma.user.update({
			where: { id: ctx.from.id },
			data: { isAdmin: !user.isAdmin },
		}),
	]);
});

const admin = new Admin();
bot.errorBoundary(errorHandler)
	.filter(async (ctx) => {
		const user = await prisma.user.findFirst({
			where: { id: ctx.from?.id },
		});

		return Boolean(user && user.isAdmin);
	})
	.use(admin);

const owner = new Owner();
bot.errorBoundary(errorHandler)
	.filter(async (ctx) => {
		const user = await prisma.user.findFirst({
			where: { id: ctx.from?.id },
		});

		return Boolean(user && user.isOwner);
	})
	.use(owner);

bot.catch(errorHandler);

const friend = new Friend();
bot.errorBoundary(errorHandler)
	.filter(async (ctx) => {
		const user = await prisma.user.findFirst({
			where: { id: ctx.from?.id },
		});

		return Boolean(user && user.isFriend);
	})
	.use(friend);

bot.catch(errorHandler);

const runner = run(bot);

const stopRunner = () => runner.isRunning() && runner.stop();
process.once("SIGINT", stopRunner);
process.once("SIGTERM", stopRunner);
