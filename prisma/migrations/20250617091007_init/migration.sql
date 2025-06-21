-- DropForeignKey
ALTER TABLE `blogpost` DROP FOREIGN KEY `BlogPost_authorId_fkey`;

-- DropIndex
DROP INDEX `BlogPost_authorId_fkey` ON `blogpost`;
