'use client';

import { useEffect, useState } from 'react';
import { Building2, Plus, Layers, Users, MapPin, Trash2 } from 'lucide-react';

interface EmpresaItem {
  id: string;
  razaoSocial: string;
  nomeFantasia: string | null;
  cnpj: string;
  cidadeUF: string | null;
  setoresCount: number;
  funcionariosCount: number;
}

export default function EmpresasPage() {
  const [empresas, setEmpresas] = useState<EmpresaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [form, setForm] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    cidadeUF: '',
  });

  async function carregarEmpresas() {
    setLoading(true);
    try {
      const res = await fetch('/api/empresas');
      const data = await res.json();
      setEmpresas(data);
    } catch {
      setErro('Não foi possível carregar as empresas. Confira se o servidor está rodando.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarEmpresas();
  }, []);

  const handleCadastrar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.razaoSocial || !form.cnpj) return;

    setErro(null);
    try {
      const res = await fetch('/api/empresas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao cadastrar empresa.');
        return;
      }

      const novaEmpresa: EmpresaItem = await res.json();
      setEmpresas((prev) => [...prev, novaEmpresa]);
      setForm({ razaoSocial: '', nomeFantasia: '', cnpj: '', cidadeUF: '' });
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  const handleApagar = async (id: string, nome: string) => {
    if (!confirm(`Tem certeza que deseja apagar "${nome}" para sempre? Essa ação não pode ser desfeita.`)) return;

    setErro(null);
    try {
      const res = await fetch(`/api/empresas/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao apagar empresa.');
        return;
      }
      setEmpresas((prev) => prev.filter((e) => e.id !== id));
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Cadastro de Empresas</h1>
          <p className="text-sm text-slate-500">
            Estrutura organizacional base para alocação de setores, cargos e funcionários.
          </p>
        </div>
      </div>

      {erro && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">
          {erro}
        </div>
      )}

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Building2 className="h-4 w-4 text-red-600" /> Cadastrar Nova Empresa Simulada
        </h2>
        <form onSubmit={handleCadastrar} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Razão Social</label>
            <input
              type="text"
              required
              placeholder="Ex: Tech Solutions Ltda"
              value={form.razaoSocial}
              onChange={(e) => setForm({ ...form, razaoSocial: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Nome Fantasia</label>
            <input
              type="text"
              placeholder="Ex: TechSolutions"
              value={form.nomeFantasia}
              onChange={(e) => setForm({ ...form, nomeFantasia: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">CNPJ</label>
            <input
              type="text"
              required
              placeholder="00.000.000/0001-00"
              value={form.cnpj}
              onChange={(e) => setForm({ ...form, cnpj: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Cidade / UF</label>
            <input
              type="text"
              placeholder="Ex: São Paulo / SP"
              value={form.cidadeUF}
              onChange={(e) => setForm({ ...form, cidadeUF: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div className="md:col-span-4 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <Plus className="h-4 w-4" /> Adicionar Empresa
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <p className="p-6 text-sm text-slate-500">Carregando...</p>
        ) : (
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="p-3">Razão Social / Fantasia</th>
                <th className="p-3">CNPJ</th>
                <th className="p-3">Localização</th>
                <th className="p-3 text-center">Setores</th>
                <th className="p-3 text-center">Colaboradores</th>
                <th className="p-3 text-center">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {empresas.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50/80">
                  <td className="p-3">
                    <div className="font-semibold text-slate-900">{emp.razaoSocial}</div>
                    <div className="text-xs text-slate-400">{emp.nomeFantasia}</div>
                  </td>
                  <td className="p-3 font-mono text-xs text-slate-600">{emp.cnpj}</td>
                  <td className="p-3 text-xs text-slate-500 flex items-center gap-1 mt-2">
                    <MapPin className="h-3 w-3 text-slate-400" /> {emp.cidadeUF || 'Não informado'}
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">
                      <Layers className="h-3 w-3" /> {emp.setoresCount}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-xs bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full font-semibold">
                      <Users className="h-3 w-3" /> {emp.funcionariosCount}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleApagar(emp.id, emp.razaoSocial)}
                      className="text-slate-400 hover:text-rose-600 transition-colors"
                      title="Apagar empresa"
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