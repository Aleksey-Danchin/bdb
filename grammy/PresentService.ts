import { InlineKeyboard, InputMediaBuilder } from "grammy";
import { bot, prisma } from "./bot";
import { PresentMessage, Present } from "./prisma/client";
import { errorHandler } from "./util";

export const sendPresentMessage = async (chatId: number) => {
	const answer = await bot.api
		.sendPhoto(chatId, "https://grammy.dev/images/grammY.png", {
			caption: "Пару секунд . . .",
		})
		.catch(errorHandler);

	if (!answer) {
		return;
	}

	const present = await prisma.present.findFirst({
		orderBy: { createdAt: "asc" },
	});

	if (!present) {
		return;
	}

	const messageForDeleting = await prisma.presentMessage.findFirst({
		where: { chatId },
	});

	if (messageForDeleting) {
		await bot.api
			.deleteMessage(
				messageForDeleting.chatId,
				messageForDeleting.messageId
			)
			.catch(errorHandler);
	}

	const data = {
		chatId,
		messageId: answer.message_id,
		presentId: present.id,
		userId: chatId,
	};

	const message = await prisma.presentMessage.upsert({
		where: { chatId },
		update: data,
		create: data,
	});

	await updatePresentMessage(present, message);
};

export const updatePresentMessages = async (_present: Present | number) => {
	const present =
		typeof _present === "number"
			? await prisma.present.findFirst({
					where: { id: _present },
			  })
			: _present;

	if (!present) {
		throw Error("Present not found");
	}

	const messages = await prisma.presentMessage.findMany({
		where: { presentId: present.id },
	});

	for (const message of messages) {
		await updatePresentMessage(present, message);
	}
};

export const deletePresentMessages = async (_present: Present | number) => {
	const present =
		typeof _present === "number"
			? await prisma.present.findFirst({ where: { id: _present } })
			: _present;

	if (!present) {
		throw Error("Present not found");
	}

	const messages = await prisma.presentMessage.findMany({
		where: { presentId: present.id },
	});

	for (const message of messages) {
		await deletePresentMessage(present, message);
	}
};

export const updatePresentMessage = async (
	_present: Present | number,
	_message: PresentMessage | number
) => {
	const present =
		typeof _present === "number"
			? await prisma.present.findFirst({ where: { id: _present } })
			: _present;

	if (!present) {
		throw Error("Present not found");
	}

	const message =
		typeof _message === "number"
			? await prisma.presentMessage.findFirst({
					where: { messageId: _message },
			  })
			: _message;

	if (!message) {
		throw Error("Message not found");
	}

	const user = await prisma.user.findFirst({ where: { id: message.userId } });

	if (!user) {
		throw Error("User not found!");
	}

	const inlineKeyboard = new InlineKeyboard();

	inlineKeyboard.text("<", `prev_present_${present.id}`);

	if (user && user.isOwner) {
		inlineKeyboard.text(present.isVacant ? "Свободно" : "Занято");
	} else if (user && user.isFriend) {
		if (present.isVacant) {
			inlineKeyboard.text("Я возьму", `take_present_${present.id}`);
		} else if (present.userId === message.userId) {
			inlineKeyboard.text("Отказаться", `revoke_present_${present.id}`);
		} else {
			inlineKeyboard.text("Занято");
		}
	}
	inlineKeyboard.text(">", `next_present_${present.id}`);

	if (user && user.isOwner) {
		inlineKeyboard
			.row()
			.text("Редактировать", `edit_present_${present.id}`);
	}

	const caption = `${present.title}\n${present.description}`;
	const photo = InputMediaBuilder.photo(present.image, { caption });

	await bot.api
		.editMessageMedia(message.chatId, message.messageId, photo, {
			reply_markup: inlineKeyboard,
		})
		.catch(errorHandler);

	await prisma.presentMessage.update({
		where: { chatId: message.chatId },
		data: { presentId: present.id },
	});
};

export const deletePresentMessage = async (
	_present: Present | number,
	_message: PresentMessage | number
) => {
	const present =
		typeof _present === "number"
			? await prisma.present.findFirst({ where: { id: _present } })
			: _present;

	if (!present) {
		throw Error("Present not found");
	}

	const message =
		typeof _message === "number"
			? await prisma.presentMessage.findFirst({
					where: { messageId: _message },
			  })
			: _message;

	if (!message) {
		throw Error("Message not found");
	}

	await bot.api
		.deleteMessage(message.chatId, message.messageId)
		.catch(errorHandler);

	await prisma.presentMessage.delete({
		where: { chatId: message.chatId },
	});
};
