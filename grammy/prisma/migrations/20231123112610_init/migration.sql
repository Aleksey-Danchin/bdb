-- DropForeignKey
ALTER TABLE "PresentMessage" DROP CONSTRAINT "PresentMessage_presentId_fkey";

-- DropIndex
DROP INDEX "Present_id_key";

-- AlterTable
ALTER TABLE "Present" ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Present_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PresentMessage" ALTER COLUMN "presentId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "PresentMessage" ADD CONSTRAINT "PresentMessage_presentId_fkey" FOREIGN KEY ("presentId") REFERENCES "Present"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
