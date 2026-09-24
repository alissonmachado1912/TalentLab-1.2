'use client';

import { useEffect, useState } from 'react';
import { processarEvento } from '@/lib/engine';
import { Funcionario, ItemFolha } from '@/lib/types';
import { Calculator, Plus, Trash2, Info, FileText } from 'lucide-react';
import HoleriteModal from '@/components/holerite-modal';
import SaveWorkButton from '@/components/save-work-button';
import CodeHelpButton from '@/components/code-help-button';
import PayrollCodeForm from '@/components/payroll-code-form';

interface EventoFolhaAPI {
  codigo: string;
  nome: string;
  tipo: 'PROVENTO' | 'DESCONTO';
  descricaoDidatica: string;
  percentualFixa: number | null;
  incideFGTS: boolean;
}

interface FuncionarioAPI {
  id: string;
  nome: string;
  cpf: string;
  salarioBase: number;
  dependentes: number;
  dataAdmissao: string;
  empresa: { id: string; razaoSocial: string; cnpj: string };
  cargo: { id: string; titulo: string };
}

export default function CalcularFolhaPage() {
  const [funcionarios, setFuncionarios] = useState<FuncionarioAPI[]>([]);
  const [funcionarioSelecionadoId, setFuncionarioSelecionadoId] = useState('');
  const [eventos, setEventos] = useState<EventoFolhaAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [isProfessor, setIsProfessor] = useState(false);

  const [codigoDigitado, setCodigoDigitado] = useState('');
  const [horasExtras, setHorasExtras] = useState(0);
  const [itensSelecionados, setItensSelecionados] = useState<ItemFolha[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function carregarDados() {
    setLoading(true);
    try {
      const [resFunc, resEventos] = await Promise.all([
        fetch('/api/funcionarios'),
        fetch('/api/eventos-folha'),
      ]);
      const [dataFunc, dataEventos] = await Promise.all([resFunc.json(), resEventos.json()]);
      setFuncionarios(dataFunc);
      setEventos(dataEventos);
      try { setIsProfessor(JSON.parse(localStorage.getItem('talentlab_current_user') || '{}').role === 'professor'); }
      catch { setIsProfessor(false); }
      setFuncionarioSelecionadoId((prev) => prev || dataFunc[0]?.id || '');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  const funcionarioAPI = funcionarios.find((f) => f.id === funcionarioSelecionadoId);

  const funcionarioParaCalculo: Funcionario | null = funcionarioAPI
    ? {
        id: funcionarioAPI.id,
        empresaId: funcionarioAPI.empresa.id,
        nome: funcionarioAPI.nome,
        cpf: funcionarioAPI.cpf,
        cargoId: funcionarioAPI.cargo.id,
        cargoNome: funcionarioAPI.cargo.titulo,
        salarioBase: funcionarioAPI.salarioBase,
        dependentes: funcionarioAPI.dependentes,
        dataAdmissao: funcionarioAPI.dataAdmissao,
      }
    : null;

  const eventoAtual = eventos.find((ev) => ev.codigo === codigoDigitado);

  const adicionarEvento = () => {
    if (!eventoAtual || !funcionarioParaCalculo) return;
    const item = processarEvento(eventoAtual, funcionarioParaCalculo, horasExtras);
    setItensSelecionados([...itensSelecionados, item]);
    setCodigoDigitado('');
    setHorasExtras(0);
  };

  const removerEvento = (index: number) => {
    setItensSelecionados(itensSelecionados.filter((_, i) => i !== index));
  };

  const salarioBaseAtual = funcionarioParaCalculo?.salarioBase ?? 0;

  const totalProventos =
    itensSelecionados.filter((i) => i.tipo === 'PROVENTO').reduce((acc, curr) => acc + curr.valorCalculado, 0) +
    salarioBaseAtual;

  const totalDescontos = itensSelecionados
    .filter((i) => i.tipo === 'DESCONTO')
    .reduce((acc, curr) => acc + curr.valorCalculado, 0);

  const salarioLiquido = totalProventos - totalDescontos;

  // FGTS: 8% sobre salário base + proventos que incidem FGTS (conforme cadastro de cada evento).
  // Informativo apenas — não é descontado do funcionário, é depositado pela empresa em conta separada.
  const proventosComIncidenciaFGTS = itensSelecionados
    .filter((i) => i.tipo === 'PROVENTO')
    .filter((i) => eventos.find((ev) => ev.codigo === i.codigoEvento)?.incideFGTS)
    .reduce((acc, curr) => acc + curr.valorCalculado, 0);

  const baseFGTS = salarioBaseAtual + proventosComIncidenciaFGTS;
  const fgtsDoMes = baseFGTS * 0.08;

  if (loading) {
    return <p className="p-6 text-sm text-slate-500">Carregando...</p>;
  }

  if (!funcionarioParaCalculo) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-amber-600">Cadastre ao menos um funcionário antes de simular a folha de pagamento.</p>
        <CodeHelpButton title="Códigos de Eventos de Folha" items={eventos.map((ev) => ({ code: ev.codigo, description: `${ev.nome} — ${ev.descricaoDidatica}` }))}>
          {isProfessor && <PayrollCodeForm onCreated={(evento) => setEventos((prev) => [...prev, evento].sort((a, b) => a.codigo.localeCompare(b.codigo)))} />}
        </CodeHelpButton>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Simulador da Folha de Pagamento</h1>
          <p className="text-sm text-slate-500">
            Adicione os eventos pelo código (ID) conforme o sistema corporativo ERP.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CodeHelpButton
            title="Códigos de Eventos de Folha"
            items={eventos.map((ev) => ({ code: ev.codigo, description: `${ev.nome} — ${ev.descricaoDidatica}` }))}
          >
            {isProfessor && <PayrollCodeForm onCreated={(evento) => setEventos((prev) => [...prev, evento].sort((a, b) => a.codigo.localeCompare(b.codigo)))} />}
          </CodeHelpButton>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-slate-900 text-white font-semibold text-xs px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
          >
            <FileText className="h-4 w-4" /> Gerar Holerite
          </button>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-wrap gap-6 justify-between items-center">
        <div className="flex-1 min-w-[240px]">
          <span className="text-xs text-slate-400 font-medium">COLABORADOR SELECIONADO</span>
          <select
            value={funcionarioSelecionadoId}
            onChange={(e) => {
              setFuncionarioSelecionadoId(e.target.value);
              setItensSelecionados([]);
            }}
            className="block mt-1 text-lg font-bold text-slate-800 border border-slate-300 rounded-lg p-2 w-full"
          >
            {funcionarios.map((f) => (
              <option key={f.id} value={f.id}>
                {f.nome}
              </option>
            ))}
          </select>
          <p className="text-xs text-slate-500 mt-1">
            {funcionarioAPI?.cargo.titulo} • CPF: {funcionarioParaCalculo.cpf}
          </p>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-right">
          <span className="text-xs text-slate-500">Salário Base Cadastrado</span>
          <p className="text-lg font-extrabold text-red-600">R$ {salarioBaseAtual.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-700 flex items-center gap-2">
          <Calculator className="h-4 w-4 text-red-600" /> Inserção Automática via ID de Evento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Código do Evento</label>
            <input
              type="text"
              placeholder="Ex: 0001 até 0010"
              value={codigoDigitado}
              onChange={(e) => setCodigoDigitado(e.target.value)}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {codigoDigitado === '0006' && (
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Horas Extras</label>
              <input
                type="number"
                value={horasExtras}
                onChange={(e) => setHorasExtras(Number(e.target.value))}
                className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          )}

          <div className="flex items-end md:col-span-1">
            <button
              onClick={adicionarEvento}
              disabled={!eventoAtual}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white text-sm font-semibold p-2.5 rounded-lg hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="h-4 w-4" /> Processar Código
            </button>
          </div>
        </div>

        {codigoDigitado && !eventoAtual && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-start gap-2 text-xs text-rose-800">
            <Info className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
            <div>Código não encontrado. Use algo entre 0001 e 0010.</div>
          </div>
        )}

        {eventoAtual && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-xs text-red-800">
            <Info className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <strong>{eventoAtual.nome}:</strong> {eventoAtual.descricaoDidatica}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <tr>
              <th className="p-3">Código</th>
              <th className="p-3">Descrição do Evento</th>
              <th className="p-3">Tipo</th>
              <th className="p-3">Memória de Cálculo (Didática)</th>
              <th className="p-3 text-right">Valor (R$)</th>
              <th className="p-3 text-center">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            <tr>
              <td className="p-3 font-mono text-xs">BASE</td>
              <td className="p-3 font-semibold">Salário Base Mensal</td>
              <td className="p-3">
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">PROVENTO</span>
              </td>
              <td className="p-3 text-slate-400 text-xs">Registro contratual fixo</td>
              <td className="p-3 text-right font-medium text-slate-900">{salarioBaseAtual.toFixed(2)}</td>
              <td className="p-3 text-center text-slate-300">-</td>
            </tr>
            {itensSelecionados.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80">
                <td className="p-3 font-mono text-xs font-bold text-red-600">{item.codigoEvento}</td>
                <td className="p-3 font-medium">{item.nomeEvento}</td>
                <td className="p-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-semibold ${
                      item.tipo === 'PROVENTO' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {item.tipo}
                  </span>
                </td>
                <td className="p-3 text-xs text-slate-500">{item.memoriaCalculo}</td>
                <td className={`p-3 text-right font-semibold ${item.tipo === 'PROVENTO' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {item.tipo === 'DESCONTO' && '- '}R$ {item.valorCalculado.toFixed(2)}
                </td>
                <td className="p-3 text-center">
                  <button onClick={() => removerEvento(idx)} className="text-slate-400 hover:text-rose-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-6 text-sm">
            <div>
              <span className="text-xs text-slate-500 block">Total Proventos</span>
              <span className="font-bold text-emerald-600">R$ {totalProventos.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Total Descontos</span>
              <span className="font-bold text-rose-600">R$ {totalDescontos.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block" title="Depositado pela empresa, não descontado do funcionário">
                FGTS do Mês (8%) ℹ
              </span>
              <span className="font-bold text-slate-700">R$ {fgtsDoMes.toFixed(2)}</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Salário Líquido Calculado</span>
            <span className="text-2xl font-black text-slate-900">R$ {salarioLiquido.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <SaveWorkButton tipo="folha" dados={{ funcionario: funcionarioParaCalculo.nome, salarioBase: salarioBaseAtual, itens: itensSelecionados, totalProventos, totalDescontos, salarioLiquido, baseFGTS, fgtsDoMes }} />
      <HoleriteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dados={{
          empresa: funcionarioAPI?.empresa.razaoSocial ?? '',
          cnpj: funcionarioAPI?.empresa.cnpj ?? '',
          funcionario: `${funcionarioParaCalculo.id} - ${funcionarioParaCalculo.nome}`,
          cargo: funcionarioParaCalculo.cargoNome,
          admissao: funcionarioParaCalculo.dataAdmissao,
          salarioBase: salarioBaseAtual,
          baseFGTS,
          fgtsDoMes,
          proventos: [
            { codigo: 'BASE', descricao: 'Salário Base', referencia: '30d', valor: salarioBaseAtual },
            ...itensSelecionados
              .filter((i) => i.tipo === 'PROVENTO')
              .map((i) => ({ codigo: i.codigoEvento, descricao: i.nomeEvento, referencia: i.referencia, valor: i.valorCalculado })),
          ],
          descontos: itensSelecionados
            .filter((i) => i.tipo === 'DESCONTO')
            .map((i) => ({ codigo: i.codigoEvento, descricao: i.nomeEvento, referencia: i.referencia, valor: i.valorCalculado })),
          totalProventos,
          totalDescontos,
          salarioLiquido,
        }}
      />
    </div>
  );
}
