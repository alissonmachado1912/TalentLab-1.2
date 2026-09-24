import { withAuth } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handleGET() {
  const turmas = await prisma.turma.findMany({
    orderBy: { nome: 'asc' },
    include: { _count: { select: { alunos: true } } },
  });

  const resposta = turmas.map((t) => ({
    id: t.id,
    nome: t.nome,
    alunosCount: t._count.alunos,
  }));

  return NextResponse.json(resposta);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { nome } = body;

  if (!nome) {
    return NextResponse.json({ error: 'nome é obrigatório' }, { status: 400 });
  }

  const turma = await prisma.turma.create({ data: { nome } });
  return NextResponse.json({ ...turma, alunosCount: 0 }, { status: 201 });
}
export const GET = withAuth(handleGET, true);

export const POST = withAuth(handlePOST, true);
