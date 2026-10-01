export function validDemographics(sexo: unknown, data: unknown): boolean {
  if (!['MASCULINO', 'FEMININO'].includes(String(sexo)) || typeof data !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const parsed = new Date(data + 'T00:00:00Z');
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === data && data <= new Date().toISOString().slice(0, 10);
}
