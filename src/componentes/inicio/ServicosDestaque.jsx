import { Monitor, Smartphone, MessageSquare } from 'lucide-react'
import Card from '../comum/Card'

function ServicosDestaque() {
  const servicos = [
    {
      icone: Monitor,
      titulo: 'Desenvolvimento Web',
      descricao: 'Criação de sites e aplicações web modernas e responsivas.',
    },
    {
      icone: Smartphone,
      titulo: 'Aplicações Mobile',
      descricao: 'Desenvolvimento de aplicativos mobile nativos e híbridos para iOS e Android.',
    },
    {
      icone: MessageSquare,
      titulo: 'Consultoria Técnica',
      descricao: 'Análise de sistemas, otimização de performance e code review.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções para transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <servico.icone size={32} />
                </div>
                <h3 className="text-xl font-semibold">{servico.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {servico.descricao}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicosDestaque