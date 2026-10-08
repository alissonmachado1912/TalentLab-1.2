import { Funcionario, ItemFolha, EventType } from './types';

export interface EventoParaCalculo {
  codigo: string;
  nome: string;
  tipo: EventType;
  percentualFixa?: number | null;
}

export function formatPayrollHours(hours: number): string {
  const minutes = Math.round(hours * 60);
  const remainder = minutes % 60;
  return `${Math.floor(minutes / 60)}h${remainder ? ` ${remainder}min` : ''}`;
}

export function formatOvertimeText(text: string): string {
  return text.replace(/(\d+(?:[.,]\d+)?)h\b/g, (_, value: string) => formatPayrollHours(Number(value.replace(',', '.'))));
}

export function calcularINSS(salarioBruto: number): { valor: number; memoria: string } {
  // Tabela simplificada progressiva 2026 para fins didáticos
  let desconto = 0;
  if (salarioBruto <= 1412.00) {
    desconto = salarioBruto * 0.075;
  } else if (salarioBruto <= 2666.68) {
    desconto = (salarioBruto * 0.09) - 21.18;
  } else if (salarioBruto <= 4000.03) {
    desconto = (salarioBruto * 0.12) - 101.18;
  } else {
    desconto = (salarioBruto * 0.14) - 181.18;
  }

  const valorFinal = Math.max(0, Number(desconto.toFixed(2)));
  return {
    valor: valorFinal,
    memoria: `Cálculo Progressivo CLT sobre Bruto R$ ${salarioBruto.toFixed(2)}`
  };
}

export function processarEvento(
  evento: EventoParaCalculo,
  funcionario: Funcionario,
  horasExtras: number = 0
): ItemFolha {
  let valor = 0;
  let memoria = '';
  let referencia = '100%';

  switch (evento.codigo) {
    case '0001': {
      const calcINSS = calcularINSS(funcionario.salarioBase);
      valor = calcINSS.valor;
      memoria = calcINSS.memoria;
      break;
    }
    case '0003': {
      const percentual = evento.percentualFixa ?? 6;
      valor = funcionario.salarioBase * (percentual / 100);
      memoria = `${percentual}% aplicado diretamente sobre Salário Base R$ ${funcionario.salarioBase.toFixed(2)}`;
      referencia = `${percentual}%`;
      break;
    }
    case '0006': {
      const valorHora = funcionario.salarioBase / 220;
      valor = valorHora * 1.5 * horasExtras;
      memoria = `${formatPayrollHours(horasExtras)} x (R$ ${valorHora.toFixed(2)} + 50%)`;
      referencia = formatPayrollHours(horasExtras);
      break;
    }
    default: {
      // Eventos com percentual fixo (0004, 0005, 0007, 0008, 0009, 0010) calculam
      // automaticamente sobre o salário base usando o percentual cadastrado no banco.
      if (evento.percentualFixa) {
        valor = funcionario.salarioBase * (evento.percentualFixa / 100);
        memoria = `${evento.percentualFixa}% aplicado sobre Salário Base R$ ${funcionario.salarioBase.toFixed(2)}`;
        referencia = `${evento.percentualFixa}%`;
      } else {
        memoria = 'Evento sem regra de cálculo automática cadastrada (ex: IRRF)';
      }
    }
  }

  return {
    codigoEvento: evento.codigo,
    nomeEvento: evento.nome,
    tipo: evento.tipo,
    referencia,
    valorCalculado: Number(valor.toFixed(2)),
    memoriaCalculo: memoria,
  };
}
