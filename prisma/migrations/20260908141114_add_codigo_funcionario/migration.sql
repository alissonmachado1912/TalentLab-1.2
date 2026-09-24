/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `Funcionario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funcionario` ADD COLUMN `codigo` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Funcionario_codigo_key` ON `Funcionario`(`codigo`);
