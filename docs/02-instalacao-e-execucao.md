# 02. Instalação e execução

## Requisitos

- **Node.js 22** (versão fixada em `.nvmrc` e em `engines` no `package.json`; é a que a Vercel e o CI usam). Localmente, o Next.js 14 funciona a partir do Node 18.17, mas versões diferentes da 22 mostram um aviso do npm (`EBADENGINE`), sem impedir a instalação.
- **npm** (vem com o Node.js).
- Ligação à internet na instalação e no primeiro `build` (as fontes são descarregadas do Google Fonts durante o build pelo `next/font`).
- Git (opcional, para controlo de versões).

Verificar versões:

```bash
node -v
npm -v
```

## Instalação

Na raiz do projecto:

```bash
npm install
```

Isto instala as dependências listadas em `package.json` nas versões fixas do `package-lock.json`.

## Configuração mínima

1. Copiar o ficheiro de exemplo:

   ```bash
   cp .env.example .env.local
   ```

   No Windows (PowerShell): `Copy-Item .env.example .env.local`.

2. Preencher os valores. Em desenvolvimento nada é obrigatório, mas o formulário de contacto só envia com `NEXT_PUBLIC_FORMSPREE_ID`. Ver [05](05-variaveis-de-ambiente.md) e [12](12-formulario-de-contacto.md).

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `http://localhost:3000`, com recarregamento automático. |
| `npm run build` | Compila a versão de produção (também valida tipos e lint). |
| `npm run start` | Serve a versão de produção compilada (requer `build` antes). |
| `npm run lint` | Executa o ESLint. |
| `npm run type-check` | Verifica os tipos TypeScript sem gerar ficheiros. |

## Primeira execução

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrir `http://localhost:3000`. Para testar a versão de produção localmente:

```bash
npm run build
npm run start
```

## Verificar que está tudo bem

- A página inicial abre com o hero, o cartão de código e a imagem de fundo.
- O botão de tema (sol/lua) alterna entre claro e escuro.
- `http://localhost:3000/sitemap.xml`, `/robots.txt` e `/manifest.webmanifest` respondem.
- `http://localhost:3000/opengraph-image` devolve uma imagem PNG.
- `npm run type-check` e `npm run lint` terminam sem erros.

Se algo falhar, ver [19](19-resolucao-de-problemas.md).

## Script de verificação de conteúdo

`npm run verificar-conteudo` não precisa de dependências e lista as pendências de conteúdo antes de publicar. Termina sempre com sucesso (é um aviso).
