import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query, optional } from '@/lib/supabase';

async function handleDELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const ponto = await optional(getSupabase().from('RegistroPonto')
      .select('id, funcionarioId, funcionario:Funcionario!inner(id)')
      .eq('id', id).eq('funcionario.ownerId', ownerId()).maybeSingle());
    if (!ponto) return NextResponse.json({ error: 'Registro n?o encontrado.' }, { status: 404 });
    await query(getSupabase().from('RegistroPonto').delete()
      .eq('id', id).eq('funcionarioId', ponto.funcionarioId).select('id').single());
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && ['23503', '23001'].includes(String(error.code))) return NextResponse.json({ error: 'Este ponto está vinculado a um lançamento de horas extras na folha.' }, { status: 409 });
    console.error(error);
    return NextResponse.json({ error: 'Erro ao apagar registro de ponto.' }, { status: 500 });
  }
}
export const DELETE = withAuth(handleDELETE);
