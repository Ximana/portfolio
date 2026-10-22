# 09. Sistema de design

Direcção visual: **sóbria, técnica e elegante**. Fundo escuro com grelha subtil, um único verde de destaque, tipografia forte, cartões com contorno fino e muito espaço em branco. Pouca decoração, poucos ícones.

## Cores (tokens)

Definidas como variáveis CSS em `src/app/globals.css` (formato `R G B`, para suportar opacidade) e expostas ao Tailwind em `tailwind.config.ts`.

| Token (classe) | Uso | Escuro | Claro |
|---|---|---|---|
| `fundo` | Fundo da página | `#0A0D0E` | `#F7F8F6` |
| `superficie` | Cartões e painéis | `#111617` | `#FFFFFF` |
| `linha` | Contornos e divisores | `#242C2D` | `#DEE3E0` |
| `marfim` | Texto principal | `#ECEFEC` | `#101618` |
| `esbatido` | Texto secundário | `#8F9996` | `#545E5B` |
| `jade` | Cor de destaque, ligações, botão primário | `#48C49A` | `#0E7A5B` |
| `jade-escuro` | Hover do botão primário | `#36A880` | `#0A644A` |
| `ouro` | Acento raro (strings no código, avisos) | `#E0BA64` | `#96680A` |

Exemplos de uso: `text-marfim`, `bg-superficie`, `border-linha`, `bg-jade/10` (com opacidade).

### Contraste (WCAG)

| Par | Escuro | Claro |
|---|---|---|
| `marfim` sobre `fundo` | 16,8:1 | 17,1:1 |
| `esbatido` sobre `fundo` | 6,7:1 | 6,3:1 |
| `esbatido` sobre `superficie` | 6,2:1 | 6,7:1 |
| `jade` sobre `fundo` | 9,0:1 | 5,0:1 |
| Texto do botão primário (`fundo` sobre `jade`) | 9,0:1 | 5,0:1 |

Todos cumprem o mínimo AA (4,5:1) para texto normal. Ao alterar cores, voltar a verificar com um verificador de contraste.

## Tipografia

Definida em `src/estilos/tipografia.ts` (via `next/font/google`, auto-alojada pelo Next.js).

| Família | Uso | Classe |
|---|---|---|
| Inter | Texto e títulos | `font-texto` / `font-display` (iguais) |
| JetBrains Mono | Etiquetas, números, código | `font-mono` |

Títulos (`h1` a `h4`) recebem automaticamente `tracking-tight` e `text-wrap: balance` (em `@layer base`).

Escala usada:

| Elemento | Classes |
|---|---|
| `h1` do hero | `text-5xl sm:text-6xl lg:text-7xl font-semibold` |
| `h1` de página | `text-4xl md:text-5xl font-semibold` |
| `h2` de secção | `text-3xl md:text-4xl font-semibold` |
| Lead / introdução | `text-lg` a `text-xl`, `leading-8` |
| Corpo | `text-base leading-7` |
| Etiqueta técnica | `.etiqueta-mono` (mono, 12 px, maiúsculas, espaçada, verde) |

## Espaçamento e layout

- Largura máxima: `max-w-6xl` (1152 px) com margens laterais de 24 px (`px-6`) e 32 px a partir de `md`. Tudo via classe `.contentor`.
- Espaçamento vertical entre secções: `py-16 md:py-24`.
- Largura de leitura de texto longo: `max-w-conteudo` (65 caracteres).
- Grelhas: `gap-4` a `gap-6` entre cartões; `gap-12` a `gap-20` entre colunas principais.
- Mobile first: o layout base é uma coluna; colunas múltiplas entram em `md`/`lg`.

## Superfícies e formas

| Elemento | Estilo |
|---|---|
| Cartão/painel (`.painel`) | `rounded-2xl`, contorno `linha`, fundo `superficie`, sombra `shadow-cartao` |
| Botões, campos | `rounded-lg` |
| Etiquetas | `rounded-md`, contorno `linha` |
| Pílula de localidade | `rounded-full` |

Sombras personalizadas em `tailwind.config.ts`: `shadow-cartao` (cartões) e `shadow-brilho` (botão primário).

## Fundo

- `body::before`: grelha técnica de 64 px, com opacidade 4,5 %, esbatida por máscara radial (mais visível no topo).
- `body::after`: brilho verde suave no canto superior direito.
- Hero: `.hero-fundo` aplica `public/imagens/hero/fundo-hero.svg` com máscara que esbate à esquerda e em baixo, e opacidade reduzida em ecrãs pequenos.

## Movimento

| Efeito | Onde | Como |
|---|---|---|
| Entrada do hero | `.entrada-heroi` | Animação CSS `entrada-heroi`, atrasos via `--atraso-entrada` |
| Revelação ao rolar | `RevelarAoRolar` | `IntersectionObserver`, uma só vez |
| Hover de cartões | `Cartao interactivo` | Elevação de 2 px e contorno verde |
| Cursor do cartão de código | `animate-cursor` | Keyframes `cursor` em `tailwind.config.ts` |
| Mudança de tema | `.tema-transicao` | Transição de 0,3 s só durante a troca |

**Movimento reduzido:** `@media (prefers-reduced-motion: reduce)` em `globals.css` desliga animações e transições para quem o pede.

## Ícones

Princípio: **só onde ajudam**. Usados em redes sociais (GitHub, LinkedIn), email, estados do formulário, tema, menu e setas de navegação. Não usar ícones decorativos em títulos, cartões de competências ou etiquetas. Ver `componentes/icones/Icones.tsx`.

## Estados de interacção

- **Foco:** contorno verde de 2 px com afastamento (`:focus-visible` global). Nunca remover.
- **Hover:** mudança de cor de texto ou contorno, nunca só de cor de fundo muito subtil.
- **Desactivado:** `opacity-60` e cursor `not-allowed`.

## Como alterar o visual

- Trocar a cor de destaque: mudar `--cor-jade` e `--cor-jade-escuro` nos dois temas em `globals.css`.
- Trocar fontes: editar `tipografia.ts` (e, se for outra família, a variável em `tailwind.config.ts`).
- Mudar a largura do site: alterar `max-w-6xl` na classe `.contentor`.
- Mudar o arredondamento: ajustar `.painel` em `globals.css`.
