import type { Projecto } from "@/tipos";

/**
 * Okuyeva: tradutor de Língua Gestual Angolana (LGA) para texto, em tempo real.
 * Desenvolvido no Hackathon Zero Barreiras (UNFPA / Acelera Angola), 2.º lugar.
 */
export const okuyeva: Projecto = {
  slug: "okuyeva",
  nome: "Okuyeva",
  resumo:
    "Tradutor de Língua Gestual Angolana para texto, em tempo real, para um atendimento digno e inclusivo em saúde sexual e reprodutiva a pessoas surdas.",
  descricao: [
    "O Okuyeva é um protótipo que usa visão computacional e inteligência artificial para traduzir gestos da Língua Gestual Angolana em texto, para que uma pessoa surda comunique directamente com o profissional de saúde, sem precisar de um familiar como intérprete.",
    "Foi desenvolvido no Hackathon Zero Barreiras, promovido pelo UNFPA e organizado pela Acelera Angola, e a nossa equipa de 10 pessoas ficou em 2.º lugar.",
  ],
  papel: "Desenvolvedor, numa equipa de 10 pessoas",
  tecnologias: [
    "Python",
    "MediaPipe",
    "PyTorch",
    "OpenCV",
    "FastAPI",
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
  ],
  estado: "concluido",
  destaque: true,

  contexto: {
    titulo: "O hackathon",
    itens: [
      { rotulo: "Evento", valor: "Hackathon Zero Barreiras, promovido pelo UNFPA e organizado pela Acelera Angola" },
      {
        rotulo: "Desafio",
        valor: "Atendimento digno e inclusivo em saúde sexual e reprodutiva para pessoas com deficiência",
      },
      { rotulo: "Resultado", valor: "2.º lugar, numa equipa de 10 pessoas" },
    ],
  },

  numeros: [
    { valor: "30", rotulo: "Gestos clínicos reconhecidos" },
    { valor: "1 662", rotulo: "Pontos extraídos por imagem" },
    { valor: "30", rotulo: "Imagens por janela de gesto" },
    { valor: "258", rotulo: "Características usadas no treino final" },
  ],

  objectivo:
    "Eliminar a barreira de comunicação entre pessoas surdas e profissionais de saúde, garantindo privacidade, autonomia e dignidade no atendimento.",
  solucao:
    "Uma aplicação web que reconhece, a partir de uma câmara, os gestos da paciente e mostra a palavra correspondente em texto, com a confiança. O vocabulário tem 30 gestos clínicos (como Dor, Menstruação, Gravidez, Preservativo e Planeamento familiar) mais um estado neutro.",
  problema: [
    "Pessoas surdas dependem muitas vezes de um familiar para traduzir e perdem a privacidade em temas íntimos como contracepção ou gravidez.",
    "Há poucos intérpretes de Língua Gestual Angolana nas unidades de saúde, o que gera mal-entendidos e abandono do acompanhamento.",
  ],

  graficos: [
    {
      tipo: "barras",
      titulo: "Características por imagem",
      maximo: 1662,
      dados: [
        { rotulo: "Extraídas pelo MediaPipe Holistic", valor: 1662 },
        { rotulo: "Usadas no treino final (postura e mãos)", valor: 258 },
      ],
      nota: "O rosto é cerca de 85 % dos pontos mas não distingue os gestos, e retirá-lo tornou o reconhecimento menos sensível à posição da pessoa.",
    },
  ],

  fluxos: [
    {
      titulo: "Do gesto ao texto",
      passos: [
        { rotulo: "Câmara", detalhe: "Vídeo em directo, processado localmente" },
        { rotulo: "MediaPipe Holistic", detalhe: "Pontos do corpo e das mãos" },
        { rotulo: "Janela de 30 imagens", detalhe: "Sequência normalizada do gesto" },
        { rotulo: "LSTM bidireccional", detalhe: "Classificação em PyTorch" },
        { rotulo: "Texto", detalhe: "Palavra e confiança, via API FastAPI e interface React" },
      ],
    },
  ],

  demonstracao:
    "O pitch encenou uma consulta em palco: o médico de um lado, a paciente surda do outro e o ecrã a mostrar, em tempo real, cada palavra reconhecida. Sem o sistema, a paciente teria de trazer um familiar e perderia a privacidade; com o Okuyeva, o atendimento é digno e inclusivo.",

  funcionalidades: [
    "Tradução de gestos dinâmicos (movimento ao longo do tempo) com percentagem de confiança",
    "Vídeo em directo com os pontos do corpo e das mãos desenhados",
    "Suavização das previsões, para o texto não tremer entre palavras",
    "Ferramenta de recolha de dados e interface em português com tutorial de 3 passos",
  ],

  decisoesTecnicas: [
    "LSTM bidireccional pequeno (2 camadas, 64 unidades, dropout de 0,4), de propósito para não sobreajustar com poucos exemplos por gesto",
    "Aumento de dados (ruído, deformação temporal e espelhamento), com 5 variantes por amostra",
    "Processamento local: as imagens não são enviadas para a rede, o que protege a privacidade das pacientes",
    "API FastAPI com vídeo MJPEG, que expõe o estado do reconhecimento à interface a cada 100 ms",
  ],

  desafios: [
    "Poucos dados em muito pouco tempo, o que exigiu um modelo pequeno e uma estratégia de gestos prioritários",
    "Estabilidade em tempo real, resolvida com votação por maioria, confiança mínima e tempo mínimo no ecrã",
    "Vocabulário e gravações criados de raiz, com apoio de intérpretes que conhecem a LGA",
  ],
  limitacoes: [
    "Protótipo de hackathon: vocabulário limitado e reconhecimento de palavras isoladas, não de frases",
    "Sem validação com um grupo alargado de pessoas surdas nem com profissionais de saúde",
  ],

  proximosPassos: [
    "Ampliar o vocabulário com mais pessoas surdas e intérpretes de LGA",
    "Passar de palavras isoladas para frases",
    "Sentido inverso (médico para paciente) e versão para telemóvel",
    "Validação em unidades de saúde e parcerias com associações de pessoas surdas",
  ],
};
