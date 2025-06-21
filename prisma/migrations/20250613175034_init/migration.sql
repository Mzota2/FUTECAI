/*
  Warnings:

  - The values [ADMIN,CLIENT] on the enum `User_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `type` ENUM('admin', 'client') NOT NULL;
