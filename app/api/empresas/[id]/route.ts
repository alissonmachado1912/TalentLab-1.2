import { companyData } from '@/lib/registration-validation';
import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

async function handleDELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await query(getSupabase().from('Empresa').delete().eq('id', id).eq('ownerId', ownerId()).select('*').single());
    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && (error.code === '23503' || error.code === '23001')) {
      return NextResponse.json(
        { error: 'Não é possível apagar: existem funcionários vinculados a esta empresa. Apague-os primeiro.' },
        { status: 409 }
      );
    }
    console.error(error);
    return NextResponse.json({ error: 'Erro ao apagar empresa.' }, { status: 500 });
  }
}
export const DELETE = withAuth(handleDELETE);

export const PATCH = withAuth(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const body = await request.json();
  let data;
  try { data = companyData(body); } catch { return NextResponse.json({ error: 'Preencha os campos corretamente.' }, { status: 400 }); }
  const record = await query(getSupabase().from('Empresa').update(data).eq('id', id).eq('ownerId', ownerId()).select('*').single());
  return NextResponse.json(record);
});
