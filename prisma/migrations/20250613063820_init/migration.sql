/*
  Warnings:

  - You are about to drop the column `heardAboutFutecai` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `profilePhoto` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `reasonToJoin` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `heardAboutFutecai`,
    DROP COLUMN `profilePhoto`,
    DROP COLUMN `reasonToJoin`,
    ADD COLUMN `isVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `profileImage` VARCHAR(191) NULL,
    ADD COLUMN `reason` VARCHAR(191) NULL,
    ADD COLUMN `resetToken` VARCHAR(191) NULL,
    ADD COLUMN `source` ENUM('search_engine', 'social_media', 'friend_colleague', 'advertisement', 'other') NULL,
    ADD COLUMN `verificationToken` VARCHAR(191) NULL,
    MODIFY `role` ENUM('developer', 'manager', 'student', 'researcher', 'other') NULL;
