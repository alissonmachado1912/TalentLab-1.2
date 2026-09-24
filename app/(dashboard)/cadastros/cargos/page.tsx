'use client';

import { useEffect, useState } from 'react';
import { Briefcase, Plus, Trash2 } from 'lucide-react';
import CodeHelpButton from '@/components/code-help-button';

interface CargoItem {
  id: string;
  codigo: string;
  titulo: string;
  salarioBase: number;
  jornadaMensal: number;
  adicionalInsalubridade: boolean;
  adicionalPericulosidade: boolean;
}

export default function CargosPage() {
  const [cargos, setCargos] = useState<CargoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [form, setForm] = useState({
    codigo: '',
    titulo: '',
    salarioBase: '',
    jornadaMensal: '220',
    insalubridade: false,
    periculosidade: false,
  });

  async function carregarCargos() {
    setLoading(true);
    try {
      const res = await fetch('/api/cargos');
      const data = await res.json();
      setCargos(data);
    } catch {
      setErro('Não foi possível carregar os cargos. Confira se o servidor está rodando.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarCargos();
  }, []);

  const handleCadastrar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.codigo || !form.titulo || !form.salarioBase) return;

    setErro(null);
    try {
      const res = await fetch('/api/cargos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          codigo: form.codigo,
          titulo: form.titulo,
          salarioBase: form.salarioBase,
          jornadaMensal: form.jornadaMensal,
          adicionalInsalubridade: form.insalubridade,
          adicionalPericulosidade: form.periculosidade,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao cadastrar cargo.');
        return;
      }

      const novoCargo: CargoItem = await res.json();
      setCargos((prev) => [...prev, novoCargo]);
      setForm({
        codigo: '',
        titulo: '',
        salarioBase: '',
        jornadaMensal: '220',
        insalubridade: false,
        periculosidade: false,
      });
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  const handleApagar = async (id: string, titulo: string) => {
    if (!confirm(`Tem certeza que deseja apagar "${titulo}" para sempre? Essa ação não pode ser desfeita.`)) return;

    setErro(null);
    try {
      const res = await fetch(`/api/cargos/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao apagar cargo.');
        return;
      }
      setCargos((prev) => prev.filter((c) => c.id !== id));
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Cadastro de Cargos & Salários</h1>
            <p className="text-sm text-slate-500">
              Defina salários base, jornadas de trabalho e incidências de adicionais para parametrização do sistema.
            </p>
          </div>
          <div className="pt-1">
            <CodeHelpButton
              title="Códigos de Cargos"
              items={cargos.map((c) => ({ code: c.codigo, description: c.titulo }))}
            />
          </div>
        </div>
      </div>

      {erro && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">
          {erro}
        </div>
      )}

      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-red-600" /> Cadastrar Novo Cargo
        </h2>
        <form onSubmit={handleCadastrar} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Código ID</label>
            <input
              type="text"
              required
              placeholder="Ex: C004"
              value={form.codigo}
              onChange={(e) => setForm({ ...form, codigo: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 font-mono uppercase"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Título do Cargo</label>
            <input
              type="text"
              required
              placeholder="Ex: Operador de Máquinas"
              value={form.titulo}
              onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Salário Base (R$)</label>
            <input
              type="number"
              step="0.01"
              required
              placeholder="0.00"
              value={form.salarioBase}
              onChange={(e) => setForm({ ...form, salarioBase: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Jornada Mensal (Horas)</label>
            <select
              value={form.jornadaMensal}
              onChange={(e) => setForm({ ...form, jornadaMensal: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="220">220h / Mês (Padronizada CLT)</option>
              <option value="200">200h / Mês</option>
              <option value="180">180h / Mês</option>
            </select>
          </div>

          <div className="md:col-span-4 flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.insalubridade}
                  onChange={(e) => setForm({ ...form, insalubridade: e.target.checked })}
                  className="rounded border-slate-300 text-red-600 focus:ring-red-600 h-4 w-4"
                />
                Insalubridade Padrão (20%)
              </label>
              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.periculosidade}
                  onChange={(e) => setForm({ ...form, periculosidade: e.target.checked })}
                  className="rounded border-slate-300 text-red-600 focus:ring-red-600 h-4 w-4"
                />
                Periculosidade Padrão (30%)
              </label>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <Plus className="h-4 w-4" /> Cadastrar Cargo
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
                <th className="p-3">Código</th>
                <th className="p-3">Título do Cargo</th>
                <th className="p-3">Jornada</th>
                <th className="p-3">Adicionais Legalmente Mapeados</th>
                <th className="p-3 text-right">Salário Base (R$)</th>
                <th className="p-3 text-center">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {cargos.map((cargo) => (
                <tr key={cargo.id} className="hover:bg-slate-50/80">
                  <td className="p-3 font-mono text-xs font-bold text-red-600">{cargo.codigo}</td>
                  <td className="p-3 font-semibold text-slate-900">{cargo.titulo}</td>
                  <td className="p-3 text-xs text-slate-500">{cargo.jornadaMensal}h / mês</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      {cargo.adicionalInsalubridade && (
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                          INSALUBRIDADE 20%
                        </span>
                      )}
                      {cargo.adicionalPericulosidade && (
                        <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">
                          PERICULOSIDADE 30%
                        </span>
                      )}
                      {!cargo.adicionalInsalubridade && !cargo.adicionalPericulosidade && (
                        <span className="text-xs text-slate-400">Nenhum adicional fixo</span>
                      )}
                    </div>
                  </td>
                  <td className="p-3 text-right font-extrabold text-slate-900">
                    R$ {cargo.salarioBase.toFixed(2)}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleApagar(cargo.id, cargo.titulo)}
                      className="text-slate-400 hover:text-rose-600 transition-colors"
                      title="Apagar cargo"
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