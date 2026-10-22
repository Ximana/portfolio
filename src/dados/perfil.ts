import type { Perfil } from "@/tipos";

/**
 * Dados centrais do perfil. Alterar aqui reflecte-se em todo o site
 * (herói, metadados, rodapé, página "Sobre", etc.).
 */
export const perfil: Perfil = {
  nome: "Paulo Ximana",
  cargo: "Licenciado em Ciências da Computação e Desenvolvedor Full-Stack",
  localidade: "Luanda, Angola",
  frase: "Construo produtos digitais de ponta a ponta, da interface ao modelo por detrás dela.",
  descricaoSeo:
    "Licenciado em Ciências da Computação e desenvolvedor full-stack em Luanda, Angola. Fundador da QUANTA: produtos com inteligência artificial, saúde e educação.",
  palavrasChave: [
    "Paulo Ximana",
    "desenvolvedor full-stack Angola",
    "programador Luanda",
    "licenciado em Ciências da Computação",
    "engenheiro de software Angola",
    "inteligência artificial Angola",
    "deep learning",
    "Next.js",
    "Django",
    "QUANTA",
    "PulmoVision",
    "QUANTA Learn",
  ],
  instituicao: "Instituto Superior Politécnico Metropolitano de Angola",
  bioResumida:
    "Licenciado em Ciências da Computação e desenvolvedor full-stack, fundador da QUANTA, onde construo produtos que cruzam engenharia de software com inteligência artificial aplicada a problemas reais em Angola, da saúde à educação.",
  bioCompleta: [
    "Sou licenciado em Ciências da Computação pelo Instituto Superior Politécnico Metropolitano de Angola (2021 a 2026) e desenvolvedor full-stack. Trabalho principalmente com Next.js, React e Django, e tenho vindo a aprofundar a aplicação prática de inteligência artificial em produtos com utilidade concreta.",
    "Sou fundador da QUANTA, uma startup onde desenvolvo dois projectos principais: a PulmoVision, uma plataforma de deep learning para detecção de doenças pulmonares a partir de radiografias do tórax, e a QUANTA Learn, uma plataforma de aprendizagem de inglês. A PulmoVision é também o tema do meu trabalho de conclusão de curso.",
    "Para além do trabalho na QUANTA, actuo como desenvolvedor backend e analista de dados em regime freelance, e mantenho-me envolvido noutros projectos, do reconhecimento de Língua de Sinais Angolana à construção de aplicações móveis.",
  ],
  email: "pauloximana@gmail.com",
  redesSociais: [
    { nome: "GitHub", url: "https://github.com/Ximana", identificador: "@ximana" },
    { nome: "LinkedIn", url: "https://linkedin.com/in/paulo-ximana", identificador: "Paulo Ximana" },
  ],
  disponibilidade: "Aberto a colaborações e oportunidades freelance",
  numeros: [
    { valor: "2", rotulo: "Produtos próprios na QUANTA" },
    { valor: "2021 a 2026", rotulo: "Licenciatura em Ciências da Computação" },
    { valor: "LISPA", rotulo: "Programa de aceleração Jumpstart (PulmoVision)" },
  ],
  cv: { url: "/ficheiros/cv-paulo-ximana.pdf", nome: "cv-paulo-ximana.pdf" },
};
