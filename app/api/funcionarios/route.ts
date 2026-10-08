import { validEmployeeNotes } from '@/lib/registration-validation';
import { validDemographics } from '@/lib/employee-demographics';
import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query, optional } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';

async function handleGET() {
  const funcionarios: (Database['public']['Tables']['Funcionario']['Row'] & { empresa: unknown; cargo: unknown })[] = [];
  for (let offset = 0; ; offset += 1000) {
    const batch = await query(getSupabase().from('Funcionario').select('*, empresa:Empresa(*), cargo:Cargo(*)').eq('ownerId', ownerId()).order('nome', { ascending: true }).order('id').range(offset, offset + 999));
    funcionarios.push(...batch);
    if (batch.length < 1000) break;
  }
  return NextResponse.json(funcionarios);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  if (!validEmployeeNotes(body)) return NextResponse.json({ error: 'Observações ou PCD inválidos.' }, { status: 400 });
  if (!validDemographics(body.sexo, body.dataNascimento)) return NextResponse.json({ error: 'Informe sexo e data de nascimento válida.' }, { status: 400 });
  const {
    codigo,
    nome,
    cpf,
    empresaId,
    cargoId,
    salarioBase,
    dependentes,
    dataAdmissao,
  } = body;

  if (!codigo || !nome || !cpf || !empresaId || !cargoId || salarioBase == null || !dataAdmissao) {
    return NextResponse.json(
      { error: 'codigo, nome, cpf, empresaId, cargoId, salarioBase e dataAdmissao são obrigatórios' },
      { status: 400 }
    );
  }

  const [empresa, cargo] = await Promise.all([
    optional(getSupabase().from('Empresa').select('*').eq('id', empresaId).eq('ownerId', ownerId()).limit(1).maybeSingle()),
    optional(getSupabase().from('Cargo').select('*').eq('id', cargoId).eq('ownerId', ownerId()).limit(1).maybeSingle()),
  ]);
  if (!empresa || !cargo) return NextResponse.json({ error: 'Selecione empresa e cargo do seu ambiente.' }, { status: 403 });
  const funcionario = await query(getSupabase().from('Funcionario').insert({ ownerId: ownerId(),
      codigo: codigo.toUpperCase(),
      nome,
      cpf,
      observacoes: body.observacoes ?? '',
      pcd: body.pcd ?? false,
      sexo: body.sexo,
      dataNascimento: body.dataNascimento,
      empresaId,
      cargoId,
      salarioBase: cargo.salarioBase,
      dependentes: Number(dependentes ?? 0),
      dataAdmissao: new Date(dataAdmissao).toISOString(),
    }).select('*, empresa:Empresa(*), cargo:Cargo(*)').single());

  return NextResponse.json(funcionario, { status: 201 });
}
export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
