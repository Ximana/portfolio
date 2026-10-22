# 20. Roteiro e melhorias futuras

## Pendente (depende de conteúdo do autor)

Executar `npm run verificar-conteudo` para a lista actual. A estrutura (estudo de caso, `/cv`, reconhecimentos, testemunhos) já está implementada; falta fornecer: fotografia real, capturas reais, resultados mensuráveis, testemunhos, email e ligações reais, domínio.

| Item | Onde | Prioridade |
|---|---|---|
| Fotografia de perfil real (800x800) | `public/imagens/perfil/perfil.jpg` | Alta |
| Capturas de ecrã reais dos 4 projectos (1200x675) | `public/imagens/projectos/` | Alta |
| Confirmar email, GitHub e LinkedIn | `src/dados/perfil.ts` | Alta |
| Domínio real | `NEXT_PUBLIC_URL_SITE` | Alta |
| Activar o formulário (Formspree) | `NEXT_PUBLIC_FORMSPREE_ID` | Alta |
| CV em PDF e botão "Descarregar CV" | `public/ficheiros/` | Média |
| Ligações `url` e `urlCodigo` dos projectos (site e repositório) | `src/dados/projectos.ts` | Média |
| Textos de projecto mais ricos: problema, solução, resultados, impacto | `src/dados/projectos.ts` | Média |
| Registar no Google Search Console e no Bing | Ver [13](13-seo.md) | Alta, após publicar |

## Melhorias técnicas sugeridas

| Melhoria | Benefício | Esforço |
|---|---|---|
| Análise de tráfego respeitadora da privacidade (Plausible, Umami ou Vercel Analytics) | Saber de onde vêm as visitas | Baixo |
| Migrar o Next.js 14 para uma versão suportada (15 ou 16), com `npm audit` limpo | Fecha avisos de segurança sem correcção na linha 14 | Médio |
| Testes automáticos (a integração contínua já existe, ver [18](18-qualidade-e-testes.md)) | Menos regressões | Médio |
| Fontes auto-alojadas (`next/font/local` ou Fontsource) | Builds sem depender do Google Fonts | Baixo |
| `Content-Security-Policy` | Mais segurança | Médio |
| Protecção anti-spam adicional (Turnstile) | Menos spam | Baixo |
| Página 404 com ligações úteis (projectos, contacto) | Menos abandono | Baixo |
| Modo de impressão (`@media print`) para a página Sobre | CV imprimível | Baixo |

## Funcionalidades possíveis

- **Blogue ou artigos técnicos** (MDX): o melhor investimento de SEO a médio prazo; mostra conhecimento e gera tráfego por temas como deep learning, Next.js ou desenvolvimento em Angola.
- **Página de certificações e prémios**, se existirem (por exemplo a participação no programa LISPA Jumpstart).
- **Testemunhos** de clientes ou colegas, com autorização.
- **Versão em inglês** (`/en`) com `hreflang`, para alcançar oportunidades internacionais.
- **Estudos de caso** completos da PulmoVision e da QUANTA Learn, com imagens do processo.
- **Filtro de projectos por tecnologia** na página `/projectos` (precisaria de um Client Component).
- **Botão de partilha** e ligação "Copiar email".

## Melhorias de conteúdo para SEO

1. Uma página dedicada por projecto principal, com 400 a 800 palavras úteis.
2. Ligações do site nos perfis e nas páginas dos projectos (backlinks de confiança).
3. Perfil do LinkedIn e do GitHub com o mesmo nome, cargo e ligação para o site.
4. Artigos sobre os problemas resolvidos (ex.: deep learning para radiografias, WebSockets com Cloudflare).

## Dívida técnica conhecida

- O conteúdo do `CartaoCodigo` e os "factos" de `SobreMim` estão fixos nos componentes, não em `dados/`.
- A grelha "bento" das competências assume até 5 áreas; mais áreas usam largura estreita por defeito.
- O hero e a secção Sobre assumem que `percurso[0]` é a licenciatura.
- Sem testes automáticos.
- `sitemap.ts` tem data fixa de actualização, que tem de ser mantida à mão.
