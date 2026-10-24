# Site pessoal, Paulo Ximana

Site pessoal e portfólio de Paulo Ximana, desenvolvedor full-stack e licenciado em Ciências da Computação em Luanda, Angola. Construído em Next.js (App Router) e TypeScript.

> **Documentação técnica completa:** ver a pasta [`docs/`](docs/00-indice.md), com 22 documentos numerados (visão geral, instalação, estrutura, conteúdo, design, SEO, deploy, resolução de problemas e mais).

## A começar

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:3000`. Requer Node.js 22 (ver `.nvmrc`).

## Publicar online

Resumo (guia completo em [`docs/15-publicacao-e-deploy.md`](docs/15-publicacao-e-deploy.md)):

1. Verificar localmente: `npm run type-check && npm run lint && npm run build` (o build do Next.js 16 já não corre o lint).
2. Enviar o projecto para um repositório Git (GitHub, GitLab ou Bitbucket).
3. Na [Vercel](https://vercel.com): **Add New Project**, importar o repositório (o Next.js é detectado sozinho, o `vercel.json` já está configurado) e acrescentar as variáveis de ambiente de `.env.example` (`NEXT_PUBLIC_URL_SITE`, `NEXT_PUBLIC_FORMSPREE_ID`). **Deploy**.
4. Ligar o domínio próprio em **Settings, Domains**, definir `NEXT_PUBLIC_URL_SITE` com o domínio final e refazer o deploy.

Alternativas já preparadas: Netlify (`netlify.toml`) e Docker/VPS (`Dockerfile`).

## Estrutura do projecto

```
portfolio-paulo-ximana/
├── .github/workflows/       Integração contínua (type-check, lint, build)
├── Dockerfile               Imagem Docker de produção
├── netlify.toml             Configuração do Netlify (alternativa)
├── vercel.json              Configuração da Vercel
├── public/                  Ficheiros estáticos (imagens, CV em PDF)
│   ├── imagens/
│   │   ├── perfil/          Fotografia de perfil
│   │   ├── projectos/       Capturas de ecrã dos projectos
│   │   └── logotipos/       Logótipos de projectos/parceiros
│   └── ficheiros/           CV e outros documentos descarregáveis
└── src/
    ├── app/                 Rotas (App Router, nomes fixos por convenção do Next.js)
    │   ├── layout.tsx       Layout raiz (fontes, tema, cabeçalho, rodapé)
    │   ├── page.tsx         Página inicial
    │   ├── globals.css      Estilos globais e variáveis de tema
    │   ├── sobre/           Página "Sobre mim"
    │   ├── projectos/       Listagem e página de detalhe ([slug]) de cada projecto
    │   └── contacto/        Página de contacto
    ├── componentes/
    │   ├── layout/          Cabeçalho, rodapé, alternador de tema
    │   ├── seccoes/         Blocos de conteúdo (Herói, Cartão de código, Sobre, Projectos, Competências, Formulário de Contacto…)
    │   ├── ui/              Componentes base reutilizáveis (Botão, Cartão, Etiqueta…)
    │   └── icones/          Ícones e o monograma "PX"
    ├── dados/               Conteúdo do site (perfil, projectos, competências, percurso)
    ├── tipos/               Tipos TypeScript partilhados
    ├── utilitarios/         Funções auxiliares (ex.: combinação de classes CSS)
    ├── ganchos/             Hooks React personalizados
    ├── contextos/           Contexto React (tema claro/escuro)
    └── estilos/             Configuração de tipografia (next/font)
```

**Nota sobre nomes em inglês:** ficheiros e pastas com nomes fixos por convenção de ferramentas, `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `eslint.config.mjs`, `next-env.d.ts`, a pasta `app/` e os seus ficheiros especiais (`page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`, `sitemap.ts`, `robots.ts`, `icon.tsx`, `apple-icon.tsx`), e a pasta `public/`, mantêm-se em inglês porque são exigidos pelas próprias ferramentas (Next.js, npm, TypeScript, ESLint). Todo o resto, pastas, componentes, variáveis, conteúdo, está em português.

## Ícone do site

`src/app/icon.tsx` e `src/app/apple-icon.tsx` geram o favicon e o ícone para dispositivos Apple dinamicamente a partir do monograma "PX" (sem depender de nenhuma imagem exportada à parte). Para usar antes uma imagem própria, basta substituir estes ficheiros por `icon.png` / `apple-icon.png` na mesma pasta.

## Tema claro/escuro

