# 08. Componentes

Todos os componentes estão em `src/componentes/`, organizados por função. Props e comportamento resumidos abaixo; o código tem comentários onde a lógica não é óbvia.

## layout/

| Componente | Tipo | Descrição |
|---|---|---|
| `Cabecalho` | Client | Cabeçalho fixo. Fundo translúcido ao rolar (`useDeteccaoScroll`), ligação activa pela rota (`usePathname`, `aria-current`), menu móvel (fecha com Esc e ao mudar de rota). |
| `Rodape` | Server | Marca, navegação e contactos (com ícones). |
| `AlternadorTema` | Client | Botão sol/lua. Usa `useTema()`. |
| `BarraProgresso` | Client | Linha de 2 px no topo com o progresso de leitura. |

## seccoes/

| Componente | Descrição |
|---|---|
| `Heroi` | Apresentação inicial: etiqueta de localidade, nome (`h1`), cargo, frase, botões, redes, ligação ao currículo, cartão de código e os factos de `perfil.numeros`. Inclui o fundo em `.hero-fundo`. |
| `CartaoCodigo` | Perfil apresentado como objecto TypeScript. Decorativo (`aria-hidden`). Conteúdo fixo no ficheiro. |
| `SobreMim` | Texto curto e lista de factos. |
| `Projectos` | Projectos em destaque (1 grande e os restantes em duas colunas; se o número de restantes for ímpar, o último ocupa a largura toda). |
| `Competencias` | Grelha "bento" de áreas e tecnologias. |
| `Contacto` | Painel final com chamada à acção. |
| `PercursoAcademico` | Linha temporal vertical com `percurso.ts`. |
| `EstudoDeCaso` | Blocos do estudo de caso de um projecto. Cada bloco só aparece se o campo existir. |
| `Reconhecimentos` | Cartões de `reconhecimentos.ts` (página Sobre). Oculto se a lista estiver vazia. |
| `Testemunhos` | Citações de `testemunhos.ts` (página Início). Oculto se a lista estiver vazia. |
| `ListaProjectos` | Lista de `/projectos` com filtro por tecnologia (Client Component). Só oferece tecnologias usadas em 2 ou mais projectos. |
| `FormularioContacto` | Formulário com estados `inactivo`, `a-enviar`, `sucesso`, `erro`. Ver [12](12-formulario-de-contacto.md). |

## ui/

### `Botao` e `LigacaoBotao`

```tsx
<Botao variante="primario" tamanho="md" type="submit">Enviar</Botao>
<LigacaoBotao href="/contacto" variante="secundario">Contacto</LigacaoBotao>
```

- `variante`: `primario` (verde com brilho), `secundario` (contorno), `texto` (sem caixa).
- `tamanho`: `md` (altura 44 px, por defeito) ou `sm` (36 px).
- `LigacaoBotao` usa `next/link` para destinos internos (`/...` ou `#...`) e `<a>` para externos.
- Os botões **não têm setas** por decisão de design.

### `Cartao`

Contentor `.painel`. Com `interactivo`, ganha elevação e contorno ao passar o rato (precisa de um pai com a classe `group`).

### `CartaoProjecto`

```tsx
<CartaoProjecto projecto={p} variante="destaque" limiteTecnologias={3} />
```

- `variante="destaque"`: imagem e texto lado a lado em ecrãs largos.
- `limiteTecnologias`: limita as etiquetas.
- O cartão inteiro é uma ligação para `/projectos/<slug>` com `aria-label`.
- A imagem vem de `/imagens/projectos/<slug>.jpg`.

### `Etiqueta`

Chip em monoespaçada para tecnologias.

### `CabecalhoSeccao`

Cabeçalho de secção com `etiqueta` (em mono, verde), `indice` opcional ("01"), `titulo`, `descricao` e `accao` opcionais. `nivel="h1"` para a primeira secção de uma página; `h2` por defeito.

### `RevelarAoRolar`

```tsx
<RevelarAoRolar atraso={80} className="h-full">...</RevelarAoRolar>
```

Faz o conteúdo surgir (opacidade e deslocamento) quando entra no ecrã, uma só vez. `atraso` em milissegundos serve para escalonar vários itens.

## icones/

- `Icones.tsx`: `IconeSeta`, `IconeEmail`, `IconeVerificar`, `IconeAlerta`, `IconeGitHub`, `IconeLinkedIn` e `IconeRede` (escolhe pelo nome). Herdam a cor (`currentColor`), são decorativos (`aria-hidden`) e aceitam `tamanho`.
- `LogotipoPX.tsx`: monograma do site.

**Regra:** usar ícones só onde ajudam. Antes de acrescentar um, confirmar que o texto sozinho não chega.

## seo/

`DadosEstruturados`: recebe um objecto ou lista de objectos JSON-LD e emite `<script type="application/ld+json">`, escapando `<`.

## Hooks (`src/ganchos/`)

| Hook | Descrição |
|---|---|
| `useNoEcra(limiar = 0.15)` | Devolve `{ referencia, emVista }`. Fica `true` quando o elemento entra no ecrã pela primeira vez. |
| `useDeteccaoScroll(limite = 8)` | Devolve `true` depois de rolar mais que `limite` píxeis. |

## Contexto (`src/contextos/`)

`ContextoTema` exporta `FornecedorTema`, `useTema()` (devolve `{ tema, alternarTema }`) e `scriptTemaInicial`. Ver [10](10-tema-claro-escuro.md).

## Utilitários (`src/utilitarios/`)

| Ficheiro | Função |
|---|---|
| `juntarClasses` | Junta classes CSS ignorando valores falsos. |
| `rotularEstado` | Rótulo e cor do estado de um projecto. |
| `rotularTipoEtapa` | Rótulo e cor do tipo de etapa do percurso. |
| `seo` | `urlSite`, `urlAbsoluta`, `criarMetadata`, `dadosPessoa`, `dadosSite`, `dadosMigalhas`. |
| `imagemSocial` | `criarImagemSocial` gera as imagens Open Graph/Twitter. |
