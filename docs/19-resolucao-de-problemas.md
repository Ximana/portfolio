# 19. Resolução de problemas

## Instalação e execução

| Problema | Causa provável | Solução |
|---|---|---|
| `npm install` falha ou fica bloqueado | Rede, proxy ou cache corrompida | Verificar a ligação; `npm cache verify`; apagar `node_modules` e `package-lock.json` só em último caso |
| Erro de versão do Node | Node abaixo de 18.17 | Instalar a versão LTS actual (<https://nodejs.org>) |
| `Port 3000 is already in use` | Outro processo na porta | Fechar o outro processo ou `npm run dev -- -p 3001` |
| Erros estranhos com caminhos | Espaço no nome da pasta (`portfolio ximana`) | Renomear a pasta sem espaços (ex.: `portfolio-ximana`) e reinstalar |
| Alterações não aparecem | Cache do `.next` | Parar o servidor, apagar a pasta `.next` e voltar a correr |
| `Module not found: @/...` | Alias ou ficheiro com nome errado | Confirmar `paths` em `tsconfig.json` e o nome (maiúsculas contam em Linux) |

## Build

| Problema | Solução |
|---|---|
| Falha ao descarregar fontes (`Failed to fetch 'Inter' from Google Fonts`) | O `next/font/google` precisa de internet **durante o build**. Verificar a rede/proxy. Alternativa: usar fontes locais com `next/font/local` ou o pacote `@fontsource-variable/inter` |
| Erro de tipos no build | Correr `npm run type-check` e corrigir; o build falha de propósito |
| Erro `Type 'PropsPagina' does not satisfy the constraint 'PageProps'` | No Next.js 15 e 16, `params` das rotas dinâmicas é uma `Promise`: declarar `params: Promise<{ slug: string }>` e usar `await params` |
| Erro de lint | Correr `npm run lint` (o build do Next.js 16 não o faz); corrigir ou, com justificação, desactivar a regra naquela linha |
| `useState` / `useEffect` em Server Component | Acrescentar `"use client"` no topo do ficheiro |
| `Image ... missing "width" and "height"` | Usar `fill` num contentor com posição relativa e dimensões, ou indicar `width` e `height` |

## Aspecto e comportamento

| Problema | Causa | Solução |
|---|---|---|
| Classe Tailwind sem efeito | Ficheiro fora de `content` ou classe construída dinamicamente | Confirmar `content: ["./src/**/*.{ts,tsx}"]`; escrever a classe completa, não `` `bg-${cor}` `` |
| Cor "fixa" não muda com o tema | Foi usada cor literal | Usar os tokens (ver [10](10-tema-claro-escuro.md)) |
| Flash de tema errado ao carregar | Script inicial em falta | Confirmar `<script dangerouslySetInnerHTML={{ __html: scriptTemaInicial }} />` no `<head>` do `layout.tsx` |
| Aviso de hidratação em `<html>` | O script altera a classe antes do React | Já tratado com `suppressHydrationWarning` no `<html>`; manter |
| Conteúdo invisível (`opacity-0`) | `RevelarAoRolar` à espera de entrar no ecrã, ou JavaScript desactivado | Rolar até ao elemento; testar com JS activo |
| Scroll horizontal no telemóvel | Elemento largo numa grelha | Acrescentar `min-w-0` ao filho da grelha e `grid-cols-1` à grelha; verificar `pre`/imagens |
| Imagem do projecto não aparece | Nome do ficheiro diferente do `slug` | A imagem tem de ser `public/imagens/projectos/<slug>.jpg` |
| Fundo do hero não aparece | Caminho do SVG | Confirmar `public/imagens/hero/fundo-hero.svg` e o `url()` em `.hero-fundo` |

## Formulário

| Problema | Solução |
|---|---|
| Mostra sempre o erro | Faltam `NEXT_PUBLIC_FORMSPREE_ID` ou o deploy não foi refeito depois de a definir (ver [05](05-variaveis-de-ambiente.md)) |
| Envia mas não chega email | Confirmar o email do Formspree (primeira submissão); ver a pasta de spam; ver o painel do Formspree |
| Erro CORS na consola | ID inválido ou formulário apagado no Formspree |

## SEO e partilha

| Problema | Solução |
|---|---|
| Sitemap/canónicos com o domínio errado | Definir `NEXT_PUBLIC_URL_SITE` e refazer o build |
| Pré-visualização antiga nas redes | As redes guardam cache: usar o depurador do Facebook/LinkedIn para actualizar |
| `/opengraph-image` dá erro | Ver o terminal; erros comuns: CSS não suportado pelo `next/og` (só um subconjunto de flexbox; cada `div` com vários filhos precisa de `display: "flex"`; nos gradientes radiais usar `circle at X Y` com o raio nas paragens de cor, sem dimensões como `900px 500px`, senão o build falha com "Missing comma before color stops") |
| Página não aparece no Google | Normal nos primeiros dias; verificar no Search Console (Inspeccionar URL), confirmar que não há `noindex` e que o sitemap foi submetido |
| Rich Results Test mostra avisos | Os avisos de campos opcionais são aceitáveis; corrigir os erros |

## Deploy

| Problema | Solução |
|---|---|
| O build passa localmente e falha na Vercel | Comparar versões do Node; confirmar variáveis de ambiente no painel; maiúsculas/minúsculas em nomes de ficheiros |
| Alterei variáveis mas nada mudou | `NEXT_PUBLIC_*` são fixadas no build: refazer o deploy |
| Domínio não resolve | Esperar propagação do DNS (até 48 h) e verificar os registos |
| O lint falha com "React Hook ... is called in function ... that is neither a React function component nor a custom React Hook" | O nome do hook não começa por `use`. Renomear (ex.: `useNoEcra`); ver [17](17-convencoes-de-codigo.md) |
| O build falha com "Failed to fetch `Inter` from Google Fonts" | O ambiente de build não tem acesso a fonts.googleapis.com (rede restrita, Docker sem internet). Garantir acesso à internet durante o build |
| O sitemap e os canónicos mostram `vercel.app` ou o domínio errado | Definir `NEXT_PUBLIC_URL_SITE` com o domínio final e refazer o deploy (ver [05](05-variaveis-de-ambiente.md)) |
| Pré-visualizações (`*.vercel.app`) aparecem no Google | A Vercel já envia `noindex` nas pré-visualizações; confirmar que o domínio de produção é o único indexado |

## Como pedir ajuda

Reunir: o comando que correu, a mensagem de erro completa, a versão do Node (`node -v`), o sistema operativo e o último ficheiro alterado.
