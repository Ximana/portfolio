# 04. Conteúdo e dados

Todo o conteúdo do site está em `src/dados/`. Editar estes ficheiros actualiza o site inteiro (páginas, metadados, SEO, rodapé, sitemap), sem tocar nos componentes. Os tipos estão em `src/tipos/index.ts`; o TypeScript avisa se faltar algum campo.

## perfil.ts

Objecto `perfil` do tipo `Perfil`.

| Campo | Tipo | Onde aparece |
|---|---|---|
| `nome` | texto | Hero, cabeçalho, rodapé, títulos, JSON-LD |
| `cargo` | texto | Subtítulo do hero, rodapé, página Sobre |
| `localidade` | texto | Etiqueta do hero, cartão de código, rodapé, JSON-LD |
| `frase` | texto | Parágrafo de apresentação no hero |
| `descricaoSeo` | texto (até ~160 caracteres) | Meta description, Open Graph, manifest |
| `palavrasChave` | lista de texto | Meta keywords |
| `instituicao` | texto | JSON-LD (`alumniOf`) |
| `bioResumida` | texto | Secção Sobre da página inicial |
| `bioCompleta` | lista de parágrafos | Página Sobre (o 1.º parágrafo é destacado) |
| `email` | texto | Botões, rodapé, contacto, JSON-LD |
| `redesSociais` | lista de `{ nome, url, identificador }` | Hero, rodapé, contacto, JSON-LD (`sameAs`) |
| `disponibilidade` | texto | Painel de contacto, página Sobre, página Contacto |

Notas:
- `redesSociais[].nome` deve ser exactamente `GitHub` ou `LinkedIn` para o ícone aparecer (ver `IconeRede` em `componentes/icones/Icones.tsx`). Outros nomes aparecem só com texto.
- `descricaoSeo` não deve passar de ~160 caracteres, senão o Google corta-a nos resultados.

## projectos.ts

Lista `projectos` de objectos `Projecto`.

| Campo | Tipo | Notas |
|---|---|---|
| `slug` | texto | Identificador na URL (`/projectos/<slug>`) e nome da imagem. Minúsculas, sem espaços, único. |
| `nome` | texto | Título do projecto |
| `resumo` | texto | Frase curta (cartões, descrição SEO) |
| `descricao` | lista de parágrafos | Página de detalhe (o 1.º é destacado) |
| `papel` | texto | Ex.: "Fundador & desenvolvedor full-stack" |
| `tecnologias` | lista de texto | Etiquetas no cartão e no detalhe |
| `estado` | `"em-desenvolvimento"` \| `"concluido"` \| `"pausado"` | Ponto de cor e rótulo |
| `destaque` | boolean | Se `true`, aparece na página inicial |
| `url` | texto (opcional) | Botão "Ver site" |
| `urlCodigo` | texto (opcional) | Botão "Ver código" |

### Adicionar um projecto

1. Acrescentar um objecto à lista em `projectos.ts`.
2. Criar a imagem `public/imagens/projectos/<slug>.jpg` (1200x675).
3. Pronto: o projecto aparece na lista, tem página própria, entra no sitemap e ganha imagem de partilha automática.

### Layout dos destacados na página inicial

O **primeiro** projecto com `destaque: true` aparece em grande (imagem e texto lado a lado); os seguintes em cartões de duas colunas. A ordem da lista define a ordem no site.

## competencias.ts

Lista `gruposCompetencias` de `{ area, itens[] }`. As cinco primeiras áreas ocupam uma grelha "bento" fixa (duas largas e três estreitas, em `componentes/seccoes/Competencias.tsx`); áreas adicionais usam largura estreita. Os itens alimentam também o `knowsAbout` do JSON-LD.

## percurso.ts

Lista `percurso` de `EtapaPercurso`.

| Campo | Notas |
|---|---|
| `periodo` | Texto livre (ex.: "2021 a 2026", "Em curso") |
| `titulo` | Ex.: "Licenciatura em Ciências da Computação" |
| `instituicao` | Entidade |
| `descricao` | Texto curto |
| `tipo` | `"academico"` ou `"profissional"` (cor do ponto na linha temporal) |

**Atenção:** o primeiro item (`percurso[0]`) é usado no hero (número "2021 a 2026" e legenda) e nos factos da secção Sobre. Mantém a formação em primeiro lugar, ou ajusta esses componentes.

## Textos que não estão em `dados/`

Alguns textos são escritos directamente nos componentes e precisam de edição manual:

| Texto | Ficheiro |
|---|---|
| Títulos e descrições das secções (ex.: "Trabalho seleccionado") | `componentes/seccoes/*.tsx` |
| Conteúdo do cartão de código do hero (`funcao`, `fundador`, `stack`...) | `componentes/seccoes/CartaoCodigo.tsx` |
| Factos da secção Sobre ("Fundador: QUANTA") | `componentes/seccoes/SobreMim.tsx` |
| Título e descrições das páginas (SEO) | `export const metadata` em cada `page.tsx` |
| Copy do painel final ("Vamos construir algo juntos?") | `componentes/seccoes/Contacto.tsx` |

## Regras de escrita

- Português de Angola/Portugal, consistente com o resto do site ("projecto", "actualizar", "contacto").
- Não usar o travessão longo. Usar vírgulas, dois pontos ou parênteses.
- Frases curtas, factos verificáveis, sem exageros.

## Estudo de caso, factos, reconhecimentos e testemunhos

- `perfil.numeros`: factos mostrados no herói (usar apenas factos verificáveis, não números de vaidade). `perfil.cv`: ficheiro do currículo.
- `projectos.ts`, campos opcionais: `objectivo`, `solucao`, `funcionalidades[]`, `decisoesTecnicas[]`, `desafios[]`, `resultados[]` (`{ valor, rotulo }`, só com dados reais).
- `reconhecimentos.ts`: `{ titulo, descricao, projecto? }`.
- `testemunhos.ts`: `{ texto, autor, funcao, organizacao? }`. Vazio por omissão: a secção não aparece até haver um testemunho real autorizado.
- `npm run verificar-conteudo` lista o que falta preencher ou substituir antes de publicar.
