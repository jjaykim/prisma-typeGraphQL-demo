/*
  Warnings:

  - You are about to drop the column `userId` on the `ItemLocation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roomId,itemId]` on the table `ItemLocation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ItemLocation" DROP CONSTRAINT "ItemLocation_userId_fkey";

-- DropIndex
DROP INDEX "ItemLocation_userId_roomId_itemId_key";

-- AlterTable
ALTER TABLE "ItemLocation" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_ItemToRoom" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToRoom_AB_unique" ON "_ItemToRoom"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToRoom_B_index" ON "_ItemToRoom"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ItemLocation_roomId_itemId_key" ON "ItemLocation"("roomId", "itemId");

-- AddForeignKey
ALTER TABLE "_ItemToRoom" ADD CONSTRAINT "_ItemToRoom_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToRoom" ADD CONSTRAINT "_ItemToRoom_B_fkey" FOREIGN KEY ("B") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
