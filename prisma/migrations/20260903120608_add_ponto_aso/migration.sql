-- CreateTable
CREATE TABLE `RegistroPonto` (
    `id` VARCHAR(191) NOT NULL,
    `funcionarioId` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `entrada` VARCHAR(191) NOT NULL,
    `saidaAlmoco` VARCHAR(191) NOT NULL,
    `retornoAlmoco` VARCHAR(191) NOT NULL,
    `saida` VARCHAR(191) NOT NULL,
    `horasExtras` VARCHAR(191) NOT NULL DEFAULT '0h',
    `status` ENUM('REGULAR', 'ATRASO') NOT NULL DEFAULT 'REGULAR',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegistroASO` (
    `id` VARCHAR(191) NOT NULL,
    `funcionarioId` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `medico` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `resultado` ENUM('APTO', 'INAPTO') NOT NULL DEFAULT 'APTO',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RegistroPonto` ADD CONSTRAINT `RegistroPonto_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistroASO` ADD CONSTRAINT `RegistroASO_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
