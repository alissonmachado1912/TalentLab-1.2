'use client';

import { useEffect, useState } from 'react';
import { Plus, UserPlus, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';

interface Empresa {
  id: string;
  razaoSocial: string;
  cnpj: string;
}

interface Cargo {
  id: string;
  codigo: string;
  titulo: string;
  salarioBase: number;
  jornadaMensal: number;
}

interface Funcionario {
  id: string;
  codigo: string;
  nome: string;
  cpf: string;
  salarioBase: number;
  dependentes: number;
  dataAdmissao: string;
  empresa: Empresa;
  cargo: Cargo;
}

export default function FuncionariosPage() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [form, setForm] = useState({
    codigo: '',
    nome: '',
    cpf: '',
    empresaId: '',
    codigoCargo: '',
    dependentes: '0',
    dataAdmissao: '',
  });

  async function carregarDados() {
    setLoading(true);
    try {
      const [resFuncionarios, resEmpresas, resCargos] = await Promise.all([
        fetch('/api/funcionarios'),
        fetch('/api/empresas'),
        fetch('/api/cargos'),
      ]);

      const [dataFuncionarios, dataEmpresas, dataCargos] = await Promise.all([
        resFuncionarios.json(),
        resEmpresas.json(),
        resCargos.json(),
      ]);

      setFuncionarios(dataFuncionarios);
      setEmpresas(dataEmpresas);
      setCargos(dataCargos);

      setForm((prev) => ({
        ...prev,
        empresaId: prev.empresaId || dataEmpresas[0]?.id || '',
      }));
    } catch {
      setErro('Não foi possível carregar os dados. Confira se o servidor está rodando.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  // Busca o cargo pelo código digitado (ex: "C001"), ignorando maiúsculas/minúsculas
  const cargoEncontrado = cargos.find(
    (c) => c.codigo.toUpperCase() === form.codigoCargo.trim().toUpperCase()
  );

  const handleCadastrar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.codigo || !form.nome || !form.cpf || !form.empresaId || !cargoEncontrado) return;

    setErro(null);

    try {
      const res = await fetch('/api/funcionarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          codigo: form.codigo,
          nome: form.nome,
          cpf: form.cpf,
          empresaId: form.empresaId,
          cargoId: cargoEncontrado.id,
          salarioBase: cargoEncontrado.salarioBase,
          dependentes: form.dependentes,
          dataAdmissao: form.dataAdmissao || new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao cadastrar funcionário.');
        return;
      }

      const novoFuncionario: Funcionario = await res.json();
      setFuncionarios((prev) => [...prev, novoFuncionario]);
      setForm({
        codigo: '',
        nome: '',
        cpf: '',
        empresaId: empresas[0]?.id || '',
        codigoCargo: '',
        dependentes: '0',
        dataAdmissao: '',
      });
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  const handleApagar = async (id: string, nome: string) => {
    if (!confirm(`Tem certeza que deseja apagar "${nome}" para sempre? Essa ação não pode ser desfeita.`)) return;

    setErro(null);
    try {
      const res = await fetch(`/api/funcionarios/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao apagar funcionário.');
        return;
      }
      setFuncionarios((prev) => prev.filter((f) => f.id !== id));
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-bold text-slate-900">Banco de Colaboradores / Funcionários</h1>
        <p className="text-sm text-slate-500">
          Cadastro central de empregados. Os dados aqui alimentam automaticamente Ponto, ASO, Folha e Custos.
        </p>
      </div>

      {erro && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">
          {erro}
        </div>
      )}

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
          <UserPlus className="h-4 w-4 text-red-600" /> Admitir Novo Funcionário Simuladamente
        </h2>
        <form onSubmit={handleCadastrar} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Código do Funcionário</label>
            <input
              type="text"
              required
              placeholder="Ex: F001"
              value={form.codigo}
              onChange={(e) => setForm({ ...form, codigo: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 font-mono uppercase"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Nome Completo</label>
            <input
              type="text"
              required
              placeholder="Ex: Roberto Carlos Rocha"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">CPF</label>
            <input
              type="text"
              required
              placeholder="000.000.000-00"
              value={form.cpf}
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Vincular à Empresa</label>
            <select
              value={form.empresaId}
              onChange={(e) => setForm({ ...form, empresaId: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {empresas.map((empresa) => (
                <option key={empresa.id} value={empresa.id}>
                  {empresa.razaoSocial}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Código do Cargo</label>
            <input
              type="text"
              required
              placeholder="Ex: C001"
              value={form.codigoCargo}
              onChange={(e) => setForm({ ...form, codigoCargo: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 font-mono uppercase"
            />
            {form.codigoCargo && (
              <p className={`text-xs mt-1 flex items-center gap-1 ${cargoEncontrado ? 'text-emerald-600' : 'text-rose-600'}`}>
                {cargoEncontrado ? (
                  <>
                    <CheckCircle2 className="h-3 w-3" /> {cargoEncontrado.titulo} — R$ {cargoEncontrado.salarioBase.toFixed(2)}
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-3 w-3" /> Código de cargo não encontrado
                  </>
                )}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Nº Dependentes (IRRF)</label>
            <input
              type="number"
              value={form.dependentes}
              onChange={(e) => setForm({ ...form, dependentes: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Data de Admissão</label>
            <input
              type="date"
              value={form.dataAdmissao}
              onChange={(e) => setForm({ ...form, dataAdmissao: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div className="flex items-end justify-end">
            <button
              type="submit"
              disabled={empresas.length === 0 || cargos.length === 0 || !cargoEncontrado}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="h-4 w-4" /> Concluir Admissão
            </button>
          </div>
        </form>
        {(empresas.length === 0 || cargos.length === 0) && !loading && (
          <p className="text-xs text-amber-600 mt-3">
            Cadastre ao menos uma empresa e um cargo antes de admitir funcionários.
          </p>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <p className="p-6 text-sm text-slate-500">Carregando...</p>
        ) : (
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="p-3">Código</th>
                <th className="p-3">Nome / CPF</th>
                <th className="p-3">Empresa & Cargo</th>
                <th className="p-3 text-center">Dep.</th>
                <th className="p-3">Admissão</th>
                <th className="p-3 text-right">Salário Fixado</th>
                <th className="p-3 text-center">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {funcionarios.map((func) => (
                <tr key={func.id} className="hover:bg-slate-50/80">
                  <td className="p-3 font-mono text-xs font-bold text-red-600">{func.codigo}</td>
                  <td className="p-3">
                    <div className="font-semibold text-slate-900">{func.nome}</div>
                    <div className="text-xs text-slate-400 font-mono">{func.cpf}</div>
                  </td>
                  <td className="p-3">
                    <div className="text-xs font-semibold text-slate-800">{func.empresa.razaoSocial}</div>
                    <div className="text-xs text-slate-500">{func.cargo.titulo}</div>
                  </td>
                  <td className="p-3 text-center font-bold text-slate-600">{func.dependentes}</td>
                  <td className="p-3 text-xs text-slate-500">
                    {new Date(func.dataAdmissao).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="p-3 text-right font-bold text-slate-900">
                    R$ {func.salarioBase.toFixed(2)}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleApagar(func.id, func.nome)}
                      className="text-slate-400 hover:text-rose-600 transition-colors"
                      title="Apagar funcionário"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}