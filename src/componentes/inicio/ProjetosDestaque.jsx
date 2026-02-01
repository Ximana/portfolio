import { ExternalLink, Github } from 'lucide-react'
import Card from '../comum/Card'
import Badge from '../comum/Badge'
import Botao from '../comum/Botao'

function ProjetosDestaque() {
  const projetos = [
    {
      id: 1,
      titulo: 'E-commerce Moderno',
      descricao: 'Plataforma completa de vendas online com painel administrativo.',
      tecnologias: ['React', 'Node.js', 'MongoDB'],
      demo: 'https://demo.com',
      github: 'https://github.com',
    },
    {
      id: 2,
      titulo: 'Dashboard Analítico',
      descricao: 'Sistema de visualização de dados com gráficos interativos.',
      tecnologias: ['React', 'D3.js', 'Firebase'],
      demo: 'https://demo.com',
      github: 'https://github.com',
    },
    {
      id: 3,
      titulo: 'App de Gestão',
      descricao: 'Aplicativo mobile para gestão de tarefas e produtividade.',
      tecnologias: ['React Native', 'Redux', 'API REST'],
      demo: 'https://demo.com',
      github: 'https://github.com',
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
              <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-lg mb-4" />

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
                  <span>Demo</span>
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