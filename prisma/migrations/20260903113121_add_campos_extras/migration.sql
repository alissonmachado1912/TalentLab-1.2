-- AlterTable
ALTER TABLE `cargo` ADD COLUMN `adicionalInsalubridade` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `adicionalPericulosidade` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `empresa` ADD COLUMN `cidadeUF` VARCHAR(191) NULL,
    ADD COLUMN `nomeFantasia` VARCHAR(191) NULL;
