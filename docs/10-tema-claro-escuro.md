# 10. Tema claro e escuro

## Como funciona

1. As cores são variáveis CSS. O tema claro está em `:root`; o escuro em `html.dark` (ambos em `src/app/globals.css`). O Tailwind usa `darkMode: "class"`.
2. Antes da primeira pintura, um pequeno script inline (`scriptTemaInicial`, exportado por `src/contextos/ContextoTema.tsx` e injectado no `<head>` do `layout.tsx`) decide o tema e põe ou tira a classe `dark` no `<html>`. Isto evita o "flash" de tema errado.
3. O `FornecedorTema` lê o estado já aplicado e expõe `tema` e `alternarTema()` através de `useTema()`.
4. O `AlternadorTema` (botão sol/lua) chama `alternarTema()`.

## Regra de decisão do tema inicial

1. Se houver escolha guardada em `localStorage` (chave `px-tema`, valores `claro` ou `escuro`), usa-a.
2. Senão, segue a preferência do sistema (`prefers-color-scheme: light` dá claro; o resto dá escuro).
3. Se o `localStorage` estiver bloqueado, o script aplica o escuro e o site continua a funcionar.

## Transição suave

Ao alternar, o `<html>` recebe a classe `tema-transicao` durante 350 ms; as regras em `globals.css` animam cor de fundo, texto, contornos, `fill` e `stroke` nesse intervalo. Fora desse intervalo não há transições globais (não penalizam o desempenho).

## Como adicionar ou ajustar cores

1. Acrescentar a variável nos **dois** blocos (`:root` e `html.dark`) em `globals.css`.
2. Mapeá-la em `tailwind.config.ts`, em `theme.extend.colors`:

   ```ts
   nova: "rgb(var(--cor-nova) / <alpha-value>)",
   ```

3. Usar `bg-nova`, `text-nova`, `border-nova`, com opacidade se for preciso (`bg-nova/20`).

Nunca usar cores fixas (`text-white`, `#fff`) nos componentes: quebram um dos temas.

## Casos especiais

- **Imagens de substituição** dos projectos são escuras nos dois temas. Imagens reais devem funcionar em ambos.
- **`fundo-hero.svg`** usa um verde de tom médio e a opacidade é ajustada por tema (`opacity-*` e `dark:opacity-*` em `Heroi.tsx`).
- **Imagens de partilha** (Open Graph) são sempre escuras, independentemente do tema do visitante.
- **`themeColor`** no `viewport` do `layout.tsx` define a cor da barra do navegador em cada esquema.

## Testar

- Alternar o botão e recarregar a página: a escolha deve manter-se, sem piscar.
- Apagar `px-tema` no `localStorage` e mudar o tema do sistema operativo: o site deve acompanhar.
- Verificar contraste e legibilidade das duas versões em todas as páginas.
