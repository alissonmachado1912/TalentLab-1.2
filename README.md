This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Configuração local do TalentLab (Windows)

O projeto usa Next.js e Supabase (PostgreSQL), acessado por @supabase/supabase-js.

1. Execute npm install.
2. No SQL Editor do Supabase, execute [a migracao inicial](supabase/migrations/20260928000000_initial.sql).
   Ela cria as tabelas e os dez eventos de folha em uma transacao. Execute uma vez;
   ela nao apaga tabelas existentes nem importa dados do banco anterior.
3. Copie .env.example para .env.local e configure SUPABASE_URL e SUPABASE_SECRET_KEY.
   Nunca use NEXT_PUBLIC_ na chave secreta nem envie .env.local ao Git.
4. Execute npm run dev e acesse http://localhost:3000.

O primeiro professor cria o cadastro na tela de login. Depois, novos professores
so podem ser cadastrados por um professor conectado. O professor cria turmas
e define a senha de cada aluno (6 a 128 caracteres). O aluno entra com matricula
e senha. Os hashes e as sessoes ficam no Supabase; o login continua sendo o
do TalentLab, sem usar Supabase Auth. As sessoes duram oito horas e sao revogadas ao sair.

Empresas, cargos, funcionarios, ponto e ASO sao separados por aluno. As rotas
verificam a sessao e a autoria antes de acessar o banco. As tabelas tem RLS
habilitado e bloqueiam acesso pelas chaves publicas; apenas o servidor usa a chave secreta.
Eventos de folha sao compartilhados. O professor consulta registros e trabalhos
dos alunos em **Consultar alunos**.

Veja [o guia do banco](supabase/README.md) para detalhes e validacao manual.
O teste de integracao usa um servidor local e o banco configurado:
node tests/student-isolation.cjs.
Ele cria contas e registros temporarios e os limpa no final.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
