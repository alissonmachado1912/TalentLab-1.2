# Banco do TalentLab

1. Abra o SQL Editor do projeto Supabase.
2. Execute todo o arquivo migrations/20260928000000_initial.sql uma vez.
   Ele cria as tabelas e os eventos iniciais numa transa??o, sem apagar tabelas existentes.
   Se alguma tabela j? existir, a transa??o falha: n?o remova dados para contornar o erro.
3. Configure SUPABASE_URL e SUPABASE_SECRET_KEY no .env.local, conforme .env.example.
4. Execute npm install e npm run dev.
5. Cadastre o primeiro professor na tela de acesso; depois crie turma, aluno e atividade.

As rotas Next.js acessam o Supabase com a chave secreta no servidor.
O login continua sendo o do TalentLab (matr?cula para alunos, e-mail para professores),
com hashes de senha e sess?es em cookies HTTP-only. Supabase Auth n?o ? usado.
Todas as tabelas t?m RLS habilitado e n?o concedem acesso a anon/authenticated.
A chave p?blica n?o ? necess?ria. Nunca use NEXT_PUBLIC_ para a chave secreta.

A migra??o n?o importa registros do MySQL. Os IDs s?o texto; novos registros recebem
UUIDs gerados pelo PostgreSQL, permitindo importar IDs antigos se necess?rio.

Valida??o manual: login/logout dos dois perfis; cadastro e exclus?o de turma/aluno,
empresa/cargo/funcion?rio; ponto e ASO; publica??o/conclus?o de atividade;
notifica??es e avalia??o. Verifique tamb?m que um aluno n?o acessa registros de outro.

## Atualização: sexo e nascimento

Execute `migrations/20260929000000_funcionario_dados_pessoais.sql` no SQL Editor do Supabase. Não execute novamente a migração inicial. Depois, use **Funcionários → Dados pessoais** para completar funcionários existentes. Esses dados são exibidos automaticamente na ASO.
