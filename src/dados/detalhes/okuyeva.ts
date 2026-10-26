import type { Projecto } from "@/tipos";

/**
 * Okuyeva: tradutor de Língua Gestual Angolana (LGA) para texto, em tempo real.
 * Desenvolvido no Hackathon Zero Barreiras (UNFPA / Acelera Angola), 2.º lugar.
 */
export const okuyeva: Projecto = {
  slug: "okuyeva",
  nome: "Okuyeva",
  resumo:
    "Tradutor de Língua Gestual Angolana para texto, em tempo real, para um atendimento inclusivo em saúde sexual e reprodutiva a pessoas surdas.",
  descricao: [
    "O Okuyeva é um protótipo que usa visão computacional e IA para traduzir gestos da Língua Gestual Angolana em texto, para que uma pessoa surda comunique directamente com o profissional de saúde, sem precisar de um familiar como intérprete.",
    "Foi desenvolvido no Hackathon Zero Barreiras, promovido pelo UNFPA e organizado pela Acelera Angola. A nossa equipa de 10 pessoas ficou em 2.º lugar.",
  ],
  papel: "Desenvolvedor, numa equipa de 10 pessoas",
  tecnologias: ["Python", "MediaPipe", "PyTorch", "OpenCV", "FastAPI", "React"],
  estado: "concluido",
  destaque: true,
  // Ligações opcionais (só aparecem os botões que tiverem valor; apague o "//" para activar):
  // url: "https://endereco-do-projecto-online",
  // urlCodigo: "https://github.com/utilizador/repositorio",

  contexto: {
    titulo: "O hackathon",
    itens: [
      { rotulo: "Evento", valor: "Hackathon Zero Barreiras, promovido pelo UNFPA e organizado pela Acelera Angola" },
      { rotulo: "Desafio", valor: "Atendimento inclusivo em saúde sexual e reprodutiva para pessoas com deficiência" },
      { rotulo: "Resultado", valor: "2.º lugar, numa equipa de 10 pessoas" },
    ],
  },

  numeros: [
    { valor: "30", rotulo: "Gestos clínicos reconhecidos" },
    { valor: "30", rotulo: "Imagens por janela de gesto" },
    { valor: "258", rotulo: "Características usadas no treino final" },
  ],

  objectivo:
    "Eliminar a barreira de comunicação entre pessoas surdas e profissionais de saúde, com privacidade e dignidade.",
  solucao:
    "Uma aplicação web que reconhece os gestos da paciente através da câmara e mostra a palavra correspondente em texto, com o nível de confiança.",
  problema: [
    "Pessoas surdas dependem muitas vezes de um familiar para traduzir e perdem a privacidade em temas íntimos.",
    "Há poucos intérpretes de Língua Gestual Angolana nas unidades de saúde.",
  ],

  fluxos: [
    {
      titulo: "Do gesto ao texto",
      passos: [
        { rotulo: "Câmara", detalhe: "Vídeo em directo, processado localmente" },
        { rotulo: "MediaPipe", detalhe: "Pontos do corpo e das mãos" },
        { rotulo: "Modelo LSTM", detalhe: "Classifica a sequência de 30 imagens" },
        { rotulo: "Texto", detalhe: "Palavra e confiança no ecrã" },
      ],
    },
  ],

  demonstracao:
    "O pitch encenou uma consulta em palco: o médico de um lado, a paciente surda do outro e o ecrã a mostrar, em tempo real, cada palavra reconhecida.",

  funcionalidades: [
    "Tradução de gestos com percentagem de confiança",
    "Vídeo em directo com os pontos do corpo e das mãos desenhados",
    "Interface em português com tutorial de 3 passos",
  ],

  decisoesTecnicas: [
    "Modelo pequeno, de propósito para não sobreajustar com poucos exemplos por gesto",
    "Aumento de dados para compensar a falta de gravações",
    "Processamento local: as imagens não saem do dispositivo, o que protege a privacidade",
  ],

  limitacoes: [
    "Protótipo de hackathon: vocabulário limitado e palavras isoladas, não frases",
    "Sem validação com pessoas surdas nem com profissionais de saúde",
  ],

  proximosPassos: [
    "Ampliar o vocabulário com pessoas surdas e intérpretes de LGA",
    "Passar de palavras isoladas para frases",
    "Versão para telemóvel e validação em unidades de saúde",
  ],
};
