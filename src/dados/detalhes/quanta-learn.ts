import type { Projecto } from "@/tipos";

/**
 * QUANTA Learn: plataforma de ensino de inglês para Angola.
 * Fonte do conteúdo: documentação do projecto (README) e dados já existentes
 * no portfólio (aplicação móvel, alojamento e URL).
 */
export const quantaLearn: Projecto = {
  slug: "quanta-learn",
  nome: "QUANTA Learn",
  resumo:
    "Plataforma de ensino de inglês para Angola, com aulas ao vivo, prática diária gamificada, avaliação de pronúncia e assistente de IA, do nível A1 ao C2.",
  descricao: [
    "A QUANTA Learn é uma plataforma completa de ensino de inglês pensada para o contexto angolano, alojada em app.quantalearn.ao. O estudante faz um teste de nível, recebe um percurso, ganha XP e conquistas, mantém uma sequência diária de estudo e sobe de nível CEFR. Professores e equipa de gestão têm painéis próprios.",
    "É composta por um frontend React, uma API REST em Node.js com PostgreSQL, comunicação em tempo real e tarefas agendadas, e ainda por uma aplicação móvel em React Native.",
  ],
  papel: "Fundador & desenvolvedor full-stack",
  tecnologias: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Socket.io",
    "Gemini AI",
    "React Native",
    "Docker",
    "Jest",
  ],
  estado: "em-desenvolvimento",
  logotipo: { largura: 1000, altura: 249 },
  destaque: true,
  url: "https://app.quantalearn.ao",

  numeros: [
    { valor: "~100 000", rotulo: "Linhas de JavaScript (frontend e API)" },
    { valor: "43", rotulo: "Modelos de dados (Prisma)" },
    { valor: "15", rotulo: "Módulos de domínio na API" },
    { valor: "110+", rotulo: "Componentes e páginas React" },
  ],

  objectivo:
    "Tornar o ensino de inglês de qualidade acessível em Angola, com uma experiência de estudo diária, motivadora e adaptada aos meios de pagamento locais.",
  solucao:
    "Uma plataforma com três perfis de utilizador: o estudante, o professor e a equipa de gestão, esta última com oito papéis e permissões próprias.",
  problema: [
    "Muitas plataformas de inglês não aceitam Multicaixa Express, referência ou transferência bancária, os meios mais usados em Angola.",
    "Praticar a fala é a maior dificuldade de quem aprende inglês sem um falante nativo por perto.",
    "Escolas e professores precisam de uma só ferramenta para turmas, aulas, tarefas, pagamentos e conteúdos.",
  ],

  tabelas: [
    {
      titulo: "Pagamentos locais",
      colunas: ["Método", "Como funciona", "Confirmação"],
      linhas: [
        ["Multicaixa Express", "Pedido com notificação no telemóvel", "Webhook assinado"],
        ["Referência", "Pagamento em ATM, Multicaixa Express ou internet banking, com prazo", "Webhook assinado"],
        ["Transferência bancária", "Envio de comprovativo", "Validação manual pelo gestor financeiro"],
      ],
    },
  ],

  fluxos: [
    {
      titulo: "Arquitectura",
      passos: [
        { rotulo: "Clientes", detalhe: "Web (React) e móvel (React Native)" },
        { rotulo: "API Node.js", detalhe: "15 módulos, JWT, Zod, Swagger" },
        { rotulo: "Dados", detalhe: "PostgreSQL (Prisma) e Redis (cache, rate limit)" },
        { rotulo: "Tempo real e tarefas", detalhe: "Socket.io e node-cron (fuso de Luanda)" },
        { rotulo: "Integrações", detalhe: "Gemini, Collins, Multicaixa, Cloudinary" },
      ],
    },
    {
      titulo: "Percurso do estudante",
      passos: [
        { rotulo: "A1" },
        { rotulo: "A2" },
        { rotulo: "B1" },
        { rotulo: "B2" },
        { rotulo: "C1" },
        { rotulo: "C2" },
      ],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Aprendizagem",
      itens: [
        "Teste de nível (28 perguntas) e cursos do A1 ao C2",
        "Seis tipos de exercício e lições em texto, vídeo ou áudio",
        "Dicionário inglês-português com pronúncia",
      ],
    },
    {
      titulo: "Prática diária e speaking",
      itens: [
        "Sessões de 10 exercícios em seis módulos",
        "Gravação de voz no browser e avaliação da pronúncia por IA",
        "Limite diário de avaliações consoante o plano",
      ],
    },
    {
      titulo: "Assistente de IA",
      itens: [
        "Conversas com um assistente pedagógico (Google Gemini)",
        "Análise de texto com feedback pedagógico",
        "10 mensagens por dia no plano gratuito, ilimitado no premium",
      ],
    },
    {
      titulo: "Gamificação",
      itens: [
        "XP, sequência diária, conquistas e ranking semanal e mensal",
        "Subida automática de nível CEFR",
        "Notificações em tempo real",
      ],
    },
    {
      titulo: "Turmas e eventos",
      itens: [
        "Turmas individuais, em grupo e webinars, com tarefas",
        "Aulas ao vivo com Google Meet, Zoom ou Microsoft Teams",
        "Eventos, alguns exclusivos para subscritores",
      ],
    },
    {
      titulo: "Planos e gestão",
      itens: [
        "Planos configuráveis e assinaturas com expiração automática",
        "Painéis para professores e para a equipa de gestão",
        "Blog, newsletter e emails transaccionais",
      ],
    },
  ],

  decisoesTecnicas: [
    "API por módulos (routes, controller, service, schema e serializer), com validação Zod na entrada de cada rota",
    "Redis para três funções: cache, rate limiting e adaptador do Socket.io, o que permite escalar com PM2 em modo cluster",
    "Tarefas agendadas protegidas para correrem só numa instância, evitando emails e cálculos duplicados",
    "Segurança em camadas: Helmet, CORS, rate limiting, JWT com refresh token, bcrypt e verificação HMAC dos webhooks",
    "Docker e Docker Compose, com testes unitários e de integração (Jest e Supertest)",
  ],

  desafios: [
    "Ciclo de vida de pagamentos assíncronos com três métodos diferentes, sem deixar utilizadores presos em estados pendentes",
    "Avaliar a fala com IA a custo controlado, limitando o uso por plano e por dia",
    "Manter vários servidores sincronizados (cluster, cache e WebSockets) através do Redis",
  ],
  limitacoes: [
    "O Multicaixa Express ainda funciona em modo de simulação, à espera de activação em produção",
  ],

  proximosPassos: [
    "Activar os pagamentos Multicaixa em produção",
    "Mais conteúdo por nível e novos exercícios de speaking",
    "Painéis de analítica para professores e coordenação pedagógica",
  ],
};
