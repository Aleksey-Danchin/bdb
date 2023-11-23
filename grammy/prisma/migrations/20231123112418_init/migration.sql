-- DropForeignKey
ALTER TABLE "Present" DROP CONSTRAINT "Present_userId_fkey";

-- AlterTable
ALTER TABLE "Present" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Present" ADD CONSTRAINT "Present_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
