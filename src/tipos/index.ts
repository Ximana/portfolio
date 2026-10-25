export interface RedeSocial {
  nome: string;
  url: string;
  identificador: string;
}

export interface Perfil {
  nome: string;
  cargo: string;
  localidade: string;
  frase: string;
  bioResumida: string;
  /** Descrição curta (até ~160 caracteres) usada nos resultados de pesquisa. */
  descricaoSeo: string;
  /** Termos pelos quais o site deve ser encontrado. */
  palavrasChave: string[];
  /** Instituição de ensino onde se licenciou. */
  instituicao: string;
  bioCompleta: string[];
  email: string;
  redesSociais: RedeSocial[];
  disponibilidade: string;
  /** Factos de destaque mostrados no hero (valores reais e verificáveis). */
  numeros: NumeroDestaque[];
  /** Currículo para descarregar (ficheiro em public/ficheiros). */
  cv?: { url: string; nome: string };
}

export interface NumeroDestaque {
  valor: string;
  rotulo: string;
}

export type EstadoProjecto = "em-desenvolvimento" | "concluido" | "pausado";

/** Grupo temático de funcionalidades (ex.: "Gamificação", "Comunidade"). */
export interface GrupoFuncionalidades {
  titulo: string;
  itens: string[];
}

/** Tabela de dados de um projecto (métricas, análises...). */
export interface TabelaProjecto {
  titulo: string;
  colunas: string[];
  linhas: string[][];
}

/** Valor numérico de um gráfico. `texto` substitui a formatação automática (ex.: "~31 mil"). */
export interface DadoGrafico {
  rotulo: string;
  valor: number;
  texto?: string;
}

/**
 * Gráfico de um projecto, desenhado em HTML/SVG (sem bibliotecas).
 * - "barras": barras horizontais, uma por dado (usa `dados`).
 * - "agrupadas": várias séries por grupo (usa `series` e `grupos`).
 * - "donut": proporções de um todo, com valor ao centro (usa `dados` e `centro`).
 * - "empilhada": uma só barra dividida em partes (usa `dados`).
 * Só com valores reais e verificáveis.
 */
export interface GraficoProjecto {
  tipo: "barras" | "agrupadas" | "donut" | "empilhada";
  titulo: string;
  /** Legenda curta por baixo do gráfico (fonte, unidade, ressalvas). */
  nota?: string;
  /** Unidade acrescentada aos valores (ex.: "%", "km/h"). */
  unidade?: string;
  /** Valor que corresponde a 100 % da largura das barras. Por omissão, o maior valor. */
  maximo?: number;
  dados?: DadoGrafico[];
  series?: string[];
  grupos?: { rotulo: string; valores: number[] }[];
  centro?: NumeroDestaque;
}

/** Sequência de passos (fluxo de dados, pipeline, níveis de progressão...). */
export interface FluxoProjecto {
  titulo: string;
  passos: { rotulo: string; detalhe?: string }[];
}

export interface Projecto {
  slug: string;
  nome: string;
  resumo: string;
  descricao: string[];
  papel: string;
  tecnologias: string[];
  estado: EstadoProjecto;
  destaque: boolean;
  /** Imagem de capa (em public/). Por omissão: /imagens/projectos/<slug>.jpg. */
  imagem?: string;
  url?: string;
  urlCodigo?: string;
  /** Campos do estudo de caso. Todos opcionais: só aparecem se preenchidos. */
  objectivo?: string;
  solucao?: string;
  funcionalidades?: string[];
  decisoesTecnicas?: string[];
  desafios?: string[];
  /** Resultados mensuráveis (utilizadores, precisão, tempo poupado...). Só com dados reais. */
  resultados?: NumeroDestaque[];
  /** Factos de dimensão do projecto (linhas de código, ecrãs, módulos...). Só valores verificáveis. */
  numeros?: NumeroDestaque[];
  /** Problemas que o projecto resolve. */
  problema?: string[];
  /** Funcionalidades agrupadas por tema. Quando existe, substitui `funcionalidades` na página. */
  gruposFuncionalidades?: GrupoFuncionalidades[];
  /** Fluxos visuais (arquitectura, pipeline, níveis...). */
  fluxos?: FluxoProjecto[];
  /** Evolução prevista do projecto. */
  proximosPassos?: string[];
  /** Aviso de uso responsável, mostrado em destaque no topo do estudo de caso. */
  aviso?: string;
  /** Notas curtas junto dos gráficos e tabelas. */
  notasResultados?: string[];
  /** Gráficos de dados. */
  graficos?: GraficoProjecto[];
  /** Tabelas de dados. */
  tabelas?: TabelaProjecto[];
  /** Contexto do projecto (ex.: hackathon, promotor, resultado), como pares rótulo/valor. */
  contexto?: { titulo: string; itens: { rotulo: string; valor: string }[] };
  /** Descrição de como o projecto foi demonstrado. */
  demonstracao?: string;
  /** Limitações conhecidas do projecto (honestidade sobre o alcance). */
  limitacoes?: string[];
}

export interface Reconhecimento {
  titulo: string;
  descricao: string;
  /** Slug do projecto relacionado, se existir. */
  projecto?: string;
}

export interface Testemunho {
  texto: string;
  autor: string;
  funcao: string;
  organizacao?: string;
}

export interface GrupoCompetencias {
  area: string;
  itens: string[];
}

export type TipoEtapa = "academico" | "profissional";

export interface EtapaPercurso {
  periodo: string;
  titulo: string;
  instituicao: string;
  descricao: string;
  tipo: TipoEtapa;
}

export type Tema = "claro" | "escuro";
