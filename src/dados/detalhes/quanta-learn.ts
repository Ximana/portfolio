import type { Projecto } from "@/tipos";

/**
 * QUANTA Learn: plataforma de ensino de inglês para Angola.
 */
export const quantaLearn: Projecto = {
  slug: "quanta-learn",
  nome: "QUANTA Learn",
  resumo:
    "Plataforma de ensino de inglês para Angola, com aulas ao vivo, prática diária, avaliação de pronúncia e assistente de IA, do nível A1 ao C2.",
  descricao: [
    "A QUANTA Learn é uma plataforma de ensino de inglês pensada para Angola, em app.quantalearn.ao. O estudante faz um teste de nível, segue um percurso, ganha XP e conquistas e sobe de nível CEFR. Professores e gestão têm painéis próprios.",
    "Tem um frontend React, uma API em Node.js com PostgreSQL e uma aplicação móvel em React Native.",
  ],
  papel: "Desenvolvedor full-stack",
  tecnologias: ["React", "Node.js", "PostgreSQL", "Prisma", "Redis", "Socket.io", "Gemini AI", "React Native", "Docker"],
  estado: "em-desenvolvimento",
  imagem: "/imagens/projectos/quanta-learn-capa.jpg",
  destaque: true,
  // Para o botão do GitHub, acrescente: urlCodigo: "https://github.com/utilizador/repositorio",
  url: "https://app.quantalearn.ao",

  numeros: [
    { valor: "~100 000", rotulo: "Linhas de JavaScript" },
    { valor: "43", rotulo: "Modelos de dados" },
    { valor: "15", rotulo: "Módulos na API" },
    { valor: "110+", rotulo: "Componentes e páginas React" },
  ],

  objectivo:
    "Tornar o ensino de inglês de qualidade acessível em Angola, com estudo diário e pagamentos locais.",
  solucao:
    "Uma plataforma com três perfis: estudante, professor e equipa de gestão.",
  problema: [
    "Muitas plataformas de inglês não aceitam os meios de pagamento mais usados em Angola.",
    "Praticar a fala é a maior dificuldade de quem aprende sem um falante nativo por perto.",
  ],

  tabelas: [
    {
      titulo: "Pagamentos locais",
      colunas: ["Método", "Confirmação"],
      linhas: [
        ["Multicaixa Express", "Automática (webhook assinado)"],
        ["Referência", "Automática (webhook assinado)"],
        ["Transferência bancária", "Validação manual pelo gestor financeiro"],
      ],
    },
  ],

  fluxos: [
    {
      titulo: "Percurso do estudante",
      passos: [{ rotulo: "A1" }, { rotulo: "A2" }, { rotulo: "B1" }, { rotulo: "B2" }, { rotulo: "C1" }, { rotulo: "C2" }],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Aprendizagem",
      itens: ["Teste de nível e cursos do A1 ao C2", "Lições em texto, vídeo ou áudio e dicionário com pronúncia"],
    },
    {
      titulo: "Prática e IA",
      itens: ["Avaliação de pronúncia por IA", "Assistente de conversação com Google Gemini"],
    },
    {
      titulo: "Gamificação",
      itens: ["XP, sequência diária, conquistas e ranking", "Subida automática de nível CEFR"],
    },
    {
      titulo: "Turmas e gestão",
      itens: ["Turmas, tarefas e aulas ao vivo", "Planos, assinaturas e painéis para professores e gestão"],
    },
  ],

  decisoesTecnicas: [
    "API organizada por módulos, com validação em todas as rotas",
    "Redis para cache, limites de uso e comunicação em tempo real entre servidores",
    "Segurança em camadas: JWT, bcrypt e verificação assinada dos webhooks de pagamento",
  ],

  limitacoes: ["O Multicaixa Express funciona em modo de simulação, à espera de activação em produção"],

  proximosPassos: [
    "Activar os pagamentos Multicaixa em produção",
    "Mais conteúdo por nível e novos exercícios de fala",
    "Painéis de analítica para professores",
  ],
};
