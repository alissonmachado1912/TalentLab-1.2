import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const eventos = [
  {
    codigo: '0001',
    nome: 'INSS - Contribuição Previdenciária',
    tipo: 'DESCONTO' as const,
    percentualFixa: null,
    incideINSS: false,
    incideIRRF: true,
    incideFGTS: false,
    descricaoDidatica:
      'Desconto obrigatório retido para a Previdência Social, calculado de forma progressiva conforme as faixas salariais da CLT.',
  },
  {
    codigo: '0002',
    nome: 'IRRF - Imposto de Renda Retido na Fonte',
    tipo: 'DESCONTO' as const,
    percentualFixa: null,
    incideINSS: false,
    incideIRRF: false,
    incideFGTS: false,
    descricaoDidatica:
      'Imposto retido na fonte com base no salário bruto deduzido do INSS e dependentes.',
  },
  {
    codigo: '0003',
    nome: 'Vale Transporte (Desconto 6%)',
    tipo: 'DESCONTO' as const,
    percentualFixa: 6,
    incideINSS: false,
    incideIRRF: false,
    incideFGTS: false,
    descricaoDidatica:
      'Desconto legal de até 6% sobre o salário base para custeio do deslocamento residência-trabalho.',
  },
  {
    codigo: '0004',
    nome: 'Vale Refeição/Alimentação (Coparticipação)',
    tipo: 'DESCONTO' as const,
    percentualFixa: 2,
    incideINSS: false,
    incideIRRF: false,
    incideFGTS: false,
    descricaoDidatica:
      'Desconto de coparticipação do funcionário no benefício de vale-refeição/alimentação, conforme acordo coletivo.',
  },
  {
    codigo: '0005',
    nome: 'Plano de Saúde (Coparticipação)',
    tipo: 'DESCONTO' as const,
    percentualFixa: 4,
    incideINSS: false,
    incideIRRF: false,
    incideFGTS: false,
    descricaoDidatica:
      'Desconto de coparticipação do funcionário no plano de saúde oferecido pela empresa.',
  },
  {
    codigo: '0006',
    nome: 'Hora Extra 50%',
    tipo: 'PROVENTO' as const,
    percentualFixa: null,
    incideINSS: true,
    incideIRRF: true,
    incideFGTS: true,
    descricaoDidatica:
      'Adicional de no mínimo 50% sobre o valor da hora normal para trabalhos realizados além da jornada regular.',
  },
  {
    codigo: '0007',
    nome: 'Adicional Noturno (20%)',
    tipo: 'PROVENTO' as const,
    percentualFixa: 20,
    incideINSS: true,
    incideIRRF: true,
    incideFGTS: true,
    descricaoDidatica:
      'Adicional de no mínimo 20% sobre a hora normal para trabalho realizado entre 22h e 5h.',
  },
  {
    codigo: '0008',
    nome: 'Gratificação de Função (10%)',
    tipo: 'PROVENTO' as const,
    percentualFixa: 10,
    incideINSS: true,
    incideIRRF: true,
    incideFGTS: true,
    descricaoDidatica:
      'Gratificação paga a funcionários que exercem cargo de confiança ou função de liderança.',
  },
  {
    codigo: '0009',
    nome: 'Adicional de Insalubridade (20% Mínimo)',
    tipo: 'PROVENTO' as const,
    percentualFixa: 20,
    incideINSS: true,
    incideIRRF: true,
    incideFGTS: true,
    descricaoDidatica:
      'Adicional pago aos trabalhadores expostos a agentes nocivos à saúde acima dos limites de tolerância.',
  },
  {
    codigo: '0010',
    nome: 'Adicional de Periculosidade (30%)',
    tipo: 'PROVENTO' as const,
    percentualFixa: 30,
    incideINSS: true,
    incideIRRF: true,
    incideFGTS: true,
    descricaoDidatica:
      'Adicional de 30% sobre o salário base para atividades ou operações consideradas perigosas, conforme normas regulamentadoras.',
  },
];

async function main() {
  const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
  const prisma = new PrismaClient({ adapter });

  console.log('Populando tabela EventoFolha...');

  for (const evento of eventos) {
    await prisma.eventoFolha.upsert({
      where: { codigo: evento.codigo },
      update: evento,
      create: evento,
    });
    console.log(`  ✓ ${evento.codigo} - ${evento.nome}`);
  }

  console.log('Seed concluído.');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});