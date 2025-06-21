-- DropIndex
DROP INDEX `User_username_idx` ON `user`;

-- DropIndex
DROP INDEX `User_username_key` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `username` VARCHAR(191) NULL;
