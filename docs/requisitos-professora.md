# Requisitos da professora

Branch: `feature/requisitos-professora`.

O checkout atual utiliza Next.js 16.3 e Supabase/PostgreSQL, com sessões próprias e senhas protegidas por scrypt. Não há Prisma neste projeto. Nenhuma conexão, variável de ambiente, configuração de hospedagem ou banco remoto foi modificada. As alterações locais de design que já existiam foram preservadas.

## Funcionalidades

- **Empresas e cargos:** botão de lápis carrega os dados no mesmo formulário; salvar utiliza PATCH com autenticação e filtro de proprietário. Os IDs e relacionamentos permanecem. Cargos não possuem campo de descrição na estrutura atual; todos os campos existentes são editáveis. Alterar o salário do cargo atualiza os salários dos funcionários vinculados do mesmo ambiente, conforme solicitado pelo usuário. Os demais dados do cargo são consultados pelo vínculo existente. Novos funcionários recebem o salário atual do cargo no backend. A página de funcionários consulta novamente os dados ao recuperar o foco. A gravação do cargo e dos salários utiliza duas requisições; se a sincronização falhar, a API informa que é necessário salvar novamente para concluí-la. Nenhuma nova migration é necessária.
- **Funcionários:** pesquisa com lupa por nome, CPF, código, empresa e cargo, ignorando acentos. A listagem consulta os registros reais e pagina o transporte do Supabase. Observações e PCD são cadastrados e editados em Dados pessoais. O acesso dos alunos continua restrito pelo backend ao próprio ambiente; professores podem consultar e editar esses dados em Consultar alunos → Funcionários → Editar dados pessoais. Cadastros anteriores mantêm PCD como não informado, sem assumir Não.
- **Ponto:** campos explícitos para intervalo e horas extras registradas, mantendo os horários sugeridos que já existiam. O relatório aceita qualquer data inicial e inclui exatamente 30 dias, com registros, dias sem registro, horas trabalhadas descontando somente o intervalo informado e totais. Horários incompletos ou fora de ordem são sinalizados; nenhuma jornada noturna ou diária é presumida. Dias sem registro não são classificados como falta.
- **Folha:** selecionar funcionário ou período carrega automaticamente as horas extras reais no evento 0006 da simulação e do holerite. O período inicial é de 30 dias a partir do primeiro dia do mês atual e pode ser alterado. Após registrar um ponto, o link para a folha seleciona automaticamente o funcionário e os 30 dias que terminam na data registrada. O evento automático substitui um evento manual 0006 e não se duplica ao atualizar. Trocar funcionário limpa os dados anteriores; respostas atrasadas são descartadas. A confirmação adicional grava FolhaPagamento, ItemFolha, LancamentoHoraExtra e os vínculos com cada ponto em uma transação. Utiliza a regra existente: salário ÷ 220 × 1,5 × horas registradas. O FGTS mantém a incidência do evento e a regra existente de 8%. Nenhuma hora extra é deduzida da jornada mensal. A folha persistida nesta operação contém salário base e o evento de horas extras; os demais eventos do simulador continuam no fluxo existente de simulação e envio de trabalho. Vínculos únicos por ponto impedem duplicidade também em períodos sobrepostos; alterações posteriores dos pontos vinculados e exclusões que destruiriam esses vínculos são bloqueadas.
- **Professores:** botão Cadastrar professor em Turmas & Alunos, área exclusiva de professores. Backend exclusivo de professores, campos obrigatórios, e-mail normalizado e único, senha com hash, nenhuma exposição de hashes e manutenção da sessão de quem cadastra. O novo professor utiliza o login existente.

## Migration pendente

Simplificação do uso: o relatório de ponto agora abre como documento em uma janela no padrão da ASO/holerite, com empresa, funcionário, período, horários separados por coluna e totais. O botão Imprimir / Salvar PDF imprime somente o documento. A seleção de funcionário e data inicial continua permitindo períodos anteriores. O cadastro de ponto apresenta os horários na ordem cronológica, com rótulos visíveis. Na folha, os detalhes dos registros e da fórmula ficam em Ver registros e cálculo. Essa simplificação não exige migration adicional.

Atualização da regra de ponto: o usuário definiu oito horas trabalhadas por dia para todos os funcionários. Nos novos registros, o backend calcula `máximo(0, minutos trabalhados − 480)` descontando o intervalo explicitamente informado. O campo de horas extras mostra o resultado automaticamente e não é editável. Valores de horas extras enviados manualmente pelo cliente não substituem o cálculo do servidor. Horários fora de ordem são rejeitados, sem presumir uma jornada que atravesse meia-noite. Essa mudança usa a coluna existente e não exige nova migration; registros anteriores mantêm os valores já salvos. O valor financeiro mantém a regra de pagamento existente.

