/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Present` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Present_title_key" ON "Present"("title");
