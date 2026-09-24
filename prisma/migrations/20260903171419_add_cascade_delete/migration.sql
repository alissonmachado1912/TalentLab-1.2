-- DropForeignKey
ALTER TABLE `folhapagamento` DROP FOREIGN KEY `FolhaPagamento_funcionarioId_fkey`;

-- DropForeignKey
ALTER TABLE `registroaso` DROP FOREIGN KEY `RegistroASO_funcionarioId_fkey`;

-- DropForeignKey
ALTER TABLE `registroponto` DROP FOREIGN KEY `RegistroPonto_funcionarioId_fkey`;

-- DropIndex
DROP INDEX `RegistroASO_funcionarioId_fkey` ON `registroaso`;

-- DropIndex
DROP INDEX `RegistroPonto_funcionarioId_fkey` ON `registroponto`;

-- AddForeignKey
ALTER TABLE `RegistroPonto` ADD CONSTRAINT `RegistroPonto_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistroASO` ADD CONSTRAINT `RegistroASO_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FolhaPagamento` ADD CONSTRAINT `FolhaPagamento_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
