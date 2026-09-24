import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handleGET() {
  const asos = await prisma.registroASO.findMany({
    where: { funcionario: { ownerId: ownerId() } },
    include: { funcionario: true },
    orderBy: { data: 'desc' },
  });
  return NextResponse.json(asos);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { funcionarioId, tipo, medico, data, resultado } = body;

  if (!funcionarioId || !tipo || !medico || !data) {
    return NextResponse.json(
      { error: 'funcionarioId, tipo, medico e data são obrigatórios' },
      { status: 400 }
    );
  }

  const funcionario = await prisma.funcionario.findFirst({ where: { id: funcionarioId, ownerId: ownerId() } });
  if (!funcionario) return NextResponse.json({ error: 'Funcionário não encontrado no seu ambiente.' }, { status: 403 });
  const registro = await prisma.registroASO.create({
    data: {
      funcionarioId,
      tipo,
      medico,
      data: new Date(data),
      resultado: resultado || 'APTO',
    },
    include: { funcionario: true },
  });

  return NextResponse.json(registro, { status: 201 });
}
export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
