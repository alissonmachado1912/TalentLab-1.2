import { createHash } from 'node:crypto';
import { ownerId } from './auth';
import { getSupabase, optional, query } from './supabase';
import { overtimeMinutes, period30 } from './time-report';
import { missingSchema } from './schema-errors';
import { processarEvento, formatOvertimeText } from './engine';

export async function overtimePreview(funcionarioId: string, inicio: string) {
  const period = period30(inicio);
  const db = getSupabase();
  const funcionario = await optional(db.from('Funcionario').select('*').eq('id', funcionarioId).eq('ownerId', ownerId()).maybeSingle());
  if (!funcionario) throw new Error('Funcionário não encontrado no seu ambiente.');
  let persistenciaDisponivel = true;
  const [evento, existente] = await Promise.all([
    optional(db.from('EventoFolha').select('*').eq('codigo', '0006').eq('tipo', 'PROVENTO').maybeSingle()),
    optional(db.from('LancamentoHoraExtra').select('*').eq('funcionarioId', funcionarioId).eq('inicio', inicio).eq('fim', period.end).maybeSingle()).catch(error => {
      if (!missingSchema(error)) throw error;
      persistenciaDisponivel = false;
      return null;
    }),
  ]);
  if (!evento) throw new Error('Evento de horas extras não disponível.');
  const registros = [];
  for (let offset = 0; ; offset += 1000) {
    const batch = await query(db.from('RegistroPonto').select('id,data,horasExtras').eq('funcionarioId', funcionarioId).gte('data', inicio).lt('data', period.exclusiveEnd).order('id').range(offset, offset + 999));
    registros.push(...batch);
    if (batch.length < 1000) break;
  }
  if (registros.some(p => overtimeMinutes(p.horasExtras) === null)) throw new Error('Há horas extras com formato inválido. Revise os registros antes de lançar.');
  const pontos = registros.map(p => ({ id: p.id, data: p.data, horasExtras: p.horasExtras, minutos: overtimeMinutes(p.horasExtras)! })).filter(p => p.minutos > 0);
  // Um período sobreposto não pode reutilizar pontos de outro lançamento.
  const vinculados = [];
  for (let i = 0; persistenciaDisponivel && i < pontos.length; i += 100) {
    vinculados.push(...await query(db.from('LancamentoHoraExtraPonto').select('*').in('pontoId', pontos.slice(i, i + 100).map(p => p.id))));
  }
  const minutos = pontos.reduce((sum, p) => sum + p.minutos, 0);
  const valor = Number((funcionario.salarioBase / 220 * 1.5 * minutos / 60).toFixed(2));
  const fingerprint = createHash('sha256').update(JSON.stringify({ funcionarioId, inicio, salario: funcionario.salarioBase, pontos })).digest('hex');
  const item = existente ? await query(db.from('ItemFolha').select('*').eq('id', existente.itemFolhaId).single()) : minutos > 0 ? processarEvento(evento, { ...funcionario, cargoNome: '' }, minutos / 60) : null;
  if (item) {
    item.referencia = formatOvertimeText(item.referencia);
    item.memoriaCalculo = formatOvertimeText(item.memoriaCalculo);
  }
  return { funcionarioId, inicio, fim: period.end, salario: funcionario.salarioBase, pontos, minutos: existente?.minutos ?? minutos, valor: item?.valorCalculado ?? valor, fingerprint, existente, item, nomeEvento: evento.nome, bloqueado: vinculados.length > 0 && !existente, persistenciaDisponivel };
}
