import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handleGET() {
  const pontos = await prisma.registroPonto.findMany({
    where: { funcionario: { ownerId: ownerId() } },
    include: { funcionario: true },
    orderBy: { data: 'desc' },
  });
  return NextResponse.json(pontos);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { funcionarioId, data, entrada, saidaAlmoco, retornoAlmoco, saida, horasExtras, status } = body;

  if (!funcionarioId || !data || !entrada || !saida) {
    return NextResponse.json(
      { error: 'funcionarioId, data, entrada e saida são obrigatórios' },
      { status: 400 }
    );
  }

  const funcionario = await prisma.funcionario.findFirst({ where: { id: funcionarioId, ownerId: ownerId() } });
  if (!funcionario) return NextResponse.json({ error: 'Funcionário não encontrado no seu ambiente.' }, { status: 403 });
  const registro = await prisma.registroPonto.create({
    data: {
      funcionarioId,
      data: new Date(data),
      entrada,
      saidaAlmoco: saidaAlmoco || '12:00',
      retornoAlmoco: retornoAlmoco || '13:00',
      saida,
      horasExtras: horasExtras || '0h',
      status: status || 'REGULAR',
    },
    include: { funcionario: true },
  });

  return NextResponse.json(registro, { status: 201 });
}
export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
