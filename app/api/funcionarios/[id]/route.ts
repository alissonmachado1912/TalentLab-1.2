import { validEmployeeNotes } from '@/lib/registration-validation';
import { validDemographics } from '@/lib/employee-demographics';
import { withAuth, ownerId, currentUser } from '@/lib/auth';
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
    if (error && typeof error === 'object' && 'code' in error && ['23503', '23001'].includes(String(error.code))) return NextResponse.json({ error: 'Este funcionário possui horas extras lançadas na folha. Preserve os registros vinculados.' }, { status: 409 });
    console.error(error);
    return NextResponse.json({ error: 'Erro ao apagar funcionário.' }, { status: 500 });
  }
}
export const DELETE = withAuth(handleDELETE);

export const GET = withAuth(async (_request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let selection = getSupabase().from('Funcionario').select('*, empresa:Empresa(*), cargo:Cargo(*)').eq('id', id);
  if (currentUser().role !== 'professor') selection = selection.eq('ownerId', ownerId());
  return NextResponse.json(await query(selection.single()));
});

export const PATCH = withAuth(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const body = await request.json();
  const { sexo, dataNascimento } = body;
  if (!validEmployeeNotes(body)) return NextResponse.json({ error: 'Observações ou PCD inválidos.' }, { status: 400 });
  if ((sexo !== undefined || dataNascimento !== undefined) && !validDemographics(sexo, dataNascimento)) return NextResponse.json({ error: 'Informe sexo e data de nascimento válida.' }, { status: 400 });
  const values = { ...(sexo !== undefined ? { sexo, dataNascimento } : {}), ...(body.observacoes !== undefined ? { observacoes: body.observacoes } : {}), ...(body.pcd !== undefined ? { pcd: body.pcd } : {}) };
  if (!Object.keys(values).length) return NextResponse.json({ error: 'Informe os dados que deseja salvar.' }, { status: 400 });
  let update = getSupabase().from('Funcionario').update(values).eq('id', id);
  if (currentUser().role !== 'professor') update = update.eq('ownerId', ownerId());
  const funcionario = await query(update.select('*, empresa:Empresa(*), cargo:Cargo(*)').single());
  return NextResponse.json(funcionario);
});
