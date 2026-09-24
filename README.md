This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Configuração local do TalentLab (Windows)

O projeto usa Next.js, Prisma e um banco MySQL. O arquivo `.env` não é
versionado: cada pessoa deve configurar sua própria conexão.

1. Instale as dependências com `npm install`, caso ainda não estejam instaladas.
2. No PowerShell, execute `Copy-Item .env.example .env` se ainda não tiver `.env`.
3. No seu MySQL local, crie um banco dedicado ao projeto:

   ```sql
   CREATE DATABASE talentlab CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

4. Edite `DATABASE_URL` no `.env`, substituindo `USUARIO` e `SENHA` pelas suas
   credenciais. Ajuste também a porta se seu MySQL não usar 3306. Caracteres
   especiais nas credenciais precisam de codificação URL (por exemplo, `@` vira `%40`).
5. Com o banco em execução e a conexão configurada, execute:

   ```powershell
   npx prisma generate
   npx prisma migrate deploy
   npm run dev
   ```

Acesse http://localhost:3000. As migrations criam as tabelas, mas não copiam
os dados do banco de quem criou o projeto. Cadastre um professor na tela de
login e use o cadastro de turmas para adicionar turmas e alunos.

Professores, alunos e turmas ficam no MySQL. O primeiro professor deve criar
seu cadastro na tela de login; contas antigas que existiam apenas no navegador
precisam ser cadastradas novamente. Depois do primeiro cadastro, novos professores
só podem ser cadastrados por um professor conectado (abrindo `/login`, sem sair da sessão).
O professor define a senha do aluno no cadastro (6 a 128
caracteres). Apenas o hash da senha é salvo. O login valida matrícula e senha;
o aluno usa a senha definida pelo professor, sem cadastrar sua própria senha.
As sessões são verificadas no servidor e duram oito horas. Sair revoga a sessão.

Empresas, cargos, funcionários, ponto e ASO são separados por aluno. Códigos e
documentos podem ser repetidos entre alunos diferentes. Os registros anteriores
à separação permanecem no ambiente do professor, pois não tinham autoria registrada.
Eventos de folha publicados pelo professor são materiais compartilhados.

Em **Consultar alunos**, o professor seleciona um aluno e consulta seus registros
e atividades concluídas. Folha, custos e RH têm o botão **Salvar trabalho para o
professor**, que registra uma cópia do resultado naquele momento. Não há notas
ou comentários nesta área. Os dados de simuladores representam exercícios enviados
pelo aluno, não resultados auditados automaticamente.

Teste de integração com duas contas e limpeza dos registros temporários:
`node tests/student-isolation.cjs` (servidor local e MySQL precisam estar rodando).
Existe também `prisma/seed.ts` com eventos de folha, mas ele não é executado
automaticamente pelos comandos acima.

Nunca envie seu `.env` para o Git. O `.env.example` contém apenas valores de exemplo.

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
