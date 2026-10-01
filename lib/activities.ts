export type ActivityMechanism =
  | 'empresas'
  | 'cargos'
  | 'funcionarios'
  | 'ponto'
  | 'aso'
  | 'folha'
  | 'custos'
  | 'contratacao';

export type ActivityType = 'pratica' | 'simulacao' | 'documento' | 'calculo';

export type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  statement: string;
  instructions: string;
  mechanism: ActivityMechanism;
  createdAt: string;
  createdBy: string;
  className: string;
  turmaId: string | null;
  turmaNome: string | null;
  totalAlunosTurma: number;
  totalConcluidos: number;
  concluidaPeloAluno?: boolean;
  concluidaEm?: string | null;
  participantes?: { id: string; nome: string; matricula: string; concluidaEm: string | null }[];
};

export const activityTypeOptions: { value: ActivityType; label: string }[] = [
  { value: 'pratica', label: 'Prática operacional' },
  { value: 'simulacao', label: 'Simulação' },
  { value: 'documento', label: 'Documento' },
  { value: 'calculo', label: 'Cálculo' },
];

export const mechanismOptions: { value: ActivityMechanism; label: string; description: string; href: string }[] = [
  { value: 'empresas', label: 'Empresas', description: 'Cadastro e estruturação de empresas simuladas.', href: '/cadastros/empresas' },
  { value: 'cargos', label: 'Cargos', description: 'Cadastro de cargos, salários e jornadas.', href: '/cadastros/cargos' },
  { value: 'funcionarios', label: 'Funcionários', description: 'Admissão e cadastro de colaboradores.', href: '/cadastros/funcionarios' },
  { value: 'ponto', label: 'Ponto Diário', description: 'Registro de jornada, faltas e horas extras.', href: '/folha-pagamento/ponto' },
  { value: 'aso', label: 'Registro ASO', description: 'Preenchimento de documentos ocupacionais simulados.', href: '/folha-pagamento/aso' },
  { value: 'folha', label: 'Simulador de Folha', description: 'Processamento de eventos e cálculo de folha.', href: '/folha-pagamento/calcular' },
  { value: 'custos', label: 'Custos de Produção', description: 'Cálculo e análise de custos.', href: '/custos' },
  { value: 'contratacao', label: 'Simulador de RH (contratação)', description: 'Escolha do candidato mais adequado ao cenário proposto.', href: '/simulador-rh' },
];

export function getMechanism(value: ActivityMechanism) {
  return mechanismOptions.find((item) => item.value === value) || mechanismOptions[0];
}