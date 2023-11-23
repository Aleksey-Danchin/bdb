/*
  Warnings:

  - You are about to drop the column `commit` on the `PresentMessage` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chatId]` on the table `PresentMessage` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PresentMessage" DROP COLUMN "commit";

-- CreateIndex
CREATE UNIQUE INDEX "PresentMessage_chatId_key" ON "PresentMessage"("chatId");
