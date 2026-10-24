import type { GrupoCompetencias } from "@/tipos";

export const gruposCompetencias: GrupoCompetencias[] = [
  {
    area: "Frontend",
    itens: ["Next.js", "React", "React Native", "React Navigation", "Vite", "Tailwind CSS", "TypeScript"],
  },
  {
    area: "Backend",
    itens: ["Django", "Python", "FastAPI", "Node.js", "Express", "APIs REST", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    area: "Inteligência Artificial",
    itens: ["Deep Learning", "TensorFlow e Keras", "PyTorch", "OpenCV", "Gemini AI", "MediaPipe", "Modelos de visão computacional"],
  },
  {
    area: "Dados",
    itens: ["Análise de dados", "Big Data (Hadoop, PySpark)", "pandas", "Modelação de dados", "Relatórios e dashboards"],
  },
  {
    area: "Infraestrutura",
    itens: ["Cloudflare", "Docker", "Nginx", "Redis", "Socket.io", "Testes com Jest", "Redes e auto-hospedagem"],
  },
];
