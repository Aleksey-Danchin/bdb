-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "first_name" TEXT,
    "username" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isOwner" BOOLEAN NOT NULL DEFAULT false,
    "isFriend" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Present" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isVacant" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PresentMessage" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chatId" INTEGER NOT NULL,
    "messageId" INTEGER NOT NULL,
    "commit" TEXT NOT NULL,
    "presentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Present_id_key" ON "Present"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PresentMessage_chatId_messageId_key" ON "PresentMessage"("chatId", "messageId");

-- AddForeignKey
ALTER TABLE "Present" ADD CONSTRAINT "Present_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PresentMessage" ADD CONSTRAINT "PresentMessage_presentId_fkey" FOREIGN KEY ("presentId") REFERENCES "Present"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PresentMessage" ADD CONSTRAINT "PresentMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
