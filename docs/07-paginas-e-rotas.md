# 07. Páginas e rotas

| Rota | Ficheiro | Descrição | JSON-LD |
|---|---|---|---|
| `/` | `app/page.tsx` | Início: Hero, Sobre, Projectos, Competências, Contacto | `WebSite` + `Person` (no layout) |
| `/sobre` | `app/sobre/page.tsx` | Biografia, foto, percurso | `ProfilePage`, `BreadcrumbList` |
| `/projectos` | `app/projectos/page.tsx` | Lista de todos os projectos | `CollectionPage` + `ItemList`, `BreadcrumbList` |
| `/projectos/[slug]` | `app/projectos/[slug]/page.tsx` | Detalhe de um projecto | `CreativeWork`, `BreadcrumbList` |
| `/contacto` | `app/contacto/page.tsx` | Dados de contacto e formulário | `ContactPage`, `BreadcrumbList` |
| (qualquer outra) | `app/not-found.tsx` | 404, com `noindex` | n/a |

## Rotas geradas por convenção

| URL | Ficheiro | Notas |
|---|---|---|
| `/sitemap.xml` | `app/sitemap.ts` | Lista páginas e projectos |
| `/robots.txt` | `app/robots.ts` | Permite tudo, indica o sitemap |
| `/manifest.webmanifest` | `app/manifest.ts` | Manifesto da aplicação |
| `/icon` | `app/icon.tsx` | Favicon 32x32 |
| `/apple-icon` | `app/apple-icon.tsx` | Ícone 180x180 |
| `/opengraph-image`, `/twitter-image` | `app/opengraph-image.tsx`, `twitter-image.tsx` | Imagem de partilha geral (1200x630) |
| `/projectos/[slug]/opengraph-image` (e `twitter-image`) | `app/projectos/[slug]/...` | Imagem de partilha de cada projecto |

## Início (`/`)

Composição em `app/page.tsx`:

```
Heroi
RevelarAoRolar > SobreMim
Projectos            (usa RevelarAoRolar internamente)
Competencias         (idem)
RevelarAoRolar > Contacto
```

O `Heroi` usa animações CSS de entrada (`.entrada-heroi`), por isso não precisa de `RevelarAoRolar`.

## Detalhe de projecto (`/projectos/[slug]`)

- `generateStaticParams` gera uma página por projecto no build.
- `generateMetadata` cria título (`Nome: tecnologia1, tecnologia2, tecnologia3`), descrição e imagem de partilha própria.
- Se o `slug` não existir, chama `notFound()` e mostra a 404.
- Mostra navegação Anterior/Seguinte pela ordem da lista em `projectos.ts`.
- Os botões "Ver site" e "Ver código" só aparecem se `url` / `urlCodigo` estiverem definidos.

### Estudo de caso

Abaixo da descrição, `EstudoDeCaso` mostra, só quando preenchidos em `projectos.ts`: Resultados, Objectivo, Solução, Funcionalidades, Decisões técnicas e Desafios. Campos vazios não geram secção.

## Currículo (`/cv`)

Página própria para leitura e impressão (A4, sempre em tema claro, sem cabeçalho nem rodapé ao imprimir). Gerada a partir de `perfil`, `percurso`, `projectos`, `reconhecimentos` e `competencias`. Está no `sitemap.ts`. O botão "Descarregar PDF" usa `perfil.cv`.

## Metadados

Cada página define `export const metadata = criarMetadata({...})` (ver `src/utilitarios/seo.ts`):

```ts
export const metadata: Metadata = criarMetadata({
  titulo: "Sobre mim: licenciado em Ciências da Computação",
  descricao: "...",
  caminho: "/sobre",
  tipo: "profile",
});
```

O layout aplica o modelo de título `%s | Paulo Ximana`. A página inicial usa `tituloAbsoluto: true`, para o título não ficar duplicado.

## Adicionar uma página nova

1. Criar `src/app/<rota>/page.tsx` com `metadata` via `criarMetadata`.
2. Envolver o conteúdo em `<div className="contentor py-16 md:py-24">`.
3. Acrescentar a rota à navegação em `Cabecalho.tsx` e/ou `Rodape.tsx`.
4. Acrescentar a URL em `app/sitemap.ts`.
5. Se fizer sentido, acrescentar JSON-LD (ver [13](13-seo.md)).

## Estados especiais

- `loading.tsx`: mostrado enquanto uma rota carrega.
- `not-found.tsx`: 404 personalizada, com ligação para o início e `robots: noindex`.

## UX e conversão

- `/projectos`: filtro por tecnologia.
- `/projectos/[slug]`: botão "Falar sobre este projecto" que abre `/contacto?assunto=<nome>`.
- 404: ligações para início, projectos, contacto e lista de projectos.
