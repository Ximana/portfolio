import { ExternalLink, Github } from 'lucide-react'
import Card from '../comum/Card'
import Badge from '../comum/Badge'
import Botao from '../comum/Botao'

import agendaQuanta from "../../assets/projectos/imagens/quanta_agenda.svg"
import ecomerce from "../../assets/projectos/imagens/ecomerce_moderno.png"
import meteoApp from "../../assets/projectos/imagens/meteo_app.svg"

function ProjetosDestaque() {
  const projetos = [
    {
      id: 1,
      imagem: agendaQuanta, // Imagem do projeto (pode ser uma URL ou importação) 
      titulo: 'Agenda Escolar Quanta',
      descricao: 'App web PWA para organização de estudos.',
      tecnologias: ['React', 'TailwindCSS' ,'Firebase'],
      demo: 'https://agenda-quanta.web.app/',
      github: 'https://github.com/Ximana/agenda-quanta',
    },
    {
      id: 2,
      imagem: ecomerce,
      titulo: 'E-commerce Moderno',
      descricao: 'Plataforma completa de vendas online com painel administrativo.',
      tecnologias: ['Django', 'PostgreSQL', 'Cloudinary'],
      demo: 'https://ecommerce-art-decor.onrender.com/',
      github: 'https://github.com/Ximana/ecommerce-Art-Decor',
    },
    {
      id: 3,
      imagem: meteoApp,
      titulo: 'Meteo',
      descricao: 'App web de dados meteorológicas em tempo real, previsões e mapas interativos.',
      tecnologias: ['React', 'Openweather API', 'API REST'],
      demo: 'https://meteo-7504e.web.app/',
      github: 'https://github.com/Ximana/Meteo',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Alguns dos meus trabalhos mais recentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {projetos.map((projeto) => (
            <Card key={projeto.id}>
              {/* Imagem do Projeto */}
              <img src={projeto.imagem} className="w-full h-48 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-lg mb-4" />

              {/* Conteúdo */}
              <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
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
                <a
                  href={projeto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <ExternalLink size={16} />
                  <span>Ver</span>
                </a>
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:underline"
                >
                  <Github size={16} />
                  <span>Código</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Botao para="/projetos" variante="primary">
            Ver Todos os Projetos
          </Botao>
        </div>
      </div>
    </section>
  )
}

export default ProjetosDestaque