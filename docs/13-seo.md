# 13. SEO

Objectivo: ser encontrado no Google, Bing e outros motores quando alguém pesquisa o teu nome ou termos como "desenvolvedor full-stack Luanda". O código prepara tudo o que é técnico; o posicionamento depende também de publicação, indexação e tempo.

## O que está implementado

| Elemento | Ficheiro | Notas |
|---|---|---|
| Título, descrição, canónico, `hreflang`, Open Graph, Twitter | `src/utilitarios/seo.ts` (`criarMetadata`) e `metadata` de cada `page.tsx` | Um conjunto completo por página |
| Metadados globais (robots, keywords, verificação) | `src/app/layout.tsx` | `googleBot` com pré-visualizações máximas |
| Dados estruturados JSON-LD | `src/componentes/seo/DadosEstruturados.tsx` + funções em `seo.ts` | Ver tabela abaixo |
| Mapa do site | `src/app/sitemap.ts` | Páginas e projectos |
| Regras para robôs | `src/app/robots.ts` | Permite tudo, aponta para o sitemap |
| Imagens de partilha | `src/app/opengraph-image.tsx`, `twitter-image.tsx`, e as de `projectos/[slug]/` | Geradas com `next/og`, 1200x630 |
| Manifesto | `src/app/manifest.ts` | Nome, cores, ícones |
| 404 fora do índice | `src/app/not-found.tsx` | `robots: { index: false }` |
| Idioma | `layout.tsx` | `<html lang="pt-AO">` |

## Dados estruturados (JSON-LD)

| Tipo | Onde | Para quê |
|---|---|---|
| `WebSite` | Todas (layout) | Identifica o site |
| `Person` | Todas (layout) | Nome, cargo, localidade, formação (`alumniOf`), empresa (`worksFor`), competências (`knowsAbout`), redes (`sameAs`) |
| `ProfilePage` | `/sobre` | Página de perfil da pessoa |
| `CollectionPage` + `ItemList` | `/projectos` | Lista de projectos |
| `CreativeWork` | `/projectos/[slug]` | Cada projecto, ligado à pessoa |
| `ContactPage` | `/contacto` | Página de contacto |
| `BreadcrumbList` | Páginas interiores | Caminho de navegação nos resultados |

A `Person` tem `@id` estável (`<url>/#pessoa`) e as outras páginas referem-na por `@id`, ligando tudo à mesma entidade.

## `criarMetadata`

```ts
criarMetadata({
  titulo: "Sobre mim: licenciado em Ciências da Computação",
  descricao: "Percurso de Paulo Ximana ...",
  caminho: "/sobre",
  tipo: "profile",            // "website" (defeito) | "article" | "profile"
  imagem: "/opengraph-image", // opcional
  tituloAbsoluto: false,      // true na página inicial
});
```

**Porque tudo junto:** no Next.js, o `openGraph` e o `twitter` de uma página **substituem** os do layout (não se fundem). Por isso esta função define sempre título, descrição, URL e imagem em conjunto.

## Boas práticas de texto

| Campo | Recomendação |
|---|---|
| Título | Até ~60 caracteres; o nome e a palavra-chave principal; único por página |
| Descrição | 120 a 160 caracteres; resume a página e convida ao clique |
| `h1` | Um por página, descritivo |
| Texto alternativo das imagens | Descreve o conteúdo (já aplicado) |

## Passos de publicação (só tu)

1. **Domínio real em `NEXT_PUBLIC_URL_SITE`**, sem barra no fim. Sem isto, todos os URLs absolutos ficam errados.
2. **Confirmar email e links de GitHub/LinkedIn** em `src/dados/perfil.ts`. O `sameAs` depende deles.
3. **Publicar com HTTPS** e escolher um só endereço (com ou sem `www`), redireccionando o outro.
4. **Google Search Console** (<https://search.google.com/search-console>): adicionar propriedade, verificar (opcionalmente com `NEXT_PUBLIC_GOOGLE_VERIFICATION`), submeter `https://<dominio>/sitemap.xml`, "Inspeccionar URL" na página inicial e "Pedir indexação".
5. **Bing Webmaster Tools** (<https://www.bing.com/webmasters>): importar do Search Console ou usar `NEXT_PUBLIC_BING_VERIFICATION`. Também cobre DuckDuckGo, Yahoo e Ecosia.
6. **Validar:** Rich Results Test (<https://search.google.com/test/rich-results>) e Schema Markup Validator (<https://validator.schema.org>) para o JSON-LD; PageSpeed Insights para desempenho; depuradores de partilha do LinkedIn e do Facebook para as imagens.
7. **Substituir os placeholders** de imagem por reais.

## Verificação local rápida

Com `npm run build && npm run start`:

- `/sitemap.xml`: lista as 8 URLs (4 páginas e 4 projectos).
- `/robots.txt`: inclui a linha `Sitemap:`.
- Ver o código-fonte de uma página: procurar `<link rel="canonical">`, `og:title`, `og:image` e `application/ld+json`.
- `/opengraph-image` e `/projectos/pulmovision/opengraph-image`: devolvem PNG.

## Manutenção

- Ao adicionar um projecto, o sitemap e as imagens de partilha actualizam-se sozinhos. Escrever uma boa `descricao` e `resumo`.
- Actualizar `ultimaActualizacao` em `sitemap.ts` quando o conteúdo mudar de forma relevante. Datas que mudam sempre sem alteração real fazem o Google ignorar o campo.
- Depois de alterar o título ou as imagens de partilha, as redes sociais guardam cache: usar os depuradores para a limpar.
- Não alterar URLs já indexadas sem redireccionamento permanente.

## O que mais pesa

O código não garante posição. Ajudam muito: ligar o site ao LinkedIn e ao GitHub (e o contrário), ter o site referenciado nas páginas dos projectos (QUANTA Learn, PulmoVision), texto real e detalhado em cada projecto (problema, solução, resultados), e tempo. Os resultados demoram dias a semanas depois da indexação.
