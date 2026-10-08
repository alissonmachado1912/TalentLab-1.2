import { jobData } from '@/lib/registration-validation';
import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

async function handleDELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await query(getSupabase().from('Cargo').delete().eq('id', id).eq('ownerId', ownerId()).select('*').single());
    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && (error.code === '23503' || error.code === '23001')) {
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

export const PATCH = withAuth(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const body = await request.json();
  let data;
  try { data = jobData(body); } catch { return NextResponse.json({ error: 'Preencha os campos corretamente.' }, { status: 400 }); }
  const record = await query(getSupabase().from('Cargo').update(data).eq('id', id).eq('ownerId', ownerId()).select('*').single());
  try {
    await query(getSupabase().from('Funcionario').update({ salarioBase: record.salarioBase }).eq('cargoId', record.id).eq('ownerId', ownerId()).select('id'));
  } catch {
    return NextResponse.json({ error: 'O cargo foi salvo, mas não foi possível atualizar os salários dos funcionários vinculados. Salve o cargo novamente para concluir a atualização.' }, { status: 503 });
  }
  return NextResponse.json(record);
});
