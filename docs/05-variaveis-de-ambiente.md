# 05. Variáveis de ambiente

As variáveis são lidas de `.env.local` (desenvolvimento) ou do painel da plataforma de alojamento (produção). O ficheiro `.env.example` é o modelo versionado; `.env.local` nunca deve ser enviado para o repositório (está no `.gitignore`).

Todas começam por `NEXT_PUBLIC_`, o que significa que **ficam visíveis no código enviado ao navegador**. Não guardar aqui segredos (palavras-passe, chaves privadas).

## Referência

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_URL_SITE` | Sim, quando houver domínio próprio | URL público do site, **sem barra no fim** (ex.: `https://pauloximana.ao`). Usado em URLs canónicos, sitemap, robots, JSON-LD, Open Graph e imagens de partilha. Se não estiver definido na Vercel, usa-se o domínio de produção do projecto (`https://<projecto>.vercel.app`); fora da Vercel, o valor por defeito é `https://pauloximana.ao`. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Sim, para o formulário enviar | Parte final do endpoint do Formspree (`abcd1234` em `https://formspree.io/f/abcd1234`). Sem ela, o formulário abre o programa de email do visitante com a mensagem preenchida. |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Opcional | Valor do atributo `content` da meta tag de verificação do Google Search Console. |
| `NEXT_PUBLIC_BING_VERIFICATION` | Opcional | Valor da meta tag `msvalidate.01` do Bing Webmaster Tools. |

## Exemplo de `.env.local`

```bash
NEXT_PUBLIC_URL_SITE=https://pauloximana.ao
NEXT_PUBLIC_FORMSPREE_ID=abcd1234
NEXT_PUBLIC_GOOGLE_VERIFICATION=
NEXT_PUBLIC_BING_VERIFICATION=
```

## Comportamento importante

- As variáveis `NEXT_PUBLIC_*` são **incorporadas no momento do build**. Depois de as alterar em produção é preciso voltar a fazer deploy (ou `npm run build`); reiniciar o servidor não chega.
- Em desenvolvimento (`npm run dev`), reiniciar o servidor depois de editar `.env.local`.
- Se `NEXT_PUBLIC_URL_SITE` ficar com o valor de exemplo e o domínio real for outro, os canónicos e o sitemap apontam para o sítio errado, o que prejudica o SEO.

## URL automático na Vercel

O `next.config.mjs` aplica esta ordem de prioridade para o URL do site:

1. `NEXT_PUBLIC_URL_SITE`, se estiver definido (tem sempre prioridade).
2. `VERCEL_PROJECT_PRODUCTION_URL`, variável de sistema que a Vercel fornece sozinha (por isso o primeiro deploy, ainda sem domínio próprio, já gera canónicos e sitemap correctos).
3. O valor por defeito de `src/utilitarios/seo.ts`.

Quando o domínio próprio estiver ligado, definir `NEXT_PUBLIC_URL_SITE` e refazer o deploy.

## Onde cada variável é lida

| Variável | Ficheiros |
|---|---|
| `NEXT_PUBLIC_URL_SITE` | `src/utilitarios/seo.ts` (exporta `urlSite` e `urlAbsoluta`, usados em todo o lado) |
| `NEXT_PUBLIC_FORMSPREE_ID` | `src/componentes/seccoes/FormularioContacto.tsx` |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION`, `NEXT_PUBLIC_BING_VERIFICATION` | `src/app/layout.tsx` (campo `verification`) |
