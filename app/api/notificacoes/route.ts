import { withAuth, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/notificacoes?destino=ALUNO&alunoId=xxx  ou  ?destino=PROFESSOR
async function handleGET(request: NextRequest) {
  const user = currentUser();
  const where = user.role === 'aluno' ? { alunoId: user.id, destino: 'ALUNO' as const } : { destino: 'PROFESSOR' as const };

  const notificacoes = await prisma.notificacao.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  return NextResponse.json(notificacoes);
}
export const GET = withAuth(handleGET);
