import type { Projecto } from "@/tipos";

/**
 * Agenda QUANTA: agenda escolar online e instalável (PWA).
 */
export const agendaQuanta: Projecto = {
  slug: "agenda-quanta",
  nome: "Agenda QUANTA",
  resumo:
    "Agenda escolar online e instalável para organizar disciplinas, horários, tarefas, provas e lembretes num só lugar.",
  descricao: [
    "A Agenda QUANTA é uma aplicação web progressiva (PWA) para a vida académica. O estudante regista disciplinas e horários, acompanha tarefas e provas com prazos e notas, e recebe lembretes antes de cada data importante.",
    "Foi pensada para Angola, com níveis de ensino do primário ao doutoramento e períodos lectivos como trimestre, semestre ou ano lectivo. Funciona no telemóvel e no computador e pode ser instalada como uma app.",
  ],
  papel: "Desenvolvedor full-stack",
  tecnologias: ["React", "Vite", "Tailwind CSS", "Firebase", "PWA"],
  estado: "concluido",
  imagem: "/imagens/projectos/agenda-quanta-capa.jpg",
  destaque: false,
  // Ligações opcionais (só aparecem os botões que tiverem valor; apague o "//" para activar):
  // url: "https://endereco-do-projecto-online",
  // urlCodigo: "https://github.com/utilizador/repositorio",

  numeros: [
    { valor: "~31 000", rotulo: "Linhas de código" },
    { valor: "3", rotulo: "Escalas de notas (0-5, 0-10, 0-20)" },
  ],

  objectivo:
    "Ajudar estudantes de qualquer nível a organizar o estudo e a não falhar prazos, com uma ferramenta gratuita e acessível a partir de qualquer dispositivo.",
  solucao:
    "Uma aplicação mobile-first com um painel de calendário semanal e mensal que destaca as próximas aulas, provas e tarefas.",
  problema: [
    "Horários, trabalhos e provas ficam espalhados por cadernos e mensagens.",
    "As agendas genéricas não têm disciplinas, professores, provas nem notas.",
  ],

  gruposFuncionalidades: [
    {
      titulo: "Organização",
      itens: ["Períodos lectivos, disciplinas com vários horários e fichas de professores", "Calendário semanal e mensal no painel inicial"],
    },
    {
      titulo: "Planeamento",
      itens: ["Tarefas com prazo e prioridade", "Provas com data, nota e peso, e lembretes associados"],
    },
    {
      titulo: "Conta e instalação",
      itens: ["Registo com email ou Google, com onboarding guiado", "Instalável no telemóvel e no computador", "Tema claro ou escuro e preferências de data, hora e notas"],
    },
  ],

  decisoesTecnicas: [
    "Firebase como backend gerido (autenticação, base de dados, fotografias e alojamento), sem servidor próprio",
    "Dados isolados por utilizador: as regras de segurança só permitem o acesso ao próprio dono",
  ],

  proximosPassos: [
    "Notificações push e por email",
    "Modo offline com sincronização",
    "Relatórios de desempenho por disciplina",
  ],
};
