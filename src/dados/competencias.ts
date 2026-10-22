import type { GrupoCompetencias } from "@/tipos";

export const gruposCompetencias: GrupoCompetencias[] = [
  {
    area: "Frontend",
    itens: ["Next.js", "React", "React Native", "Vite", "Tailwind CSS", "TypeScript"],
  },
  {
    area: "Backend",
    itens: ["Django", "Python", "Node.js", "APIs REST", "PostgreSQL"],
  },
  {
    area: "Inteligência Artificial",
    itens: ["Deep Learning", "Gemini AI", "MediaPipe", "Modelos de visão computacional"],
  },
  {
    area: "Dados",
    itens: ["Análise de dados", "Modelação de dados", "Relatórios e dashboards"],
  },
  {
    area: "Infraestrutura",
    itens: ["Cloudflare", "Redis", "Socket.io", "Redes e auto-hospedagem"],
  },
];
