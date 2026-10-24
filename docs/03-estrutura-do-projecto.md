# 03. Estrutura do projecto

## Árvore de pastas

```
portfolio ximana/
├── .github/workflows/ci.yml     Integração contínua (type-check, lint, build)
├── docs/                        Esta documentação
├── public/                      Ficheiros estáticos servidos tal como estão
│   ├── ficheiros/               CV e outros documentos descarregáveis
│   └── imagens/
│       ├── hero/                fundo-hero.svg (fundo do hero)
│       ├── logotipos/           Logótipos de projectos ou parceiros
│       ├── perfil/              perfil.jpg (800x800)
│       └── projectos/           <slug>.jpg (1200x675), um por projecto
├── src/
│   ├── app/                     Rotas (App Router do Next.js)
│   │   ├── layout.tsx           Layout raiz: fontes, tema, cabeçalho, rodapé, JSON-LD
│   │   ├── page.tsx             Página inicial
│   │   ├── globals.css          Variáveis de tema, camadas Tailwind, animações
│   │   ├── sobre/page.tsx
│   │   ├── projectos/
│   │   │   ├── page.tsx         Lista de projectos
│   │   │   └── [slug]/          Detalhe de projecto (+ imagens de partilha)
│   │   ├── contacto/page.tsx
│   │   ├── not-found.tsx        404
│   │   ├── loading.tsx          Estado de carregamento
│   │   ├── sitemap.ts           /sitemap.xml
│   │   ├── robots.ts            /robots.txt
│   │   ├── manifest.ts          /manifest.webmanifest
│   │   ├── icon.tsx             Favicon gerado
│   │   ├── apple-icon.tsx       Ícone Apple gerado
│   │   ├── opengraph-image.tsx  Imagem de partilha geral
│   │   └── twitter-image.tsx    Reutiliza a anterior
│   ├── componentes/
│   │   ├── layout/              Cabecalho, Rodape, AlternadorTema, BarraProgresso
│   │   ├── seccoes/             Heroi, CartaoCodigo, SobreMim, Projectos, Competencias,
│   │   │                        Contacto, FormularioContacto, PercursoAcademico
│   │   ├── ui/                  Botao, Cartao, CartaoProjecto, Etiqueta,
│   │   │                        CabecalhoSeccao, RevelarAoRolar
│   │   ├── icones/              Icones (conjunto SVG), LogotipoPX
│   │   └── seo/                 DadosEstruturados (JSON-LD)
│   ├── contextos/               ContextoTema (tema claro/escuro)
│   ├── dados/                   Conteúdo: perfil, projectos, competencias, percurso
│   ├── estilos/                 tipografia.ts (next/font)
│   ├── ganchos/                 useNoEcra, useDeteccaoScroll
│   ├── tipos/                   index.ts (tipos TypeScript partilhados)
│   └── utilitarios/             seo, imagemSocial, juntarClasses, rotularEstado,
│                                rotularTipoEtapa
├── .dockerignore / Dockerfile   Imagem Docker de produção (modo standalone)
├── .env.example                 Modelo de variáveis de ambiente
├── .nvmrc                       Versão do Node (22)
├── netlify.toml                 Configuração para o Netlify (alternativa)
├── eslint.config.mjs            Configuração do ESLint 9 (formato flat)
├── next.config.mjs              Configuração do Next.js (imagens, cabeçalhos, URL, standalone)
├── vercel.json                  Configuração para a Vercel
├── package.json / package-lock.json
├── postcss.config.mjs           Tailwind + Autoprefixer
├── tailwind.config.ts           Tokens de design (cores, fontes, sombras)
├── tsconfig.json                TypeScript e aliases de importação
└── README.md                    Resumo e guia rápido
```

## Aliases de importação

Definidos em `tsconfig.json`. `@/` aponta para `src/`:

```ts
import { perfil } from "@/dados/perfil";
import { Botao } from "@/componentes/ui/Botao";
```

## Onde mexer para...

| Tarefa | Ficheiro |
|---|---|
| Alterar textos do perfil | `src/dados/perfil.ts` |
| Adicionar um projecto | `src/dados/projectos.ts` (ou um ficheiro em `src/dados/detalhes/`) + imagem em `public/imagens/projectos/` |
| Alterar cores | `src/app/globals.css` |
| Alterar fontes | `src/estilos/tipografia.ts` |
| Alterar a navegação | `src/componentes/layout/Cabecalho.tsx` e `Rodape.tsx` |
| Alterar o fundo do hero | `public/imagens/hero/fundo-hero.svg` |
| Alterar título/descrição de uma página | `export const metadata` no `page.tsx` respectivo |
| Alterar o domínio | `NEXT_PUBLIC_URL_SITE` em `.env.local` |

## Ficheiros gerados (não editar)

`.next/` (build), `node_modules/`, `next-env.d.ts` e `tsconfig.tsbuildinfo` são gerados automaticamente e estão no `.gitignore`.

## scripts/

`scripts/verificar-conteudo.mjs`: lista conteúdo por preencher ou substituir. Ver [04](04-conteudo-e-dados.md).
