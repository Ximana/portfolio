import type { Projecto } from "@/tipos";

/**
 * Análise de Saúde Pública em Angola com Hadoop: pipeline de Big Data
 * (HDFS, MapReduce e PySpark). Projecto académico.
 */
export const hadoopSaudeAngola: Projecto = {
  slug: "hadoop-saude-angola",
  nome: "Saúde Pública em Angola com Hadoop",
  resumo:
    "Pipeline de Big Data com Hadoop MapReduce, HDFS e PySpark para analisar registos de doenças em Angola e transformar os resultados em visualizações.",
  descricao: [
    "Este projecto aplica Big Data à análise de dados de saúde em Angola. Os registos de doenças são guardados no HDFS e processados com Hadoop MapReduce em Python (Hadoop Streaming); os resultados voltam ao HDFS, são lidos com PySpark e transformados em gráficos.",
    "O conjunto principal reúne 1 000 registos de 2023 sobre cinco doenças (malária, cólera, dengue, febre tifóide e hepatite A) em 10 províncias, complementado com indicadores da Organização Mundial da Saúde para Angola (mais de 18 000 linhas).",
  ],
  papel: "Desenvolvedor e analista de dados: ingestão no HDFS, trabalhos MapReduce, análise com PySpark e visualização",
  tecnologias: [
    "Hadoop",
    "HDFS",
    "MapReduce",
    "PySpark",
    "Python",
    "pandas",
    "Matplotlib",
    "Seaborn",
    "Jupyter",
  ],
  estado: "concluido",
  destaque: false,

  resultados: [
    { valor: "254 727", rotulo: "Casos registados em 2023" },
    { valor: "25 297", rotulo: "Óbitos (~10 % de mortalidade)" },
    { valor: "58 773", rotulo: "Casos de malária, a doença mais registada" },
    { valor: "18 a 25 mil", rotulo: "Casos por mês, em evolução estável" },
  ],

  objectivo:
    "Demonstrar como o modelo MapReduce extrai, de forma distribuída, indicadores úteis para a saúde pública, como a distribuição geográfica e temporal das doenças.",
  solucao:
    "Uma cadeia em quatro etapas: ingestão dos CSV no HDFS, oito trabalhos MapReduce em Python, resultados em CSV no HDFS e visualização com PySpark, pandas e Matplotlib.",
  problema: [
    "Os dados de saúde crescem em volume e variedade, e as folhas de cálculo deixam de ser suficientes.",
    "Gestores e investigadores precisam de respostas rápidas: que províncias concentram mais casos e como evoluem ao longo do ano.",
  ],

  graficos: [
    {
      tipo: "empilhada",
      titulo: "Casos registados em 2023",
      dados: [
        { rotulo: "Óbitos", valor: 25297 },
        { rotulo: "Restantes casos", valor: 229430 },
      ],
      nota: "Taxa de mortalidade global de cerca de 10 %.",
    },
    {
      tipo: "barras",
      titulo: "Províncias com mais casos",
      dados: [
        { rotulo: "Uíge", valor: 31000, texto: "~31 mil" },
        { rotulo: "Luanda", valor: 30000, texto: "~30 mil" },
      ],
      nota: "Valores aproximados das duas províncias com mais casos.",
    },
    {
      tipo: "barras",
      titulo: "Média de casos por qualidade da água",
      maximo: 300,
      dados: [
        { rotulo: "Água boa", valor: 245, texto: "~245" },
        { rotulo: "Água moderada ou ruim", valor: 260, texto: "~260" },
      ],
      nota: "A diferença é pequena e a relação é exploratória, sem teste estatístico.",
    },
  ],

  tabelas: [
    {
      titulo: "Análises implementadas (8 trabalhos MapReduce)",
      colunas: ["Análise", "O que responde"],
      linhas: [
        ["Casos e óbitos por província", "Totais e doença mais comum em cada província"],
        ["Doença mais frequente por município", "Qual a doença dominante em cada município"],
        ["Taxa de mortalidade por doença", "Relação entre óbitos e casos"],
        ["Impacto da qualidade da água", "Média de casos e óbitos por classe de água"],
        ["Temperatura e doenças", "Total de casos por faixa de temperatura"],
        ["Casos e óbitos por período", "Evolução mensal ao longo de 2023"],
        ["Top 5 municípios", "Municípios com mais casos"],
        ["Ranking por número de casos", "Classificação geográfica por total de casos"],
      ],
    },
  ],

  fluxos: [
    {
      titulo: "Pipeline",
      passos: [
        { rotulo: "CSV em bruto", detalhe: "Registos de doenças e indicadores da OMS" },
        { rotulo: "HDFS", detalhe: "Armazenamento distribuído" },
        { rotulo: "MapReduce", detalhe: "Hadoop Streaming em Python (mapper e reducer)" },
        { rotulo: "PySpark", detalhe: "Lê os resultados directamente do HDFS" },
        { rotulo: "Gráficos", detalhe: "pandas, Matplotlib e Seaborn" },
      ],
    },
  ],

  funcionalidades: [
    "Um trabalho MapReduce por pergunta, cada um com mapper, reducer, resultado e documentação",
    "Resultados em CSV com cabeçalho, prontos para pandas, Spark e ferramentas de BI",
    "Gráficos de barras, linhas, circulares e de dispersão para cada análise",
    "Análise exploratória em pandas, para confrontar com os resultados do MapReduce",
  ],

  decisoesTecnicas: [
    "Hadoop Streaming com Python: mappers e reducers numa linguagem acessível, sem Java, mantendo a execução distribuída",
    "Chaves e valores compostos, para um único trabalho calcular vários indicadores",
    "Mappers robustos: ignoram cabeçalhos, linhas vazias e valores inválidos",
  ],

  desafios: [
    "Limpar as tabulações que o Hadoop Streaming deixa no fim das linhas ao ler com PySpark",
    "Distinguir o cabeçalho dos dados no mapper e gerar o CSV final com os nomes das colunas",
    "Configurar e operar o HDFS num ambiente local",
  ],
  limitacoes: [
    "Os dados principais têm características de dados simulados, por isso servem para demonstrar a cadeia de processamento e não para conclusões epidemiológicas",
    "O volume é pequeno para as capacidades do Hadoop",
  ],

  proximosPassos: [
    "Aplicar a cadeia a dados reais e em maior volume",
    "Evoluir o processamento para Spark, mantendo o HDFS",
    "Painel interactivo por província e período",
  ],
};
