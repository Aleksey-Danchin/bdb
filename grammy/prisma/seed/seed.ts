import { PrismaClient } from "../client";

const presents = [
	{
		title: "Название 1",
		image: "AgACAgIAAxkBAAOKZV7_1MAfUEnPJNJL_mIoG4BKKXQAAgbSMRt5m_lKITn4FHXJa0ABAAMCAAN5AAMzBA",
		description:
			"Reprehenderit occaecat occaecat duis mollit velit nulla non.",
	},
	{
		title: "Название 2",
		image: "AgACAgIAAxkBAAOYZV8NYRWvdtZDkNuw9Wrjj5AKT_wAAk3SMRt5m_lKPkEzRuMsJOYBAAMCAANzAAMzBA",
		description:
			"Mollit quis ad fugiat duis fugiat adipisicing dolor voluptate ullamco enim cillum.",
	},
];

const prisma = new PrismaClient();

async function main() {
	for (const present of presents) {
		await prisma.present.upsert({
			where: { title: present.title },
			update: present,
			create: present,
		});
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