As cores do site são variáveis CSS (`src/app/globals.css`), não valores fixos, por isso `text-marfim`, `bg-jade`, etc. mudam sozinhos consoante o tema, sem precisar de tocar em nenhum componente. Isto evita o problema clássico de texto a ficar invisível num dos temas: cada token (`fundo`, `superficie`, `linha`, `marfim`, `esbatido`, `jade`, `jade-escuro`, `ouro`) tem um valor para tema claro e outro para tema escuro, definidos uma única vez em `globals.css`. Para ajustar as cores de qualquer um dos temas, é ali que se mexe, nunca nos componentes.

O botão de alternância (`src/componentes/layout/AlternadorTema.tsx`) mostra um ícone de sol ou de lua consoante o tema activo, com uma transição suave entre os dois.

## Imagens de substituição

Todas as imagens do site, a fotografia de perfil e as capturas de ecrã dos projectos, estão preenchidas com placeholders gerados automaticamente, na paleta de cores do site, para o layout não ficar quebrado enquanto não tens as imagens reais. Substitui cada uma mantendo o mesmo nome de ficheiro e, idealmente, as mesmas dimensões:

| Ficheiro | Dimensões | Onde aparece |
|---|---|---|
| `public/imagens/perfil/perfil.jpg` | 800×800px (quadrada) | Página "Sobre" |
| `public/imagens/projectos/pulmovision.jpg` | 1200×675px (16:9) | Cartão e página de detalhe da PulmoVision |
| `public/imagens/projectos/quanta-learn.jpg` | 1200×675px (16:9) | Cartão e página de detalhe da QUANTA Learn |
| `public/imagens/projectos/hadoop-saude-angola.jpg` | 1200×675px (16:9) | Cartão e página de detalhe da análise de saúde com Hadoop |
| `public/imagens/projectos/medinova.jpg` | 1200×675px (16:9) | Cartão e página de detalhe do MediNova |
| `public/imagens/projectos/rzn-app.jpg` | 1200×675px (16:9) | Cartão e página de detalhe da RZN App |
| `public/imagens/projectos/okuyeva.jpg` | 1200×675px (16:9) | Cartão e página de detalhe do Okuyeva |
| `public/imagens/projectos/musa.jpg` | 1200×675px (16:9) | Cartão e página de detalhe do website da MUSA |

Se adicionares um projecto novo a `src/dados/projectos.ts`, cria também uma imagem `<slug-do-projecto>.jpg` (1200×675px) em `public/imagens/projectos/`, os componentes já vão à procura dela automaticamente pelo `slug`.

## Formulário de contacto (Formspree)

O formulário em `/contacto` (`src/componentes/seccoes/FormularioContacto.tsx`) envia as mensagens através do [Formspree](https://formspree.io), directamente para o teu email. Para o activar:

1. Cria uma conta gratuita em [formspree.io](https://formspree.io) com o teu email.
2. Cria um novo formulário, o Formspree dá-te um endpoint do género `https://formspree.io/f/abcd1234`.
3. Copia a parte final (`abcd1234`) para a variável `NEXT_PUBLIC_FORMSPREE_ID` num ficheiro `.env.local` (copia `.env.example` para começar).
4. Reinicia `npm run dev`. Na primeira submissão real, o Formspree envia-te um email de confirmação, tens de confirmar antes de as mensagens seguintes chegarem à tua caixa de entrada.

Sem essa variável definida, o formulário mostra uma mensagem de erro a convidar a pessoa a escrever por email, não falha silenciosamente.

## Próximos passos sugeridos

- Substituir as imagens de placeholder por fotografias e capturas de ecrã reais (ver secção "Imagens de substituição" acima).
- Adicionar o CV em `public/ficheiros/`.
- Rever e expandir o texto em `src/dados/perfil.ts` e `src/dados/projectos.ts`.
- Configurar o `NEXT_PUBLIC_FORMSPREE_ID` (ver secção acima) para o formulário de contacto começar a entregar mensagens.


## Design (actualização)

Tipografia: Inter (texto e títulos) e JetBrains Mono (etiquetas técnicas), carregadas via `next/font` em `src/estilos/tipografia.ts`. Ícones usados apenas onde indispensáveis (alternador de tema e menu móvel); a navegação usa setas de texto. O tema é aplicado por um pequeno script antes da primeira pintura, sem "flash".

## Fundo do Herói

A imagem de fundo do hero é `public/imagens/hero/fundo-hero.svg` (vector, funciona em tema claro e escuro). Para trocar por outra imagem, substitui o ficheiro mantendo o nome, ou altera o caminho em `.hero-fundo` no `src/app/globals.css`.

## SEO e motores de pesquisa

O que já está configurado no código:

- **Metadados por página** (`src/utilitarios/seo.ts`, função `criarMetadata`): título, descrição, URL canónico, `hreflang` (pt-AO), Open Graph e Twitter Cards. O texto de cada página está em `export const metadata` do respectivo `page.tsx`.
- **Dados estruturados JSON-LD** (`src/componentes/seo/DadosEstruturados.tsx`): `WebSite` e `Person` em todo o site (com formação, QUANTA, competências e redes sociais), `ProfilePage` em /sobre, `CollectionPage` + `ItemList` em /projectos, `CreativeWork` em cada projecto, `ContactPage` em /contacto e `BreadcrumbList` em todas as páginas interiores. É isto que ajuda o Google a ligar o teu nome ao teu perfil.
- **Imagens de partilha** geradas automaticamente (`opengraph-image.tsx` e `twitter-image.tsx`, geral e por projecto), para links no WhatsApp, LinkedIn, X e Facebook aparecerem com pré-visualização.
- **`sitemap.xml`** (`src/app/sitemap.ts`), **`robots.txt`** (`src/app/robots.ts`) e **`manifest.webmanifest`** (`src/app/manifest.ts`), todos gerados a partir dos dados do site. Ao adicionar um projecto em `src/dados/projectos.ts`, entra sozinho no sitemap. Actualiza a data `ultimaActualizacao` em `sitemap.ts` quando mudares o conteúdo.
- **Página 404 com `noindex`**, cabeçalhos de segurança, imagens em AVIF/WebP e HTML semântico (um `h1` por página, `lang="pt-AO"`, textos alternativos), que ajudam no desempenho e na acessibilidade, ambos usados pelo Google no ranking.
- Palavras-chave e descrição curta do perfil em `src/dados/perfil.ts` (`descricaoSeo`, `palavrasChave`, `instituicao`).

### Passos que só tu podes fazer (por esta ordem)

1. **Definir o domínio real.** Cria `.env.local` (a partir de `.env.example`) com `NEXT_PUBLIC_URL_SITE=https://o-teu-dominio` (sem barra no fim). Tudo o que é URL absoluto (canónicos, sitemap, JSON-LD, imagens de partilha) depende disto. Se o domínio ainda não for `pauloximana.ao`, tem mesmo de ser alterado.
2. **Confirmar os dados reais** em `src/dados/perfil.ts`: o email e os links do GitHub e do LinkedIn estão como exemplo. Os links das redes alimentam o `sameAs` do Google, por isso têm de ser os teus.
3. **Publicar** (por exemplo na Vercel) e garantir HTTPS. Escolhe um só endereço (com ou sem `www`) e redirecciona o outro para ele, no painel do domínio.
4. **Google Search Console** (search.google.com/search-console): adiciona a propriedade, verifica-a (ou cola o código em `NEXT_PUBLIC_GOOGLE_VERIFICATION`), submete `https://o-teu-dominio/sitemap.xml` e usa "Inspeccionar URL" na página inicial, depois "Pedir indexação".
5. **Bing Webmaster Tools** (bing.com/webmasters): importa o site do Search Console ou usa `NEXT_PUBLIC_BING_VERIFICATION`. O Bing alimenta também o DuckDuckGo, o Yahoo e o Ecosia.
6. **Testar:** Rich Results Test (search.google.com/test/rich-results) para os dados estruturados, PageSpeed Insights para o desempenho, e o debugger de partilha do LinkedIn/Facebook para as imagens.
7. **Substituir os placeholders:** a foto de perfil e as capturas de ecrã dos projectos reais. Imagens reais melhoram a pesquisa de imagens e a confiança de quem clica.

### O que mais pesa no posicionamento

O código só prepara o terreno. Para apareceres na pesquisa por "Paulo Ximana" e por termos como "desenvolvedor full-stack Luanda", ajuda muito: ligar o site ao teu perfil de LinkedIn e GitHub (e vice-versa), ter o site referenciado nas páginas dos projectos (QUANTA Learn, PulmoVision) e acrescentar texto real em cada projecto (problema, solução, resultados). Os resultados demoram dias a semanas a aparecer depois da indexação.

## Conteúdo antes de publicar

`npm run verificar-conteudo` lista o que ainda é exemplo ou está por preencher (imagens ilustrativas, email e ligações de exemplo, resultados dos projectos, testemunhos, variáveis de ambiente). Detalhes em [`docs/04-conteudo-e-dados.md`](docs/04-conteudo-e-dados.md).
