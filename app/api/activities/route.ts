import { withAuth, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/activities?alunoId=xxx&turmaId=xxx
async function handleGET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const user = currentUser();
  const alunoId = user.role === 'aluno' ? user.id : searchParams.get('alunoId');
  const turmaId = user.role === 'aluno' ? user.turmaId : searchParams.get('turmaId');

  const where: any = {};
  if (turmaId) {
    where.OR = [{ turmaId }, { turmaId: null }];
  }

  const activities = await prisma.activity.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: {
      turma: { include: { _count: { select: { alunos: true } } } },
      _count: { select: { conclusoes: true } },
      conclusoes: alunoId ? { where: { alunoId } } : false,
    },
  });

  const resposta = activities.map((a) => ({
    id: a.id,
    type: a.type,
    title: a.title,
    statement: a.statement,
    instructions: a.instructions,
    mechanism: a.mechanism,
    className: a.className,
    createdBy: a.createdBy,
    createdAt: a.createdAt,
    turmaId: a.turmaId,
    turmaNome: a.turma?.nome ?? null,
    totalAlunosTurma: a.turma?._count.alunos ?? 0,
    totalConcluidos: a._count.conclusoes,
    concluidaPeloAluno: alunoId ? a.conclusoes.length > 0 : undefined,
  }));

  return NextResponse.json(resposta);
}

// POST /api/activities -> professor publica atividade (notifica os alunos da turma)
async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { type, title, statement, instructions, mechanism, className, createdBy, turmaId } = body;

  if (!type || !title || !statement || !instructions || !mechanism || !createdBy) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 });
  }

  const activity = await prisma.activity.create({
    data: {
      type,
      title,
      statement,
      instructions,
      mechanism,
      className: className || '',
      createdBy,
      turmaId: turmaId || null,
    },
  });

  if (turmaId) {
    const alunos = await prisma.aluno.findMany({ where: { turmaId } });
    if (alunos.length > 0) {
      await prisma.notificacao.createMany({
        data: alunos.map((al) => ({
          mensagem: `Nova atividade publicada: ${title}`,
          tipo: 'NOVA_ATIVIDADE' as const,
          destino: 'ALUNO' as const,
          alunoId: al.id,
        })),
      });
    }
  }

  return NextResponse.json(activity, { status: 201 });
}
export const GET = withAuth(handleGET, false);

export const POST = withAuth(handlePOST, true);
