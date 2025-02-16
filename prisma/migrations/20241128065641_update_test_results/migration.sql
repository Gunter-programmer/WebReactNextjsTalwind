/*
  Warnings:

  - You are about to drop the column `testResult` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "testResult",
ADD COLUMN     "testResults" TEXT[] DEFAULT ARRAY[]::TEXT[];
