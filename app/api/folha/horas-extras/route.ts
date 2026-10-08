import { NextRequest, NextResponse } from 'next/server';
import { ownerId, withAuth } from '@/lib/auth';
import { overtimePreview } from '@/lib/overtime-payroll';
import { getSupabase, query } from '@/lib/supabase';

export const GET = withAuth(async (request: NextRequest) => {
  try {
    return NextResponse.json(await overtimePreview(request.nextUrl.searchParams.get('funcionarioId') || '', request.nextUrl.searchParams.get('inicio') || ''));
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 400 });
    throw error;
  }
});

export const POST = withAuth(async (request: Request) => {
  const { funcionarioId, inicio, fingerprint } = await request.json();
  if (typeof funcionarioId !== 'string' || typeof inicio !== 'string' || typeof fingerprint !== 'string') return NextResponse.json({ error: 'Consulte as horas extras antes de confirmar.' }, { status: 400 });
  try {
    const preview = await overtimePreview(funcionarioId, inicio);
    if (!preview.persistenciaDisponivel) return NextResponse.json({ error: 'As horas já podem ser usadas na simulação e no holerite. Para gravar os vínculos no banco, um responsável precisa aplicar a migration pendente.' }, { status: 503 });
    if (preview.existente || preview.bloqueado) return NextResponse.json({ error: 'Os pontos deste período já foram lançados na folha.' }, { status: 409 });
    if (preview.fingerprint !== fingerprint) return NextResponse.json({ error: 'Os dados foram alterados. Consulte novamente antes de confirmar.' }, { status: 409 });
    if (!preview.minutos) return NextResponse.json({ error: 'Sem horas extras registradas no período.' }, { status: 400 });
    await query(getSupabase().rpc('confirmar_horas_extras', { p_owner: ownerId(), p_funcionario: funcionarioId, p_inicio: inicio, p_salario: preview.salario, p_pontos: preview.pontos }));
    return NextResponse.json(await overtimePreview(funcionarioId, inicio), { status: 201 });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 400 });
    if (error && typeof error === 'object' && 'code' in error && ['23505', 'P0001'].includes(String(error.code))) return NextResponse.json({ error: 'Pontos já lançados ou dados alterados. Consulte novamente.' }, { status: 409 });
    throw error;
  }
});
