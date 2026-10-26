import type { Projecto } from "@/tipos";

/**
 * MUSA: website institucional de uma empresa de importação e exportação em Luanda.
 */
export const musa: Projecto = {
  slug: "musa",
  nome: "MUSA",
  resumo:
    "Website institucional da MUSA, empresa de importação e exportação de Luanda, com produtos, serviços e pedido de orçamento online.",
  descricao: [
    "A MUSA liga fornecedores qualificados a compradores internacionais, sob o lema \"Ligamos Angola aos Mercados Globais\". O website apresenta a empresa, os produtos, os serviços e os mercados, e leva o visitante ao pedido de orçamento.",
    "Está em português de Angola e foi pensado para gerar contactos: formulário de orçamento, WhatsApp e contactos directos em todas as páginas.",
  ],
  papel: "Desenvolvedor web",
  tecnologias: ["Next.js", "Vercel"],
  estado: "concluido",
  imagem: "/imagens/projectos/musa-capa.jpg",
  destaque: false,
  // Para o botão do GitHub, acrescente: urlCodigo: "https://github.com/utilizador/repositorio",
  url: "https://musa-yzaj.vercel.app/",

  objectivo:
    "Dar à MUSA uma presença digital clara e credível, que converta visitas em pedidos de orçamento.",
  solucao:
    "Um website com Início, Sobre, Produtos, Serviços, Mercados e Contacto, e um caminho simples do herói ao orçamento ou ao WhatsApp.",

  tabelas: [
    {
      titulo: "Oferta apresentada no site",
      colunas: ["Área", "Conteúdo"],
      linhas: [
        ["Produtos", "Café angolano, produtos agrícolas e mercadorias gerais"],
        ["Serviços", "Fornecedores, importação e exportação, frete e logística, documentação"],
        ["Mercados", "África, Europa, Ásia e Américas"],
      ],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Conversão",
      itens: ["Formulário de orçamento com produto, país de destino e mensagem", "Botão de WhatsApp com mensagem pré-preenchida"],
    },
    {
      titulo: "Confiança",
      itens: ["Perguntas frequentes, privacidade, termos e cookies", "Acessibilidade e tema claro e escuro"],
    },
  ],

  decisoesTecnicas: [
    "Next.js com imagens optimizadas e metadados para partilha em redes sociais",
    "Campo oculto anti-spam e consentimento explícito no formulário",
  ],
};
