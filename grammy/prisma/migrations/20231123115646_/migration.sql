/*
  Warnings:

  - The primary key for the `Present` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Present` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `presentId` on the `PresentMessage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "PresentMessage" DROP CONSTRAINT "PresentMessage_presentId_fkey";

-- AlterTable
ALTER TABLE "Present" DROP CONSTRAINT "Present_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Present_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PresentMessage" DROP COLUMN "presentId",
ADD COLUMN     "presentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PresentMessage" ADD CONSTRAINT "PresentMessage_presentId_fkey" FOREIGN KEY ("presentId") REFERENCES "Present"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
