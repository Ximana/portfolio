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

export interface Projecto {
  slug: string;
  nome: string;
  resumo: string;
  descricao: string[];
  papel: string;
  tecnologias: string[];
  estado: EstadoProjecto;
  destaque: boolean;
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
