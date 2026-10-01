'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, FileSearch } from 'lucide-react';
import Link from 'next/link';
const labels: Record<string,string> = { registros:'Registros entregues', dados:'Resultado', titulo:'Título', modulo:'Módulo', razaoSocial:'Razão social', nomeFantasia:'Nome fantasia', cnpj:'CNPJ', cpf:'CPF', nome:'Nome', codigo:'Código', salarioBase:'Salário base', dataAdmissao:'Admissão', dataNascimento:'Nascimento', sexo:'Sexo', empresa:'Empresa', cargo:'Cargo', dependentes:'Dependentes', jornadaMensal:'Jornada mensal', adicionalInsalubridade:'Insalubridade', adicionalPericulosidade:'Periculosidade', createdAt:'Salvo em', updatedAt:'Atualizado em', funcionario:'Funcionário', tipo:'Tipo', medico:'Médico', data:'Data', resultado:'Resultado', entrada:'Entrada', saida:'Saída', saidaAlmoco:'Saída para almoço', retornoAlmoco:'Retorno do almoço', horasExtras:'Horas extras', totalProventos:'Total de proventos', totalDescontos:'Total de descontos', salarioLiquido:'Salário líquido', fgtsDoMes:'FGTS do mês', baseFGTS:'Base FGTS', itens:'Eventos', valorCalculado:'Valor', memoriaCalculo:'Memória de cálculo' };
function Content({ value }: { value: unknown }) {
  if (value === null || value === undefined) return <span>—</span>;
  if (Array.isArray(value)) return <div className="space-y-4">{value.map((v,i)=><div key={i} className="rounded-lg border bg-white p-4"><p className="mb-3 text-xs font-bold text-red-600">Registro {i+1}</p><Content value={v} /></div>)}</div>;
  if (typeof value === 'object') return <dl className="grid gap-3 sm:grid-cols-2">{Object.entries(value).filter(([k])=>k!=='id' && !k.endsWith('Id') && k!=='senhaHash').map(([k,v])=><div key={k} className={typeof v==='object' ? 'sm:col-span-2' : ''}><dt className="mb-1 text-xs font-bold text-slate-500">{labels[k] || k.replace(/([A-Z])/g,' $1')}</dt><dd className="break-words whitespace-pre-wrap text-sm"><Content value={v} /></dd></div>)}</dl>;
  return <span>{typeof value==='boolean' ? (value?'Sim':'Não') : String(value)}</span>;
}
export default function ActivityDelivery({ activityId, alunoId, nome }: { activityId:string; alunoId:string; nome:string }) {
  const [open,setOpen]=useState(false);
  return <><button type="button" onClick={()=>setOpen(true)} className="inline-flex items-center gap-1 font-bold text-red-600 hover:underline"><FileSearch size={14} />Ver trabalho</button>{open && <Delivery activityId={activityId} alunoId={alunoId} nome={nome} close={()=>setOpen(false)} />}</>;
}
function Delivery({ activityId, alunoId, nome, close }: { activityId:string; alunoId:string; nome:string; close:()=>void }) {
  const [data,setData]=useState<{concluidaEm:string;trabalho:{dados:unknown}|null}|null>(null);
  const [error,setError]=useState('');
  useEffect(()=>{
    const controller=new AbortController();
    fetch('/api/activities/'+encodeURIComponent(activityId)+'/entregas?alunoId='+encodeURIComponent(alunoId),{signal:controller.signal}).then(async r=>{const result=await r.json();if(!r.ok)throw Error(result.error || 'Erro ao consultar entrega.');if(!controller.signal.aborted)setData(result);}).catch(e=>{if(!controller.signal.aborted)setError(e.message);});
    return ()=>controller.abort();
  },[activityId,alunoId]);
  return createPortal(<div role="dialog" aria-modal="true" aria-label={'Trabalho de '+nome} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"><div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"><header className="flex items-center justify-between bg-slate-950 p-5 text-white"><div><p className="text-xs text-slate-400">Entrega da atividade</p><h2 className="font-bold">{nome}</h2></div><button autoFocus onClick={close} aria-label="Fechar trabalho"><X /></button></header><div className="space-y-4 overflow-y-auto p-6">{error ? <p role="alert" className="text-red-600">{error}</p> : !data ? <p>Carregando trabalho...</p> : <><p className="text-xs text-slate-500">Concluída em {new Date(data.concluidaEm).toLocaleString('pt-BR')}</p>{data.trabalho ? <><p className="rounded-lg bg-slate-50 p-3 text-xs text-slate-500">Cópia do módulo no momento da entrega. Em atividades de cadastro, inclui os registros existentes do aluno naquele módulo.</p><Content value={data.trabalho.dados} /></> : <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm"><p>Esta conclusão foi registrada antes do vínculo com o trabalho. Não há cópia da entrega desta atividade.</p><Link href="/avaliacao" className="mt-3 inline-block font-bold underline">Consultar os registros atuais do aluno</Link></div>}</>}</div></div></div>,document.body);
}
