import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

async function handleGET() {
  const empresas = await query(getSupabase().from('Empresa').select('*, setores:Setor(id), funcionarios:Funcionario(id)').eq('ownerId', ownerId()).order('razaoSocial', { ascending: true }));

  const resposta = empresas.map((empresa) => ({
    id: empresa.id,
    razaoSocial: empresa.razaoSocial,
    nomeFantasia: empresa.nomeFantasia,
    cnpj: empresa.cnpj,
    cidadeUF: empresa.cidadeUF,
    setoresCount: empresa.setores.length,
    funcionariosCount: empresa.funcionarios.length,
  }));

  return NextResponse.json(resposta);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { razaoSocial, nomeFantasia, cnpj, cidadeUF } = body;

  if (!razaoSocial || !cnpj) {
    return NextResponse.json(
      { error: 'razaoSocial e cnpj são obrigatórios' },
      { status: 400 }
    );
  }

  const empresa = await query(getSupabase().from('Empresa').insert({ ownerId: ownerId(), razaoSocial, nomeFantasia, cnpj, cidadeUF }).select('*').single());

  return NextResponse.json(
    { ...empresa, setoresCount: 0, funcionariosCount: 0 },
    { status: 201 }
  );
}

export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