Aplicar `supabase/migrations/20261008000000_requisitos_professora.sql` no ambiente autorizado, depois das migrations existentes, incluindo `20260929000000_funcionario_dados_pessoais.sql` se ainda estiver pendente. Não reaplicar a migration inicial em um banco já configurado.

A migration acrescenta observações e PCD a Funcionario, cria duas tabelas de vínculo, o RPC transacional e um trigger de proteção dos pontos vinculados. Preserva registros existentes e protege o acesso direto com RLS e permissões exclusivas da credencial de servidor. Não foi aplicada a nenhum banco remoto. A inspeção somente de estrutura confirmou em 08/10/2026 que observacoes e as tabelas de vínculo não existem no banco configurado. A simulação/holerite continua usando os pontos reais mesmo sem as tabelas novas. Salvar observações/PCD ou confirmar vínculos persistentes depende da migration e apresenta mensagem específica enquanto estiver pendente. A conexão disponível é de dados via Supabase REST; não há conexão SQL nem token de gerenciamento configurado para executar migrations neste ambiente. A aplicação pode ser feita pelo SQL Editor do Supabase, após autorização.

## Arquivos desta implementação

Páginas modificadas:

- `app/(dashboard)/cadastros/empresas/page.tsx`
- `app/(dashboard)/cadastros/cargos/page.tsx`
- `app/(dashboard)/cadastros/funcionarios/page.tsx`
- `app/(dashboard)/cadastros/turmas/page.tsx`
- `app/(dashboard)/avaliacao/page.tsx`
- `app/(dashboard)/folha-pagamento/ponto/page.tsx`
- `app/(dashboard)/folha-pagamento/calcular/page.tsx`

Backend modificado:

- `app/api/empresas/[id]/route.ts`
- `app/api/cargos/[id]/route.ts`
- `app/api/funcionarios/route.ts`
- `app/api/funcionarios/[id]/route.ts`
- `app/api/pontos/route.ts`
- `app/api/pontos/[id]/route.ts`
- `lib/database.types.ts`
- `lib/auth.ts` — mensagem específica para schema pendente.

Componentes e configuração modificados:

- `components/employee-demographics-form.tsx`
- `components/holerite-modal.tsx` — referência real do período, removendo a referência fixa anterior.
- `package.json` — scripts `test:requisitos` e `test:ui`, sem novas dependências.

Arquivos adicionados:

- `app/api/pontos/relatorio/route.ts`
- `app/api/folha/horas-extras/route.ts`
- `app/api/professores/route.ts`
- `components/time-report.tsx`
- `components/time-report-modal.tsx`
- `components/overtime-import.tsx`
- `components/professor-registration.tsx`
- `lib/time-report.ts`
- `lib/overtime-payroll.ts`
- `lib/registration-validation.ts`
- `lib/payroll-items.ts`
- `lib/schema-errors.ts`
- `supabase/migrations/20261008000000_requisitos_professora.sql`
- `tests/requisitos-professora.test.cjs`
- `tests/requisitos-ui.cjs`
- `docs/requisitos-professora.md`

As alterações que aparecem no Git em CSS global, dashboard, layout, header, sidebar e componentes básicos de UI já existiam antes desta tarefa e não foram feitas por esta implementação.

## Verificação

- `npm run test:requisitos`: passou. Testes de duração, validação, handlers reais das APIs com transporte local, sessões, permissões, edição, persistência, relatório, limites de datas, confirmação, bloqueio de duplicidade/sobreposição, rollback transacional, proteção dos vínculos, cadastro de professor, manutenção de sessão e login do novo professor. PostgreSQL isolado em memória com todas as migrations; sem `.env` ou chamadas ao banco remoto.
- `npm run test:db`: passou. Constraints e permissões do schema original.
- `npm run build`: passou, incluindo TypeScript.
- `npm run test:ui`: teste local de cliques com Edge headless, servidor local e APIs interceptadas. Verifica consulta visível do funcionário, salvar dados, edição de empresas/cargos, ponto, extras automáticas no holerite, fechamento, troca de funcionário e navegação direta para a folha. Não usa credenciais nem altera o banco real.
- `npm run lint`: ainda falha por ocorrências existentes de `react-hooks/set-state-in-effect` e imports CommonJS no teste antigo. Os novos módulos não acrescentam erros de lint.

Não houve escrita no banco remoto. A operação de persistência dos novos campos no ambiente de destino depende da aplicação autorizada da migration. Nenhum merge, commit ou deploy foi realizado. O teste de interface inicia e encerra seus próprios processos; executar depois de `npm run build` em um ambiente com Edge ou Chrome.
