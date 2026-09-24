import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handleDELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await prisma.cargo.delete({
      where: { id, ownerId: ownerId() },
    });
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'Não é possível apagar: existem funcionários vinculados a este cargo. Apague-os primeiro.' },
        { status: 409 }
      );
    }
    console.error(error);
    return NextResponse.json({ error: 'Erro ao apagar cargo.' }, { status: 500 });
  }
}
export const DELETE = withAuth(handleDELETE);
