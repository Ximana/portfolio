import type { Projecto } from "@/tipos";

/**
 * Análise de Saúde Pública em Angola com Hadoop: pipeline de Big Data
 * (HDFS, MapReduce e PySpark). Projecto académico.
 */
export const hadoopSaudeAngola: Projecto = {
  slug: "hadoop-saude-angola",
  nome: "Saúde Pública em Angola com Hadoop",
  resumo:
    "Pipeline de Big Data com Hadoop, HDFS e PySpark para analisar registos de doenças em Angola e transformá-los em gráficos.",
  descricao: [
    "Os registos de doenças são guardados no HDFS e processados com Hadoop MapReduce em Python. Os resultados voltam ao HDFS, são lidos com PySpark e transformados em visualizações.",
    "O conjunto principal tem 1 000 registos de 2023 sobre cinco doenças (malária, cólera, dengue, febre tifóide e hepatite A) em 10 províncias, complementado com indicadores da Organização Mundial da Saúde.",
  ],
  papel: "Desenvolvedor e analista de dados",
  tecnologias: ["Hadoop", "HDFS", "MapReduce", "PySpark", "Python", "pandas", "Matplotlib"],
  estado: "concluido",
  destaque: false,
  // Ligações opcionais (só aparecem os botões que tiverem valor; apague o "//" para activar):
  // url: "https://endereco-do-projecto-online",
  // urlCodigo: "https://github.com/utilizador/repositorio",

  resultados: [
    { valor: "254 727", rotulo: "Casos registados em 2023" },
    { valor: "25 297", rotulo: "Óbitos (~10 % de mortalidade)" },
    { valor: "58 773", rotulo: "Casos de malária, a doença mais registada" },
  ],

  objectivo:
    "Mostrar como o MapReduce extrai, de forma distribuída, indicadores úteis para a saúde pública, como a distribuição geográfica e temporal das doenças.",
  solucao:
    "Uma cadeia em quatro etapas: ingestão no HDFS, oito trabalhos MapReduce, resultados em CSV e visualização com PySpark e Matplotlib.",

  graficos: [
    {
      tipo: "barras",
      titulo: "Províncias com mais casos",
      dados: [
        { rotulo: "Uíge", valor: 31000, texto: "~31 mil" },
        { rotulo: "Luanda", valor: 30000, texto: "~30 mil" },
      ],
      nota: "Valores aproximados.",
    },
  ],

  tabelas: [
    {
      titulo: "Análises implementadas",
      colunas: ["Análise", "O que responde"],
      linhas: [
        ["Casos e óbitos por província", "Totais e doença mais comum em cada província"],
        ["Taxa de mortalidade por doença", "Relação entre óbitos e casos"],
        ["Casos por período", "Evolução mensal ao longo de 2023"],
        ["Qualidade da água e temperatura", "Relação com o número de casos"],
        ["Top 5 municípios", "Municípios com mais casos"],
      ],
    },
  ],

  fluxos: [
    {
      titulo: "Pipeline",
      passos: [
        { rotulo: "CSV em bruto", detalhe: "Registos de doenças e indicadores da OMS" },
        { rotulo: "HDFS", detalhe: "Armazenamento distribuído" },
        { rotulo: "MapReduce", detalhe: "Mapper e reducer em Python" },
        { rotulo: "PySpark", detalhe: "Lê os resultados do HDFS" },
        { rotulo: "Gráficos", detalhe: "pandas e Matplotlib" },
      ],
    },
  ],

  funcionalidades: [
    "Um trabalho MapReduce por pergunta, com resultado e documentação",
    "Resultados em CSV, prontos para pandas, Spark e ferramentas de BI",
    "Gráficos para cada análise",
  ],

  decisoesTecnicas: [
    "Hadoop Streaming com Python: execução distribuída sem precisar de Java",
    "Mappers robustos: ignoram cabeçalhos, linhas vazias e valores inválidos",
  ],

  limitacoes: [
    "Os dados principais parecem simulados: servem para demonstrar a cadeia de processamento, não para conclusões epidemiológicas",
    "O volume é pequeno para as capacidades do Hadoop",
  ],

  proximosPassos: [
    "Aplicar a cadeia a dados reais e em maior volume",
    "Painel interactivo por província e período",
  ],
};
