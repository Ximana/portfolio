import type { Projecto } from "@/tipos";

export const projectos: Projecto[] = [
  {
    slug: "pulmovision",
    nome: "PulmoVision",
    resumo:
      "Plataforma de deep learning para detecção de pneumonia e tuberculose a partir de radiografias do tórax.",
    descricao: [
      "A PulmoVision é o projecto principal da QUANTA: uma plataforma que usa um modelo de deep learning para apoiar a detecção de pneumonia e tuberculose em radiografias do tórax. É composta por três partes: o modelo de aprendizagem profunda, uma API e um frontend web construído em Django.",
      "O projecto foi migrado para um ramo totalmente local, eliminando dependências de serviços remotos como Cloudinary, PostgreSQL remoto e CDN, tornando-o mais fácil de instalar e correr em ambientes com conectividade limitada.",
      "A PulmoVision é também o tema do meu trabalho de conclusão de curso (TCC) e entrou no programa de aceleração LISPA Jumpstart como projecto de destaque.",
    ],
    papel: "Fundador & desenvolvedor full-stack",
    tecnologias: ["Django", "Python", "Deep Learning", "PostgreSQL"],
    estado: "em-desenvolvimento",
    destaque: true,
    objectivo:
      "Apoiar a detecção de pneumonia e tuberculose a partir de radiografias do tórax, com um modelo de deep learning acessível através de uma interface web.",
    solucao:
      "Plataforma em três partes: o modelo de aprendizagem profunda, uma API que o serve e um frontend web construído em Django.",
    funcionalidades: [
      "Modelo de deep learning para pneumonia e tuberculose em radiografias do tórax",
      "API que expõe o modelo",
      "Frontend web em Django",
      "Ramo totalmente local, sem dependências de serviços remotos",
    ],
    decisoesTecnicas: [
      "Arquitectura em três partes: modelo, API e frontend",
      "Migração para um ramo totalmente local, eliminando Cloudinary, PostgreSQL remoto e CDN",
      "Instalação e execução simplificadas para ambientes com conectividade limitada",
    ],
  },
  {
    slug: "quanta-learn",
    nome: "QUANTA Learn",
    resumo: "Plataforma de aprendizagem de inglês com gamificação e inteligência artificial.",
    descricao: [
      "A QUANTA Learn é uma plataforma web e móvel de aprendizagem de inglês, alojada em app.quantalearn.ao. O frontend web é construído em React, Vite e Tailwind CSS v4, com uma identidade visual verde e âmbar.",
      "Inclui um sistema de permissões baseado em papéis, autenticação, um painel de administração completo (utilizadores, assinaturas, newsletter, cursos), gamificação (XP, sequências e progressão por níveis CEFR), integração com a IA Gemini, e comunicação em tempo real via Socket.io com Redis.",
      "A aplicação móvel é construída em React Native (JavaScript, sem Expo). O alojamento foi resolvido com um túnel Cloudflare, por causa dos requisitos de WebSocket e tarefas cron.",
    ],
    papel: "Fundador & desenvolvedor full-stack",
    tecnologias: ["React", "Vite", "Tailwind CSS", "React Native", "Socket.io", "Redis"],
    estado: "em-desenvolvimento",
    destaque: true,
    url: "https://app.quantalearn.ao",
    objectivo:
      "Oferecer uma plataforma web e móvel de aprendizagem de inglês, motivadora e com apoio de inteligência artificial.",
    solucao:
      "Aplicação web em React, Vite e Tailwind CSS v4, com aplicação móvel em React Native, gamificação, integração com a IA Gemini e comunicação em tempo real.",
    funcionalidades: [
      "Autenticação e sistema de permissões baseado em papéis",
      "Painel de administração: utilizadores, assinaturas, newsletter e cursos",
      "Gamificação com XP, sequências (streaks) e progressão por níveis CEFR",
      "Integração com a IA Gemini",
      "Comunicação em tempo real com Socket.io e Redis",
      "Aplicação móvel em React Native",
    ],
    decisoesTecnicas: [
      "Tailwind CSS v4 com identidade visual verde e âmbar",
      "React Native em JavaScript, sem Expo",
      "Túnel Cloudflare para o alojamento, por causa dos requisitos de WebSocket e tarefas cron",
    ],
    desafios: [
      "Alojar WebSockets e tarefas cron de forma fiável, resolvido com um túnel Cloudflare",
    ],
  },
  {
    slug: "zero-barreiras",
    nome: "Zero Barreiras",
    resumo: "Ferramenta de reconhecimento de Língua de Sinais Angolana.",
    descricao: [
      "O Zero Barreiras é uma ferramenta de reconhecimento de Língua de Sinais Angolana, construída com MediaPipe para rastreio de gestos e a IA Gemini para interpretação, com o objectivo de reduzir barreiras de comunicação para a comunidade surda em Angola.",
    ],
    papel: "Desenvolvedor",
    tecnologias: ["MediaPipe", "Gemini AI", "Python"],
    estado: "concluido",
    destaque: true,
    objectivo:
      "Reduzir barreiras de comunicação para a comunidade surda em Angola, através do reconhecimento da Língua de Sinais Angolana.",
    solucao:
      "Ferramenta que combina o rastreio de gestos com MediaPipe e a interpretação feita pela IA Gemini.",
    funcionalidades: [
      "Rastreio de gestos com MediaPipe",
      "Interpretação com a IA Gemini",
      "Foco na Língua de Sinais Angolana",
    ],
    decisoesTecnicas: [
      "MediaPipe para o rastreio de gestos e Gemini AI para a interpretação",
    ],
  },
  {
    slug: "recruta-app",
    nome: "RecrutaApp",
    resumo: "Aplicação de recrutamento construída em Next.js.",
    descricao: [
      "Aplicação de recrutamento em Next.js, onde trabalhei sobretudo na padronização da apresentação de dados através de tabelas responsivas.",
    ],
    papel: "Desenvolvedor",
    tecnologias: ["Next.js", "React"],
    estado: "concluido",
    destaque: false,
    objectivo: "Apoiar processos de recrutamento com uma aplicação web em Next.js.",
    solucao:
      "Padronização da apresentação de dados através de tabelas responsivas, que se adaptam a qualquer tamanho de ecrã.",
    funcionalidades: ["Tabelas responsivas com apresentação de dados padronizada"],
  },
];
