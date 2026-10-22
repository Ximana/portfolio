# 06. Arquitectura

## Visão de alto nível

Site estático-first em Next.js (App Router). Quase todas as páginas são **Server Components** renderizados no build; só o que precisa de interacção no navegador é **Client Component** (`"use client"`).

```
Dados (src/dados) ──► Páginas (src/app) ──► Componentes (src/componentes)
                          │
                          ├──► Metadados + JSON-LD (src/utilitarios/seo.ts)
                          └──► Tema, tipografia, estilos globais
```

Não existe backend próprio. A única comunicação externa é o `fetch` do formulário para o Formspree.

## Decisões principais

| Decisão | Razão |
|---|---|
| Next.js App Router | Renderização estática, SEO, metadados por rota, imagens e fontes optimizadas. |
| Conteúdo em ficheiros `.ts` tipados | Simples, versionável, sem CMS. O TypeScript valida os campos. |
| Tailwind com tokens em variáveis CSS | O mesmo nome de classe (`text-marfim`, `bg-superficie`) serve os dois temas. |
| Uma só família tipográfica (Inter) + mono | Coerência visual, menos peso de carregamento. |
| JSON-LD em vez de microdados | Mais fácil de manter e validar. |
| Imagens de partilha geradas em runtime (`next/og`) | Sem ficheiros a manter por projecto. |
| Formspree | Formulário funcional sem servidor próprio. |

## Server vs Client Components

**Client Components** (`"use client"`), apenas onde há estado, efeitos ou eventos:

- `Cabecalho` (menu móvel, rota activa, scroll)
- `AlternadorTema` e `ContextoTema`
- `BarraProgresso` (scroll)
- `RevelarAoRolar` (IntersectionObserver)
- `FormularioContacto` (estado do envio)

Tudo o resto é Server Component. `Botao`/`LigacaoBotao` não têm estado, por isso servem nos dois mundos.

## Fluxo de renderização de uma página

1. O `layout.tsx` raiz define `<html lang="pt-AO">`, injecta o script do tema, o JSON-LD global, o cabeçalho, o `<main id="conteudo">` e o rodapé.
2. O `page.tsx` da rota exporta `metadata` (ou `generateMetadata`) e compõe as secções.
3. As secções lêem de `src/dados/` e renderizam HTML.
4. As rotas dinâmicas (`/projectos/[slug]`) são geradas no build por `generateStaticParams`.
5. No navegador, o React "hidrata" apenas os Client Components.

## Camadas de estilo

1. `globals.css`: variáveis CSS dos temas, camadas `@layer base/components`, animações.
2. `tailwind.config.ts`: mapeia as variáveis para classes (`bg-fundo`, `text-jade`...), fontes, sombras.
3. Classes utilitárias nos componentes. Classes reutilizadas ficaram em `@layer components` (`.contentor`, `.etiqueta-mono`, `.painel`).

Ver [09](09-sistema-de-design.md).

## Dependências

Apenas `next`, `react` e `react-dom` em produção. As restantes são de desenvolvimento (tipos, ESLint, Tailwind, PostCSS, TypeScript). A ausência de bibliotecas de UI e de animação é intencional: menos JavaScript, menos manutenção.

## Limitações conhecidas

- Sem CMS: editar conteúdo exige alterar ficheiros e fazer deploy.
- Sem testes automáticos (ver [18](18-qualidade-e-testes.md)).
- Sem análise de tráfego integrada (ver [20](20-roteiro-e-melhorias.md)).
- Texto estático em português; sem internacionalização.
