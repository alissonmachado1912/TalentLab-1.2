import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handleGET() {
  const empresas = await prisma.empresa.findMany({
    where: { ownerId: ownerId() },
    orderBy: { razaoSocial: 'asc' },
    include: {
      _count: {
        select: { setores: true, funcionarios: true },
      },
    },
  });

  const resposta = empresas.map((empresa) => ({
    id: empresa.id,
    razaoSocial: empresa.razaoSocial,
    nomeFantasia: empresa.nomeFantasia,
    cnpj: empresa.cnpj,
    cidadeUF: empresa.cidadeUF,
    setoresCount: empresa._count.setores,
    funcionariosCount: empresa._count.funcionarios,
  }));

  return NextResponse.json(resposta);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { razaoSocial, nomeFantasia, cnpj, cidadeUF } = body;

  if (!razaoSocial || !cnpj) {
    return NextResponse.json(
      { error: 'razaoSocial e cnpj são obrigatórios' },
      { status: 400 }
    );
  }

  const empresa = await prisma.empresa.create({
    data: { ownerId: ownerId(), razaoSocial, nomeFantasia, cnpj, cidadeUF },
  });

  return NextResponse.json(
    { ...empresa, setoresCount: 0, funcionariosCount: 0 },
    { status: 201 }
  );
}

export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
