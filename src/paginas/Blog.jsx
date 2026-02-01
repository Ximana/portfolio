import { Link } from 'react-router-dom'
import { Calendar, Clock } from 'lucide-react'
import Card from '../componentes/comum/Card'
import Badge from '../componentes/comum/Badge'

function Blog() {
  const posts = [
    {
      id: 1,
      slug: 'introducao-react-hooks',
      titulo: 'Introdução aos React Hooks',
      resumo: 'Aprenda os conceitos básicos e como usar hooks no React para criar componentes mais limpos e eficientes.',
      categoria: 'Tutorial',
      data: '15 Jan 2024',
      tempoLeitura: '8 min',
      destaque: true,
    },
    {
      id: 2,
      slug: 'tailwind-css-guia-completo',
      titulo: 'Tailwind CSS: Guia Completo',
      resumo: 'Tudo que você precisa saber sobre Tailwind CSS para criar interfaces modernas rapidamente.',
      categoria: 'CSS',
      data: '10 Jan 2024',
      tempoLeitura: '12 min',
      destaque: false,
    },
    {
      id: 3,
      slug: 'nodejs-api-rest',
      titulo: 'Criando uma API REST com Node.js',
      resumo: 'Passo a passo para construir uma API RESTful completa usando Node.js e Express.',
      categoria: 'Backend',
      data: '05 Jan 2024',
      tempoLeitura: '15 min',
      destaque: false,
    },
  ]

  const postDestaque = posts.find(p => p.destaque)
  const outrosPosts = posts.filter(p => !p.destaque)

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Artigos sobre desenvolvimento web, programação e tecnologia
          </p>
        </div>

        {/* Post em Destaque */}
        {postDestaque && (
          <Link to={`/blog/${postDestaque.slug}`} className="block mb-12">
            <Card className="overflow-hidden grid md:grid-cols-2 gap-0 p-0">
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary-400 to-secondary-600" />
              <div className="p-8">
                <Badge className="mb-4">{postDestaque.categoria}</Badge>
                <h2 className="text-3xl font-bold mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {postDestaque.titulo}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {postDestaque.resumo}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {postDestaque.data}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {postDestaque.tempoLeitura}
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Grid de Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outrosPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card>
                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-lg mb-4" />
                <Badge className="mb-3">{post.categoria}</Badge>
                <h3 className="text-xl font-bold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {post.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.resumo}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.data}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.tempoLeitura}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog