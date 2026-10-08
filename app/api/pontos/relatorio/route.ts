import { NextRequest, NextResponse } from 'next/server';
import { withAuth, ownerId } from '@/lib/auth';
import { getSupabase, query, optional } from '@/lib/supabase';
import { period30, workedMinutes, overtimeMinutes } from '@/lib/time-report';
import type { Database } from '@/lib/database.types';

export const GET = withAuth(async (request: NextRequest) => {
  const funcionarioId = request.nextUrl.searchParams.get('funcionarioId');
  let period;
  try { period = period30(request.nextUrl.searchParams.get('inicio') || ''); }
  catch { return NextResponse.json({ error: 'Selecione a data inicial do período de 30 dias.' }, { status: 400 }); }
  const funcionario = await optional(getSupabase().from('Funcionario').select('id,nome,cpf,empresa:Empresa(razaoSocial,cnpj),cargo:Cargo(titulo)').eq('id', funcionarioId || '').eq('ownerId', ownerId()).maybeSingle());
  if (!funcionario) return NextResponse.json({ error: 'Funcionário não encontrado no seu ambiente.' }, { status: 404 });
  // Paginação evita truncar silenciosamente relatórios pela configuração do PostgREST.
  const registros: Database['public']['Tables']['RegistroPonto']['Row'][] = [];
  for (let offset = 0; ; offset += 1000) {
    const batch = await query(getSupabase().from('RegistroPonto').select('*').eq('funcionarioId', funcionario.id).gte('data', period.start).lt('data', period.exclusiveEnd).order('data').order('id').range(offset, offset + 999));
    registros.push(...batch);
    if (batch.length < 1000) break;
  }
  const dias = Array.from({ length: 30 }, (_, i) => {
    const data = new Date(new Date(period.start).getTime() + i * 86400000).toISOString().slice(0, 10);
    const pontos = registros.filter(p => p.data.slice(0, 10) === data).map(p => ({ ...p, minutosTrabalhados: workedMinutes(p), minutosExtras: overtimeMinutes(p.horasExtras) }));
    return { data, pontos, minutosTrabalhados: pontos.some(p => p.minutosTrabalhados === null) ? null : pontos.reduce((sum, p) => sum + (p.minutosTrabalhados ?? 0), 0) };
  });
  return NextResponse.json({ funcionario, inicio: period.start, fim: period.end, dias,
    totalMinutos: registros.reduce((sum, p) => sum + (workedMinutes(p) ?? 0), 0),
    totalExtras: registros.reduce((sum, p) => sum + (overtimeMinutes(p.horasExtras) ?? 0), 0),
    registrosInvalidos: registros.filter(p => workedMinutes(p) === null || overtimeMinutes(p.horasExtras) === null).length });
});
