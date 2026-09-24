import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handleGET() {
  const funcionarios = await prisma.funcionario.findMany({
    where: { ownerId: ownerId() },
    include: { empresa: true, cargo: true },
    orderBy: { nome: 'asc' },
  });
  return NextResponse.json(funcionarios);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const {
    codigo,
    nome,
    cpf,
    empresaId,
    cargoId,
    salarioBase,
    dependentes,
    dataAdmissao,
  } = body;

  if (!codigo || !nome || !cpf || !empresaId || !cargoId || salarioBase == null || !dataAdmissao) {
    return NextResponse.json(
      { error: 'codigo, nome, cpf, empresaId, cargoId, salarioBase e dataAdmissao são obrigatórios' },
      { status: 400 }
    );
  }

  const [empresa, cargo] = await Promise.all([
    prisma.empresa.findFirst({ where: { id: empresaId, ownerId: ownerId() } }),
    prisma.cargo.findFirst({ where: { id: cargoId, ownerId: ownerId() } }),
  ]);
  if (!empresa || !cargo) return NextResponse.json({ error: 'Selecione empresa e cargo do seu ambiente.' }, { status: 403 });
  const funcionario = await prisma.funcionario.create({
    data: { ownerId: ownerId(),
      codigo: codigo.toUpperCase(),
      nome,
      cpf,
      empresaId,
      cargoId,
      salarioBase: Number(salarioBase),
      dependentes: Number(dependentes ?? 0),
      dataAdmissao: new Date(dataAdmissao),
    },
    include: { empresa: true, cargo: true },
  });

  return NextResponse.json(funcionario, { status: 201 });
}
export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
