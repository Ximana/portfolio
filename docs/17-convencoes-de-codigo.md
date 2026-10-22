# 17. Convenções de código

## Idioma

Todo o código autoral está em **português** (Angola/Portugal): nomes de pastas, componentes, variáveis, funções, comentários e conteúdo. Mantêm-se em inglês apenas os nomes impostos pelas ferramentas:

- Ficheiros de configuração: `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `next-env.d.ts`.
- Convenções do Next.js: pasta `app/` e ficheiros `page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`, `sitemap.ts`, `robots.ts`, `manifest.ts`, `icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`, `twitter-image.tsx`, e as funções `generateMetadata`, `generateStaticParams`.
- A pasta `public/`.
- Termos técnicos sem tradução corrente (`slug`, `hook`, `build`, `deploy`).

## Nomes

| Elemento | Convenção | Exemplo |
|---|---|---|
| Componentes | `PascalCase`, ficheiro com o mesmo nome | `CartaoProjecto.tsx` |
| Hooks | `use` + `PascalCase` (prefixo em inglês, exigido pela regra `react-hooks/rules-of-hooks`; um `usar...` faz o `lint` falhar) | `useNoEcra.ts` |
| Funções e variáveis | `camelCase` | `criarMetadata`, `projectoAnterior` |
| Constantes de módulo | `camelCase` (ou `MAIUSCULAS` para chaves) | `urlSite`, `CHAVE_ARMAZENAMENTO_TEMA` |
| Tipos e interfaces | `PascalCase` | `Projecto`, `EstadoProjecto` |
| Props | Interface `PropsNomeDoComponente` | `PropsCartaoProjecto` |
| Pastas | `minusculas`, sem acentos | `componentes`, `seccoes` |
| Valores literais de estado | `kebab-case`, sem acentos | `"em-desenvolvimento"` |
| Classes CSS personalizadas | `kebab-case` em português | `.etiqueta-mono`, `.hero-fundo` |

Nomes de ficheiros e pastas **sem acentos** (compatibilidade entre sistemas). Em texto visível ao utilizador, usar acentuação correcta.

## Componentes React

- Funções com `export function Nome()`, sem `export default` (excepto onde o Next.js o exige: `page.tsx`, `layout.tsx`, etc.).
- Server Component por defeito; `"use client"` só com estado, efeitos ou eventos (ver [06](06-arquitectura.md)).
- Props tipadas com interface; comentário `/** ... */` nas props que não são óbvias.
- Um componente por ficheiro; componentes auxiliares pequenos podem ficar no mesmo ficheiro se só forem usados ali.
- Compor classes com `juntarClasses(...)`, nunca concatenando strings à mão com condições.

## TypeScript

- Modo `strict` activo. Sem `any`; se for inevitável, comentar o motivo.
- Tipos partilhados em `src/tipos/index.ts`; tipos locais no próprio ficheiro.
- Importar com os aliases `@/...`, não com caminhos relativos longos (`../../..`).

## Estilos

- Tailwind em primeiro lugar. Classes repetidas muitas vezes sobem para `@layer components` em `globals.css`.
- Cores só através dos tokens (`text-marfim`, `bg-superficie`...). Nunca `#hex` nem `text-white` nos componentes (ver [10](10-tema-claro-escuro.md)).
- Mobile first: classes base para telemóvel, `md:` e `lg:` para ecrãs maiores.
- Ordem sugerida das classes: layout, caixa, tipografia, cor, estado (`hover:`, `focus:`), responsivo.
- Animações só com `transform` e `opacity`.

## Comentários

- Em português, a explicar o **porquê**, não o quê.
- Blocos `/** ... */` no topo de funções e componentes não óbvios.
- Não usar o travessão longo em comentários, textos nem documentação; usar vírgulas, dois pontos ou parênteses.

## Texto e conteúdo

- Ortografia consistente com o site: "projecto", "actualizar", "contacto", "ecrã".
- Sem travessão longo.
- Títulos curtos; frases directas.

## Git

Mensagens de commit curtas, no imperativo e em português:

```
Acrescenta projecto QUANTA Learn
Corrige contraste do texto esbatido no tema claro
Actualiza descrição SEO da página inicial
```

Ramificações sugeridas: `main` (produção) e `feature/<nome>` para trabalho novo. Não enviar `.env.local`, `.next/` nem `node_modules/`.

## Antes de cada commit

```bash
npm run type-check
npm run lint
```
