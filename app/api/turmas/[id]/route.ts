import { withAuth } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

async function handleDELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await query(getSupabase().from('Turma').delete().eq('id', id).select('*').single());
    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao apagar turma.' }, { status: 500 });
  }
}
export const DELETE = withAuth(handleDELETE, true);
