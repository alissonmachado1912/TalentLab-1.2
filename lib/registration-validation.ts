export function companyData(body: Record<string, unknown>) {
  const text = (key: string, required = false) => {
    const value = body[key];
    if (typeof value !== 'string' || value.length > 191 || (required && !value.trim())) throw new Error('Preencha os dados da empresa corretamente.');
    return value.trim();
  };
  return { razaoSocial: text('razaoSocial', true), cnpj: text('cnpj', true), nomeFantasia: text('nomeFantasia'), cidadeUF: text('cidadeUF') };
}

export function jobData(body: Record<string, unknown>) {
  const { codigo, titulo, salarioBase, jornadaMensal, adicionalInsalubridade, adicionalPericulosidade } = body;
  if (typeof codigo !== 'string' || !codigo.trim() || codigo.length > 191 || typeof titulo !== 'string' || !titulo.trim() || titulo.length > 191 ||
      !['string', 'number'].includes(typeof salarioBase) || !Number.isFinite(Number(salarioBase)) || Number(salarioBase) < 0 || salarioBase === '' ||
      !['string', 'number'].includes(typeof jornadaMensal) || !Number.isInteger(Number(jornadaMensal)) || Number(jornadaMensal) <= 0 ||
      typeof adicionalInsalubridade !== 'boolean' || typeof adicionalPericulosidade !== 'boolean') throw new Error('Preencha os dados do cargo corretamente.');
  return { codigo: codigo.trim().toUpperCase(), titulo: titulo.trim(), salarioBase: Number(salarioBase), jornadaMensal: Number(jornadaMensal), adicionalInsalubridade, adicionalPericulosidade };
}

export function validEmployeeNotes(body: Record<string, unknown>) {
  return (body.observacoes === undefined || (typeof body.observacoes === 'string' && body.observacoes.length <= 10000)) &&
    (body.pcd === undefined || typeof body.pcd === 'boolean');
}
