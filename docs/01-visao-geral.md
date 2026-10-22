# 01. Visão geral

## O que é

Site pessoal e portfólio de **Paulo Ximana**, licenciado em Ciências da Computação e desenvolvedor full-stack em Luanda, Angola, fundador da QUANTA. O site apresenta o perfil profissional, os projectos (PulmoVision, QUANTA Learn, Zero Barreiras, RecrutaApp), as competências técnicas e um formulário de contacto.

## Objectivos

- Apresentar o trabalho e o percurso de forma clara, moderna e profissional.
- Ser encontrado nos motores de pesquisa (Google, Bing e outros).
- Ser rápido, acessível e utilizável em qualquer dispositivo.
- Ser fácil de actualizar: todo o conteúdo está em ficheiros de dados, sem tocar nos componentes.

## Tecnologias

| Área | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | 16.4.2 |
| UI | React | 19.1.10 |
| Linguagem | TypeScript (modo `strict`) | 5.5.3 |
| Estilos | Tailwind CSS | 3.4.6 |
| Pós-processamento CSS | PostCSS + Autoprefixer | 8.5.31 / 10.4.19 |
| Lint | ESLint (formato flat, `eslint-config-next/core-web-vitals`) | 9.39.5 |
| Fontes | Inter e JetBrains Mono via `next/font/google` | n/a |

Não há base de dados, nem servidor próprio, nem API própria. O formulário de contacto usa o serviço externo Formspree.

## Funcionalidades

- Páginas: Início, Sobre, Projectos (lista e detalhe de cada projecto), Contacto e 404.
- Tema claro e escuro, com escolha guardada e sem "flash" no carregamento.
- Cabeçalho fixo com navegação activa e menu móvel.
- Hero com imagem de fundo vectorial e cartão de código com o perfil.
- Animações de entrada e de revelação ao rolar, com respeito por `prefers-reduced-motion`.
- SEO completo: metadados, dados estruturados (JSON-LD), sitemap, robots, manifest e imagens de partilha geradas automaticamente.
- Formulário de contacto com protecção anti-spam e estados de sucesso e erro.

## Princípios de design

1. Poucos ícones, só onde ajudam (redes sociais, email, estados do formulário, tema, menu, setas de navegação).
2. Hierarquia tipográfica forte, muito espaço em branco, cor de destaque única.
3. Conteúdo separado da apresentação (`src/dados/`).
4. Acessibilidade como requisito, não como extra.

## Estado actual

O código está completo. Faltam os conteúdos reais que só o autor pode fornecer: fotografia de perfil, capturas de ecrã dos projectos, CV, domínio e identificador do Formspree. Ver [20](20-roteiro-e-melhorias.md).
