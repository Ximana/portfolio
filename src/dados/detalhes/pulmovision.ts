import type { Projecto } from "@/tipos";

/**
 * PulmoVision: sistema de deep learning para apoio à detecção de pneumonia
 * e tuberculose em radiografias do tórax (TFC de licenciatura).
 */
export const pulmovision: Projecto = {
  slug: "pulmovision",
  nome: "PulmoVision",
  resumo:
    "Sistema de deep learning para apoio à detecção de pneumonia e tuberculose em radiografias do tórax, com API REST e interface web.",
  descricao: [
    "O PulmoVision recebe uma radiografia do tórax e classifica-a em três categorias (normal, pneumonia ou tuberculose), devolvendo a probabilidade de cada uma. Foi pensado como ferramenta de apoio à triagem, útil sobretudo onde há poucos radiologistas disponíveis.",
    "É o meu Trabalho de Fim de Curso e o projecto principal da QUANTA, tendo integrado o programa de aceleração LISPA Jumpstart como projecto de destaque. Divide-se em três partes independentes: o modelo, a API que o serve e a aplicação web.",
  ],
  papel: "Autor e desenvolvedor full-stack (TFC): modelo de deep learning, API e aplicação web",
  tecnologias: [
    "Python",
    "TensorFlow",
    "Keras",
    "EfficientNetB0",
    "Django REST Framework",
    "FastAPI",
    "React",
    "Vite",
    "Tailwind CSS",
    "Docker",
    "scikit-learn",
  ],
  estado: "concluido",
  imagem: "/imagens/projectos/pulmovision-capa.jpg",
  destaque: true,

  aviso:
    "O PulmoVision é uma ferramenta de apoio à decisão e não substitui o diagnóstico médico. Os resultados abaixo vêm de validação em dados de investigação, não de validação clínica.",

  resultados: [
    { valor: "99 %", rotulo: "Exactidão no conjunto de teste (450 imagens)" },
    { valor: "3 000", rotulo: "Imagens do conjunto equilibrado de treino" },
    { valor: "0,998+", rotulo: "AUC ROC por classe (avaliação de 300 imagens)" },
  ],

  objectivo:
    "Apoiar a detecção de pneumonia e tuberculose a partir de radiografias do tórax, através de uma interface web simples.",
  solucao:
    "Um modelo convolucional com transfer learning (EfficientNetB0), uma API REST sem estado que valida a imagem e executa o modelo, e uma aplicação React que mostra a probabilidade de cada classe.",
  problema: [
    "A pneumonia e a tuberculose são graves, e o diagnóstico precoce faz diferença no tratamento e no controlo da transmissão.",
    "Os radiologistas são escassos em muitas unidades de saúde, o que atrasa a triagem.",
  ],

  graficos: [
    {
      tipo: "agrupadas",
      titulo: "Desempenho por classe",
      series: ["Precisão", "Recall", "F1"],
      grupos: [
        { rotulo: "Normal", valores: [1.0, 0.97, 0.99] },
        { rotulo: "Pneumonia", valores: [0.98, 1.0, 0.99] },
        { rotulo: "Tuberculose", valores: [0.99, 1.0, 1.0] },
      ],
      maximo: 1,
    },
    {
      tipo: "donut",
      titulo: "Conjunto original de radiografias",
      dados: [
        { rotulo: "Normais", valor: 5083 },
        { rotulo: "Pneumonia", valor: 4273 },
        { rotulo: "Tuberculose", valor: 700 },
      ],
      centro: { valor: "10 056", rotulo: "radiografias" },
      nota: "Desequilíbrio forte (razão de 7,26 entre a maior e a menor classe): o treino final usou um subconjunto balanceado.",
    },
    {
      tipo: "empilhada",
      titulo: "Divisão do conjunto de treino (3 000 imagens)",
      dados: [
        { rotulo: "Treino", valor: 2100 },
        { rotulo: "Validação", valor: 450 },
        { rotulo: "Teste", valor: 450 },
      ],
      nota: "1 000 imagens por classe, com divisão estratificada.",
    },
    {
      tipo: "barras",
      titulo: "Confiança média do modelo",
      unidade: "%",
      maximo: 100,
      dados: [
        { rotulo: "Previsões certas", valor: 95 },
        { rotulo: "Previsões erradas", valor: 68 },
      ],
      nota: "Os erros têm confiança bem mais baixa, por isso os casos abaixo de 70 % ficam assinalados para revisão.",
    },
  ],

  fluxos: [
    {
      titulo: "Do exame ao resultado",
      passos: [
        { rotulo: "Radiografia", detalhe: "Carregada na aplicação web (React)" },
        { rotulo: "API REST", detalhe: "Valida a imagem e junta o aviso legal" },
        { rotulo: "EfficientNetB0", detalhe: "Inferência a 224 × 224 (.keras)" },
        { rotulo: "Resultado", detalhe: "Probabilidade de cada classe" },
      ],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Modelo",
      itens: [
        "Três classes: normal, pneumonia e tuberculose",
        "Pipeline configurável, do pré-processamento à inferência",
        "Avaliação com matriz de confusão, curvas ROC e relatório por classe",
      ],
    },
    {
      titulo: "API",
      itens: [
        "POST /predicao devolve rótulo, confiança e probabilidades",
        "Validação rigorosa do ficheiro e aviso legal em cada resposta",
        "Duas versões com os mesmos endpoints: Django REST Framework e FastAPI",
      ],
    },
    {
      titulo: "Aplicação web",
      itens: [
        "Carregamento por arrastar e largar, com pré-visualização",
        "Barras de probabilidade e código de cores por classe",
        "Informação do modelo e das suas limitações",
      ],
    },
  ],

  decisoesTecnicas: [
    "EfficientNetB0 com backbone congelado: só cerca de 4 % dos parâmetros são treinados, o que permite treinar com poucos dados e reduz o sobreajuste",
    "Treino robusto: early stopping, redução automática da taxa de aprendizagem, aumento leve de dados e semente fixa para reprodutibilidade",
    "Balanceamento por amostragem, para o modelo não favorecer a classe maioritária",
    "API sem estado e sem base de dados: não guarda imagens nem dados de pacientes, o que reduz riscos de privacidade",
    "Três repositórios independentes (modelo, API e frontend), com testes automatizados e implantação com Docker",
  ],

  desafios: [
    "Tuberculose com apenas cerca de 7 % do conjunto original, o que exigiu balancear os dados",
    "Radiografias muito heterogéneas em dimensão e proporção, o que obrigou a normalizar o pré-processamento",
    "Comunicar o uso responsável: a interface e a API deixam claro que o resultado é apoio à decisão",
  ],
  limitacoes: [
    "Treinado com um conjunto específico, pode não generalizar para outros equipamentos e populações",
    "Só reconhece as três classes treinadas",
    "Ainda sem validação clínica externa",
  ],

  proximosPassos: [
    "Validação externa, idealmente com dados locais",
    "Explicabilidade visual com mapas de calor Grad-CAM",
    "Mais dados de tuberculose e comparação com outras arquitecturas",
    "Implantação pública da API e da aplicação",
  ],
};
