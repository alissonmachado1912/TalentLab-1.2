-- CreateTable
CREATE TABLE `Empresa` (
    `id` VARCHAR(191) NOT NULL,
    `razaoSocial` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Empresa_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Setor` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `empresaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cargo` (
    `id` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `salarioBase` DOUBLE NOT NULL,
    `jornadaMensal` INTEGER NOT NULL,

    UNIQUE INDEX `Cargo_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionario` (
    `id` VARCHAR(191) NOT NULL,
    `empresaId` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `cargoId` VARCHAR(191) NOT NULL,
    `salarioBase` DOUBLE NOT NULL,
    `dependentes` INTEGER NOT NULL DEFAULT 0,
    `dataAdmissao` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Funcionario_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventoFolha` (
    `codigo` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `tipo` ENUM('PROVENTO', 'DESCONTO') NOT NULL,
    `percentualFixa` DOUBLE NULL,
    `incideINSS` BOOLEAN NOT NULL DEFAULT false,
    `incideIRRF` BOOLEAN NOT NULL DEFAULT false,
    `incideFGTS` BOOLEAN NOT NULL DEFAULT false,
    `descricaoDidatica` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FolhaPagamento` (
    `id` VARCHAR(191) NOT NULL,
    `funcionarioId` VARCHAR(191) NOT NULL,
    `mesReferencia` VARCHAR(191) NOT NULL,
    `totalProventos` DOUBLE NOT NULL,
    `totalDescontos` DOUBLE NOT NULL,
    `salarioLiquido` DOUBLE NOT NULL,
    `fgtsDoMes` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `FolhaPagamento_funcionarioId_mesReferencia_key`(`funcionarioId`, `mesReferencia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemFolha` (
    `id` VARCHAR(191) NOT NULL,
    `folhaId` VARCHAR(191) NOT NULL,
    `codigoEvento` VARCHAR(191) NOT NULL,
    `tipo` ENUM('PROVENTO', 'DESCONTO') NOT NULL,
    `referencia` VARCHAR(191) NOT NULL,
    `valorCalculado` DOUBLE NOT NULL,
    `memoriaCalculo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('pratica', 'simulacao', 'documento', 'calculo') NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `statement` VARCHAR(191) NOT NULL,
    `instructions` VARCHAR(191) NOT NULL,
    `mechanism` ENUM('empresas', 'cargos', 'funcionarios', 'ponto', 'aso', 'folha', 'custos', 'contratacao') NOT NULL,
    `className` VARCHAR(191) NOT NULL,
    `createdBy` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Setor` ADD CONSTRAINT `Setor_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_cargoId_fkey` FOREIGN KEY (`cargoId`) REFERENCES `Cargo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FolhaPagamento` ADD CONSTRAINT `FolhaPagamento_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemFolha` ADD CONSTRAINT `ItemFolha_folhaId_fkey` FOREIGN KEY (`folhaId`) REFERENCES `FolhaPagamento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemFolha` ADD CONSTRAINT `ItemFolha_codigoEvento_fkey` FOREIGN KEY (`codigoEvento`) REFERENCES `EventoFolha`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
