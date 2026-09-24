import { withAuth, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { ids } = body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ ok: true });
  }

  await prisma.notificacao.updateMany({
    where: { id: { in: ids }, ...(currentUser().role === 'aluno' ? { alunoId: currentUser().id, destino: 'ALUNO' as const } : { destino: 'PROFESSOR' as const }) },
    data: { lida: true },
  });

  return NextResponse.json({ ok: true });
}
export const POST = withAuth(handlePOST);
