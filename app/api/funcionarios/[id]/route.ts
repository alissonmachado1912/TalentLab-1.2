import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

async function handleDELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await query(getSupabase().from('Funcionario').delete().eq('id', id).eq('ownerId', ownerId()).select('*').single());
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao apagar funcionário.' }, { status: 500 });
  }
}
export const DELETE = withAuth(handleDELETE);
