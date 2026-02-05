import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import Card from "../componentes/comum/Card";
import Badge from "../componentes/comum/Badge";

import agendaQuanta from "../assets/projectos/imagens/quanta_agenda.svg"
import ecomerce from "../assets/projectos/imagens/ecomerce_moderno.png"
import meteoApp from "../assets/projectos/imagens/meteo_app.svg"
import pulmovision from "../assets/projectos/imagens/pulmovision.png"
import cinema from "../assets/projectos/imagens/cinema.png"


function Projetos() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const filtros = [
    { id: "todos", nome: "Todos" },
    { id: "web", nome: "Web" },
    { id: "mobile", nome: "Mobile" },
    { id: "desktop", nome: "Desktop" },
  ];

  const projetos = [
    {
      id: 1,
      imagem: ecomerce,
      slug: "ecommerce-moderno",
      titulo: "E-commerce Moderno",
      descricao:
        "Plataforma completa de vendas online com painel administrativo.",
      categoria: "web",
      tecnologias: ["Django", "PostgreSQL", "Cloudinary"],
      demo: "https://ecommerce-art-decor.onrender.com/",
      github: "https://github.com/Ximana/ecommerce-Art-Decor",
    },
    {
      id: 2,
      imagem: agendaQuanta,
      slug: "Agenda escolar",
      titulo: "Agenda Escolar Quanta",
      descricao: "App web PWA para organização de estudos.",
      categoria: "web",
      tecnologias: ["React", "TailwindCSS", "Firebase"],
      demo: "https://agenda-quanta.web.app/",
      github: "https://github.com/Ximana/agenda-quanta",
    },
    {
      id: 3,
      imagem: meteoApp,
      slug: "Meteo",
      titulo: "Meteo",
      descricao: "Aplicativo mobile para gestão de tarefas e produtividade.",
      categoria: "web",
      tecnologias: ["React Native", "Openweather API"],
      demo: 'https://meteo-7504e.web.app/',
      github: 'https://github.com/Ximana/Meteo',
    },
    {
      id: 4,
      imagem: pulmovision,
      slug: "PulmoVision",
      titulo: "PulmoVision",
      descricao: "Sistema para detecção de doenças pulmonares",
      categoria: "web",
      tecnologias: ["React", "Django", "Tensorflow"],
      demo: 'https://pulmovision.onrender.com/',
      github: 'https://github.com/Ximana/PulmoVision',
    },
    {
      id: 5,
      imagem: cinema,
      slug: "Cinema",
      titulo: "Cinema App",
      descricao: "App mobile que permite aos usuários comprar ingressos de cinema, reservar assentos e gerenciar suas reservas",
      categoria: "mobile",
      tecnologias: ["React Native", "Django (API)", "API rest"],
      demo: '',
      github: 'https://github.com/Ximana/cinema-app',
    },
  ];

  const projetosFiltrados =
    filtroAtivo === "todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtroAtivo);

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meus Projetos</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setFiltroAtivo(filtro.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filtroAtivo === filtro.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filtro.nome}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosFiltrados.map((projeto) => (
            <Card key={projeto.id}>
              {/* Imagem */}
              <img src={projeto.imagem} className="w-full h-48 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-lg mb-4" />

              {/* Conteúdo */}
              <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {projeto.descricao}
              </p>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projeto.tecnologias.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <Link
                  to={`/projetos/${projeto.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  Ver Detalhes
                </Link>
                <a
                  href={projeto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:underline"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projetos;
