import { EventoFolha } from './types';

export const CODIGOS_EVENTOS: Record<string, EventoFolha> = {
  '0001': {
    codigo: '0001',
    nome: 'INSS - Contribuição Previdenciária',
    tipo: 'DESCONTO',
    incidencia: { inss: false, irrf: true, fgts: false },
    descricaoDidatica: 'Desconto obrigatório retido para a Previdência Social, calculado de forma progressiva conforme as faixas salariais da CLT.'
  },
  '0002': {
    codigo: '0002',
    nome: 'IRRF - Imposto de Renda Retido na Fonte',
    tipo: 'DESCONTO',
    incidencia: { inss: false, irrf: false, fgts: false },
    descricaoDidatica: 'Imposto retido na fonte com base no salário bruto deduzido do INSS e dependentes.'
  },
  '0003': {
    codigo: '0003',
    nome: 'Vale Transporte (Desconto 6%)',
    tipo: 'DESCONTO',
    percentualFixa: 6,
    incidencia: { inss: false, irrf: false, fgts: false },
    descricaoDidatica: 'Desconto legal de até 6% sobre o salário base para custeio do deslocamento residência-trabalho.'
  },
  '0006': {
    codigo: '0006',
    nome: 'Hora Extra 50%',
    tipo: 'PROVENTO',
    incidencia: { inss: true, irrf: true, fgts: true },
    descricaoDidatica: 'Adicional de no mínimo 50% sobre o valor da hora normal para trabalhos realizados além da jornada regular.'
  },
  '0009': {
    codigo: '0009',
    nome: 'Adicional de Insalubridade (20% Mínimo)',
    tipo: 'PROVENTO',
    percentualFixa: 20,
    incidencia: { inss: true, irrf: true, fgts: true },
    descricaoDidatica: 'Adicional pago aos trabalhadores expostos a agentes nocivos à saúde acima dos limites de tolerância.'
  }
};