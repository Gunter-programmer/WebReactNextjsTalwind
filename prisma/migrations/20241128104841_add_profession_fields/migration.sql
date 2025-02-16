/*
  Warnings:

  - You are about to drop the column `testResults` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "testResults",
ADD COLUMN     "testResult" INTEGER;
