export function validDate(value: unknown): value is string {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}

export function period30(start: string) {
  if (!validDate(start)) throw new Error('Data inicial inválida.');
  const date = new Date(start + 'T00:00:00Z');
  date.setUTCDate(date.getUTCDate() + 30);
  return { start, exclusiveEnd: date.toISOString().slice(0, 10), end: new Date(date.getTime() - 86400000).toISOString().slice(0, 10) };
}

export function clockMinutes(value: string): number | null {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) return null;
  const [h, m] = value.split(':').map(Number);
  return h * 60 + m;
}

// Nunca deduz jornada diária ou duração de intervalo.
export function workedMinutes(p: { entrada: string; saidaAlmoco: string; retornoAlmoco: string; saida: string }): number | null {
  const values = [p.entrada, p.saidaAlmoco, p.retornoAlmoco, p.saida].map(clockMinutes);
  if (values.some(v => v === null)) return null;
  const [entry, lunch, back, exit] = values as number[];
  if (entry > lunch || lunch > back || back > exit) return null;
  return lunch - entry + exit - back;
}

// Jornada diária de oito horas definida pelo usuário para o TalentLab.
export function dailyOvertimeMinutes(p: Parameters<typeof workedMinutes>[0]): number | null {
  const worked = workedMinutes(p);
  return worked === null ? null : Math.max(0, worked - 8 * 60);
}

export function overtimeMinutes(value: string): number | null {
  const text = value.trim().toLowerCase().replace(',', '.');
  const hm = /^(\d+)h(?:\s*([0-5]?\d)(?:m|min)?)?$/.exec(text);
  if (hm) return Number(hm[1]) * 60 + Number(hm[2] || 0);
  const colon = /^(\d+):([0-5]\d)$/.exec(text);
  if (colon) return Number(colon[1]) * 60 + Number(colon[2]);
  if (/^\d+(?:\.\d+)?h?$/.test(text)) return Math.round(Number(text.replace('h', '')) * 60);
  return null;
}

export function formatMinutes(value: number) {
  return `${Math.floor(value / 60)}h ${String(value % 60).padStart(2, '0')}min`;
}
