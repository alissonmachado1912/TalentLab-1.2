'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Plus, Trash2, Pencil } from 'lucide-react';
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
  const formRef = useRef<HTMLFormElement>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
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
      if (!res.ok) throw new Error(data.error);
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

    if (saving) return;
    setSaving(true);
    setErro(null);
    try {
      const res = await fetch(editingId ? `/api/cargos/${editingId}` : '/api/cargos', {
        method: editingId ? 'PATCH' : 'POST',
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

      await carregarCargos();
      setEditingId(null);
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
    } finally { setSaving(false); }
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
    <div className="tl-register space-y-7">
      <div className="tl-page-heading">
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

      <div className="tl-form-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-red-600" /> {editingId ? 'Editar Cargo' : 'Cadastrar Novo Cargo'}
        </h2>
        <form ref={formRef} onSubmit={handleCadastrar} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
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

          <div className="sm:col-span-2 xl:col-span-4 flex flex-wrap items-center justify-between gap-4 pt-2">
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
              type="submit" disabled={saving}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <Plus className="h-4 w-4" /> {editingId ? 'Salvar alterações' : 'Cadastrar Cargo'}
            </button>
          </div>
          {editingId && <button type="button" className="text-xs text-red-600" onClick={() => { setEditingId(null); setForm({ codigo: '', titulo: '', salarioBase: '', jornadaMensal: '220', insalubridade: false, periculosidade: false }); }}>Cancelar edição</button>}
        </form>
      </div>

      <div className="tl-records bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
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
                    <button type="button" title="Editar cargo" aria-label="Editar cargo" disabled={saving} className="text-slate-400 hover:text-rose-600 mr-3" onClick={() => { setEditingId(cargo.id); setErro(null); setForm({ codigo: cargo.codigo, titulo: cargo.titulo, salarioBase: String(cargo.salarioBase), jornadaMensal: String(cargo.jornadaMensal), insalubridade: cargo.adicionalInsalubridade, periculosidade: cargo.adicionalPericulosidade }); formRef.current?.scrollIntoView({ block: 'start' }); }}><Pencil className="h-4 w-4" /></button>
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