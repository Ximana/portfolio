import { Code2, FolderGit2, Users, Coffee } from 'lucide-react'

function SecaoEstatisticas() {
  const estatisticas = [
    { icone: Code2, numero: '5+', texto: 'Anos de Experiência' },
    { icone: FolderGit2, numero: '10+', texto: 'Projetos Concluídos' },
    { icone: Users, numero: '15+', texto: 'Clientes Satisfeitos' },
    { icone: Coffee, numero: '∞', texto: 'Xícaras de Café' },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {estatisticas.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                <stat.icone size={32} />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.numero}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.texto}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecaoEstatisticas