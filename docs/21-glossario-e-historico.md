# 21. Glossário e histórico de alterações

## Glossário

| Termo | Significado |
|---|---|
| **App Router** | Sistema de rotas do Next.js baseado na pasta `app/`. |
| **Server Component** | Componente renderizado no servidor (ou no build); não envia o seu JavaScript ao navegador. |
| **Client Component** | Componente com `"use client"`, que corre no navegador (estado, efeitos, eventos). |
| **Hidratação** | Passo em que o React "liga" o HTML já renderizado à interactividade. |
| **Slug** | Identificador de um projecto na URL e no nome da imagem (`pulmovision`). |
| **Token de design** | Valor reutilizável (cor, espaçamento) com nome, aqui como variável CSS. |
| **Tailwind** | Biblioteca de classes utilitárias de CSS. |
| **JSON-LD** | Formato de dados estruturados que os motores de pesquisa leem. |
| **Schema.org** | Vocabulário comum dos dados estruturados (`Person`, `WebSite`...). |
| **Open Graph** | Metadados que definem a pré-visualização de um link nas redes sociais. |
| **Canónico** | URL preferido de uma página, para evitar conteúdo duplicado. |
| **Sitemap** | Ficheiro XML com as páginas do site, para os motores de pesquisa. |
| **Core Web Vitals** | Métricas do Google de desempenho percebido: LCP, INP, CLS. |
| **LCP** | Tempo até ao maior elemento visível carregar. |
| **INP** | Tempo de resposta às interacções. |
| **CLS** | Estabilidade visual (saltos de layout). |
| **WCAG** | Directrizes internacionais de acessibilidade web. |
| **Formspree** | Serviço que recebe os dados de um formulário e envia-os por email. |
| **Deploy** | Publicação de uma versão do site. |
| **Build** | Compilação do projecto para produção. |
| **LTS** | Versão do Node.js com suporte de longa duração. |

### UX e conversão

- Formulário com motivo do contacto, contador, pré-preenchimento por `?assunto=` e alternativa por email.
- Botão "Copiar" email, filtro de projectos por tecnologia, CTA em cada projecto e 404 com ligações úteis.

### Conteúdo e prova de trabalho

- Estudo de caso por projecto (objectivo, solução, funcionalidades, decisões técnicas, desafios, resultados opcionais), com factos já fornecidos.
- Herói com factos em vez de números de vaidade; reconhecimentos (LISPA Jumpstart, TCC); secção de testemunhos que só aparece com dados reais.
- Página `/cv` para impressão, PDF em `public/ficheiros/` e ligações de download.
- Capas dos projectos e avatar gerados (ilustrativos) e script `npm run verificar-conteudo`.

### Termos do código

| Português | Significa |
|---|---|
| `contentor` | Contêiner centrado com largura máxima |
| `painel` | Cartão com contorno e sombra |
| `etiqueta` | Chip de texto |
| `cabecalho` / `rodape` | Header / footer |
| `seccoes` | Blocos de conteúdo das páginas |
| `ganchos` | Hooks do React |
| `contextos` | Contextos do React |
| `dados` | Conteúdo do site |
| `utilitarios` | Funções auxiliares |
| `jade`, `marfim`, `ouro`, `esbatido` | Nomes dos tokens de cor (verde, texto, dourado, texto secundário) |

## Histórico de alterações

### Preparação para publicação (deploy)

**Técnico**
- Hooks renomeados de `usar...` para `use...` (`useNoEcra`, `useDeteccaoScroll`, `useTema`): a regra `react-hooks/rules-of-hooks` não reconhece o prefixo `usar` e fazia o `next build` falhar no lint.
- Gradiente radial das imagens de partilha (`imagemSocial.tsx`) corrigido para a sintaxe suportada pelo `next/og`; antes, o build falhava ao gerar `/opengraph-image` e `/twitter-image`.
- Next.js actualizado de 14.2.5 para 14.2.35 (correcções de segurança da linha 14), `eslint-config-next` alinhado, PostCSS 8.5.31 e dependências transitivas corrigidas com `npm audit fix`.
- `engines.node` (`22.x`) e `.nvmrc`.
- `next.config.mjs`: cabeçalho HSTS, cache dos ficheiros de `public/imagens` e `public/ficheiros`, URL do site automático na Vercel (`VERCEL_PROJECT_PRODUCTION_URL`) e modo `standalone` opcional (`BUILD_STANDALONE=true`).

**Publicação**
- Novos: `vercel.json`, `netlify.toml`, `Dockerfile`, `.dockerignore`, `.github/workflows/ci.yml`.
- `.env.example` completo (inclui as variáveis de verificação do Google e do Bing); `.gitignore` com `.vercel`.

**Documentação**
- Guia de deploy ([15](15-publicacao-e-deploy.md)) reescrito; actualizados 02, 03, 05, 16, 17, 18, 19 e o README.

### Versão actual: redesenho completo

**Design**
- Novo sistema de design: paleta escura com verde de destaque, tokens para tema claro e escuro, Inter e JetBrains Mono, cartões com contorno fino, grelha técnica no fundo.
- Cabeçalho fixo com estado activo e menu móvel; rodapé com colunas.
- Hero com cartão de código, números do perfil e imagem de fundo (circuitos e matriz de pontos em SVG).
- Página inicial reestruturada: Sobre com factos, projecto em destaque grande, competências em grelha "bento", painel final de contacto.
- Linha temporal no percurso; página Sobre com foto fixa; detalhe de projecto com painel lateral; página de contacto em duas colunas; 404 renovada.
- Ícones apenas onde são necessários; setas removidas dos botões.
- Numeração removida dos cartões de projecto.

**Conteúdo**
- Formação actualizada para "Licenciado em Ciências da Computação".
- Travessões longos removidos de todo o site.
- Imagens de substituição regeneradas sem travessão.

**Técnico**
- Tema sem "flash" (script inicial) e transição suave controlada.
- Formulário com validação nativa e estados de sucesso e erro acessíveis.
- Correcção de excesso de largura no telemóvel (grelha do hero).
- Ligação "Saltar para o conteúdo", foco visível, suporte a movimento reduzido.

**SEO**
- Metadados completos por página, canónicos, `hreflang`, Open Graph e Twitter.
- JSON-LD (`WebSite`, `Person`, `ProfilePage`, `CollectionPage`, `CreativeWork`, `ContactPage`, `BreadcrumbList`).
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, imagens de partilha geradas, 404 com `noindex`.
- Cabeçalhos de segurança e imagens AVIF/WebP.

**Documentação**
- Pasta `docs/` com 22 documentos numerados.

### Versão inicial

- Site base em Next.js 14 e Tailwind com tema claro e escuro, páginas Início, Sobre, Projectos e Contacto, dados em `src/dados/`, formulário com Formspree e placeholders de imagem.

## Manutenção deste histórico

Ao fazer alterações relevantes, acrescentar uma entrada no topo, com data e resumo por área (Design, Conteúdo, Técnico, SEO, Documentação).
