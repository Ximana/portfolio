import type { Projecto } from "@/tipos";

/**
 * MUSA: website institucional de uma empresa de importação e exportação em Luanda.
 * Conteúdo retirado do próprio site publicado (https://musa-yzaj.vercel.app/).
 */
export const musa: Projecto = {
  slug: "musa",
  nome: "MUSA",
  resumo:
    "Website institucional da MUSA, empresa de importação e exportação sediada em Luanda, com apresentação de produtos e serviços e pedido de orçamento online.",
  descricao: [
    "A MUSA é uma empresa sediada em Luanda que liga fornecedores qualificados a compradores internacionais, sob o lema \"Ligamos Angola aos Mercados Globais\". O website apresenta a empresa, os produtos, os serviços e os mercados, e leva o visitante ao pedido de orçamento.",
    "Está inteiramente em português de Angola e foi pensado para gerar contactos comerciais: formulário de orçamento, WhatsApp e contactos directos em todas as páginas.",
  ],
  papel: "Desenvolvedor web",
  tecnologias: ["Next.js", "Vercel"],
  estado: "concluido",
  logotipo: { largura: 1200, altura: 143, fundo: "escuro" },
  destaque: false,
  url: "https://musa-yzaj.vercel.app/",

  objectivo:
    "Dar à MUSA uma presença digital clara e credível, que explique o que a empresa faz e converta visitas em pedidos de orçamento.",
  solucao:
    "Um website multipágina (Início, Sobre, Produtos, Serviços, Mercados e Contacto), com um fluxo único de contacto: do herói ao formulário de orçamento ou ao WhatsApp.",

  tabelas: [
    {
      titulo: "Oferta apresentada no site",
      colunas: ["Área", "Conteúdo"],
      linhas: [
        ["Produtos", "Café angolano (Arábica e Robusta), produtos agrícolas (cereais, feijão e oleaginosas) e mercadorias gerais"],
        [
          "Serviços",
          "Aprovisionamento e coordenação de fornecedores, gestão de importação e exportação, frete e logística, documentação e apoio comercial",
        ],
        ["Mercados", "África, Europa, Ásia e Américas"],
      ],
    },
  ],

  fluxos: [
    {
      titulo: "Como a MUSA trabalha (apresentado no site)",
      passos: [
        { rotulo: "Pedido" },
        { rotulo: "Proposta" },
        { rotulo: "Coordenação" },
        { rotulo: "Entrega" },
      ],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Conversão",
      itens: [
        "Formulário de pedido de orçamento com produto de interesse, país de destino e mensagem",
        "Botão de WhatsApp com mensagem pré-preenchida",
        "Chamadas à acção no herói e no fim das páginas",
      ],
    },
    {
      titulo: "Conteúdo e confiança",
      itens: [
        "Páginas de produtos, serviços, mercados e perguntas frequentes",
        "Política de privacidade, termos de utilização e cookies",
        "Tom comercial sem promessas exageradas: a cobertura é confirmada em cada orçamento",
      ],
    },
  ],

  decisoesTecnicas: [
    "Aplicação Next.js com imagens optimizadas (next/image) e metadados Open Graph e Twitter Card para partilha",
    "Campo oculto anti-spam no formulário e consentimento explícito da política de privacidade",
    "Acessibilidade: ligação \"Saltar para o conteúdo\" e suporte a esquemas de cor claro e escuro",
    "Design responsivo e localização pt-AO",
  ],
};
