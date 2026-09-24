export type EventType = 'PROVENTO' | 'DESCONTO';

export interface EventoFolha {
  codigo: string;
  nome: string;
  tipo: EventType;
  percentualFixa?: number;
  incidencia: {
    inss: boolean;
    irrf: boolean;
    fgts: boolean;
  };
  descricaoDidatica: string;
}

export interface Empresa {
  id: string;
  razaoSocial: string;
  cnpj: string;
  setoresCount: number;
  funcionariosCount: number;
}

export interface Cargo {
  id: string;
  codigo: string;
  titulo: string;
  salarioBase: number;
  jornadaMensal: number;
}

export interface Funcionario {
  id: string;
  empresaId: string;
  nome: string;
  cpf: string;
  cargoId: string;
  cargoNome: string;
  salarioBase: number;
  dependentes: number;
  dataAdmissao: string;
}

export interface ItemFolha {
  codigoEvento: string;
  nomeEvento: string;
  tipo: EventType;
  referencia: string;
  valorCalculado: number;
  memoriaCalculo: string;
}

export interface FolhaPagamentoResultado {
  funcionario: Funcionario;
  proventos: ItemFolha[];
  descontos: ItemFolha[];
  totalProventos: number;
  totalDescontos: number;
  salarioLiquido: number;
  fgtsDoMes: number;
}