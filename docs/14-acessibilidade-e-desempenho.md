# 14. Acessibilidade e desempenho

## Acessibilidade (alvo: WCAG 2.2 nível AA)

### Já aplicado

| Prática | Onde |
|---|---|
| `lang="pt-AO"` no `<html>` | `layout.tsx` |
| Ligação "Saltar para o conteúdo" | `layout.tsx` (visível ao focar com Tab) |
| Landmarks: `header`, `nav` (com `aria-label`), `main#conteudo`, `footer` | Layout e componentes |
| Um `h1` por página e hierarquia de títulos | Todas as páginas |
| Foco visível (`:focus-visible`, contorno verde) | `globals.css` |
| Contrastes AA verificados | Ver [09](09-sistema-de-design.md) |
| `aria-current="page"` na navegação activa | `Cabecalho.tsx` |
| Menu móvel com `aria-expanded`, `aria-controls` e fecho com Esc | `Cabecalho.tsx` |
| Botões de ícone com `aria-label` (tema, menu) | `AlternadorTema.tsx`, `Cabecalho.tsx` |
| Ícones decorativos com `aria-hidden` | `Icones.tsx` |
| Textos alternativos descritivos nas imagens | Cartões, Sobre, detalhe |
| Formulário com `label`, `role="alert"` e `role="status"` | `FormularioContacto.tsx` |
| Respeito por `prefers-reduced-motion` | `globals.css` |
| Alvos de toque de pelo menos 36 a 44 px | `Botao` |
| Conteúdo decorativo escondido dos leitores de ecrã (cartão de código) | `CartaoCodigo.tsx` |

### Regras ao alterar o site

- Nunca usar só a cor para transmitir informação (o estado do projecto tem ponto **e** texto).
- Manter contraste mínimo de 4,5:1 no texto normal e 3:1 no texto grande.
- Todo o elemento clicável tem de ser alcançável e utilizável por teclado.
- Imagens informativas: `alt` descritivo. Decorativas: `alt=""` ou `aria-hidden`.
- Não remover o contorno de foco.

### Como verificar

- Navegar o site só com o teclado (Tab, Shift+Tab, Enter, Esc).
- Lighthouse (Chrome DevTools) > Accessibility: objectivo 95 ou mais.
- Extensão axe DevTools.
- Leitor de ecrã (NVDA no Windows, VoiceOver no macOS/iOS) numa passagem rápida.
- Zoom a 200 % e largura de 320 px: sem perda de conteúdo nem scroll horizontal.

## Desempenho (Core Web Vitals)

### Já aplicado

| Prática | Efeito |
|---|---|
| Páginas pré-renderizadas no build | HTML pronto, TTFB baixo |
| Poucas dependências (só Next e React) | Menos JavaScript |
| Poucos Client Components (só onde há interacção) | Menos hidratação |
| `next/font` com `display: swap` | Sem bloqueio por fontes, sem pedidos externos em runtime |
| `next/image` com AVIF/WebP, `sizes` e carregamento preguiçoso | Imagens leves |
| `priority` na imagem principal de Sobre e de detalhe | Melhor LCP |
| Fundo do hero em SVG (cerca de 55 KB) | Nítido em qualquer ecrã e leve |
| Animações só com `transform` e `opacity` | Sem reflow |
| Script do tema inline e mínimo | Sem flash, sem espera |
| `compress: true`, `poweredByHeader: false` | Menos bytes e menos exposição |

### Metas

| Métrica | Meta |
|---|---|
| LCP | menos de 2,5 s |
| INP | menos de 200 ms |
| CLS | menos de 0,1 |
| Lighthouse Performance (móvel) | 90 ou mais |

### Cuidados ao evoluir

- Comprimir as imagens reais antes de as colocar (ver [11](11-imagens-e-ficheiros-estaticos.md)).
- Evitar bibliotecas pesadas de animação, carrosséis ou ícones. Se for preciso um ícone novo, acrescentar um SVG inline ao `Icones.tsx`.
- Se acrescentares um script de análise (Analytics), carregá-lo com `next/script` e `strategy="afterInteractive"`.
- Não pôr imagens grandes acima da dobra sem `priority`.
- Medir antes e depois: PageSpeed Insights (<https://pagespeed.web.dev>) em modo móvel, com o site já publicado.

### O que pode afectar o CLS

As imagens de cartões e o cabeçalho têm dimensões reservadas (`aspect-video`, `h-16`). Manter essa prática em qualquer componente novo.
