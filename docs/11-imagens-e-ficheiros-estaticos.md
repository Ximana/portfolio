# 11. Imagens e ficheiros estáticos

Tudo o que está em `public/` é servido na raiz do site (`public/imagens/perfil/perfil.jpg` fica em `/imagens/perfil/perfil.jpg`).

## Inventário

| Ficheiro | Dimensões | Onde aparece | Estado |
|---|---|---|---|
| `public/imagens/perfil/perfil.jpg` | 800x800 (quadrada) | Página Sobre, JSON-LD (`Person.image`) | **Placeholder** |
| `public/imagens/projectos/pulmovision.jpg` | 1200x675 (16:9) | Cartão e detalhe | **Placeholder** |
| `public/imagens/projectos/quanta-learn.jpg` | 1200x675 | Cartão e detalhe | **Placeholder** |
| `public/imagens/projectos/hadoop-saude-angola.jpg` | 1200x675 | Cartão e detalhe | **Placeholder** |
| `public/imagens/projectos/medinova.jpg` | 1200x675 | Cartão e detalhe | **Placeholder** |
| `public/imagens/projectos/rzn-app.jpg` | 1200x675 | Cartão e detalhe | **Placeholder** |
| `public/imagens/projectos/okuyeva.jpg` | 1200x675 | Cartão e detalhe | **Placeholder** |
| `public/imagens/hero/fundo-hero.svg` | vectorial (1600x900) | Fundo do hero | Definitivo |
| `public/imagens/logotipos/` | livre | Logótipos de projectos ou parceiros | Vazia |
| `public/ficheiros/` | n/a | CV e documentos descarregáveis | Vazia |

## Substituir uma imagem

Manter o **mesmo nome de ficheiro** e, idealmente, as mesmas dimensões. Não é preciso alterar código.

Recomendações:

- Formato JPG para fotografias e capturas de ecrã; PNG só se precisar de transparência.
- Peso: até ~300 KB por imagem (o Next.js converte para AVIF/WebP e redimensiona, mas parte de um original leve).
- Capturas de ecrã: mostrar o produto real, sem dados pessoais visíveis.
- Fotografia de perfil: rosto bem enquadrado ao centro, fundo simples, boa luz.

## Adicionar imagem de um projecto novo

Criar `public/imagens/projectos/<slug>.jpg` (1200x675), com o mesmo `slug` do projecto em `src/dados/projectos.ts`. Os componentes procuram a imagem por esse nome.

## Como as imagens são carregadas

- `next/image` (componentes `CartaoProjecto` e páginas) redimensiona, converte para AVIF/WebP (`next.config.mjs`) e faz carregamento preguiçoso.
- O detalhe de projecto e a página Sobre usam `priority` na imagem principal (melhora o LCP).
- O fundo do hero é aplicado por CSS (`.hero-fundo`) e não passa pelo `next/image`.

## Fundo do hero

`fundo-hero.svg` foi desenhado com circuitos finos e uma matriz de pontos. Para substituir por outra imagem, trocar o ficheiro (mesmo nome) ou alterar o `url(...)` em `.hero-fundo` no `globals.css`. Manter a imagem discreta: o texto do hero tem de continuar legível.

## Ícones do site

- `src/app/icon.tsx` e `src/app/apple-icon.tsx` geram o favicon e o ícone Apple a partir do monograma "PX".
- Para usar imagens próprias, substituir esses ficheiros por `icon.png` / `apple-icon.png` na mesma pasta.
- O `manifest.ts` referencia `/icon` e `/apple-icon`.

## CV para descarregar

O PDF está em `public/ficheiros/cv-paulo-ximana.pdf` e é referenciado por `perfil.cv` (botões no herói, Sobre e Contacto). Para o actualizar: corrigir os dados, abrir `/cv`, imprimir e Guardar como PDF (A4, com gráficos de fundo), e substituir o ficheiro com o mesmo nome.

## Imagens geradas

A fotografia de perfil e as capas dos projectos incluídas são ilustrações geradas (marcadas internamente com `px-gerado`). Substituir por fotografia e capturas reais com o mesmo nome. Depois de substituídas, `npm run verificar-conteudo` deixa de as listar.

## Imagens remotas

Se um dia usares imagens de outro domínio, autorizá-lo em `images.remotePatterns` no `next.config.mjs`.
