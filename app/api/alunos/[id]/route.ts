import { withAuth } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

async function handleDELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await query(getSupabase().from('Aluno').delete().eq('id', id).select('*').single());
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao apagar aluno.' }, { status: 500 });
  }
}
export const DELETE = withAuth(handleDELETE, true);
