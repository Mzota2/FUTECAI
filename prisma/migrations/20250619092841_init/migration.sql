-- AlterTable
ALTER TABLE `user` MODIFY `type` ENUM('admin', 'client') NOT NULL DEFAULT 'client';
