import type { Projecto } from "@/tipos";

/**
 * PulmoVision: deep learning para apoio à detecção de pneumonia e tuberculose
 * em radiografias do tórax (TFC de licenciatura).
 */
export const pulmovision: Projecto = {
  slug: "pulmovision",
  nome: "PulmoVision",
  resumo:
    "Deep learning para apoio à detecção de pneumonia e tuberculose em radiografias do tórax, com API REST e aplicação web.",
  descricao: [
    "O PulmoVision recebe uma radiografia do tórax e classifica-a como normal, pneumonia ou tuberculose, devolvendo a probabilidade de cada classe. Serve de apoio à triagem, sobretudo onde há poucos radiologistas.",
    "Foi o meu Trabalho de Fim de Curso e integrou o programa de aceleração LISPA Jumpstart. Tem três partes: o modelo, a API e a aplicação web.",
  ],
  papel: "Autor e desenvolvedor full-stack: modelo, API e aplicação web",
  tecnologias: ["Python", "TensorFlow", "Keras", "EfficientNetB0", "Django REST Framework", "FastAPI", "React", "Docker"],
  estado: "concluido",
  imagem: "/imagens/projectos/pulmovision-capa.jpg",
  destaque: true,
  // Ligações opcionais (só aparecem os botões que tiverem valor; apague o "//" para activar):
  // url: "https://endereco-do-projecto-online",
  // urlCodigo: "https://github.com/utilizador/repositorio",

  aviso:
    "O PulmoVision é uma ferramenta de apoio à decisão e não substitui o diagnóstico médico. Os resultados vêm de validação em dados de investigação, não de validação clínica.",

  resultados: [
    { valor: "99 %", rotulo: "Exactidão no conjunto de teste (450 imagens)" },
    { valor: "3 000", rotulo: "Imagens no conjunto equilibrado de treino" },
    { valor: "0,998+", rotulo: "AUC ROC por classe" },
  ],

  objectivo:
    "Apoiar a detecção de pneumonia e tuberculose a partir de radiografias do tórax, numa interface web simples.",
  solucao:
    "Um modelo EfficientNetB0 com transfer learning, uma API REST que valida a imagem e executa o modelo, e uma aplicação React que mostra a probabilidade de cada classe.",
  problema: [
    "O diagnóstico precoce de pneumonia e tuberculose faz diferença no tratamento.",
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
      titulo: "Radiografias originais",
      dados: [
        { rotulo: "Normais", valor: 5083 },
        { rotulo: "Pneumonia", valor: 4273 },
        { rotulo: "Tuberculose", valor: 700 },
      ],
      centro: { valor: "10 056", rotulo: "radiografias" },
      nota: "Conjunto desequilibrado: o treino final usou um subconjunto balanceado de 1 000 imagens por classe.",
    },
  ],

  fluxos: [
    {
      titulo: "Do exame ao resultado",
      passos: [
        { rotulo: "Radiografia", detalhe: "Carregada na aplicação web" },
        { rotulo: "API REST", detalhe: "Valida a imagem" },
        { rotulo: "EfficientNetB0", detalhe: "Classifica a imagem" },
        { rotulo: "Resultado", detalhe: "Probabilidade de cada classe" },
      ],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Modelo",
      itens: ["Três classes: normal, pneumonia e tuberculose", "Avaliação com matriz de confusão, curvas ROC e relatório por classe"],
    },
    {
      titulo: "API",
      itens: ["Devolve rótulo, confiança e probabilidades", "Versões em Django REST Framework e FastAPI"],
    },
    {
      titulo: "Aplicação web",
      itens: ["Carregamento por arrastar e largar, com pré-visualização", "Barras de probabilidade por classe"],
    },
  ],

  decisoesTecnicas: [
    "Transfer learning com backbone congelado, para treinar com poucos dados e reduzir o sobreajuste",
    "Balanceamento por amostragem, para o modelo não favorecer a classe maioritária",
    "API sem base de dados: não guarda imagens nem dados de pacientes",
  ],

  limitacoes: [
    "Treinado num conjunto específico, pode não generalizar para outros equipamentos e populações",
    "Ainda sem validação clínica externa",
  ],

  proximosPassos: [
    "Validação externa, idealmente com dados locais",
    "Explicabilidade visual com mapas de calor Grad-CAM",
    "Implantação pública da API e da aplicação",
  ],
};
