import { Code2, Database, Layout, Smartphone, Cloud, Users } from 'lucide-react'
import Card from '../componentes/comum/Card'

function Habilidades() {
  const categorias = [
    {
      nome: 'Frontend',
      icone: Layout,
      habilidades: [
        { nome: 'React', nivel: 90 },
        { nome: 'JavaScript', nivel: 95 },
        { nome: 'TypeScript', nivel: 85 },
        { nome: 'Tailwind CSS', nivel: 90 },
        { nome: 'HTML/CSS', nivel: 95 },
      ],
    },
    {
      nome: 'Backend',
      icone: Code2,
      habilidades: [
        { nome: 'Node.js', nivel: 85 },
        { nome: 'Express', nivel: 80 },
        { nome: 'Python', nivel: 75 },
        { nome: 'Django', nivel: 75 },
        { nome: 'API REST', nivel: 90 },
      ],
    },
    {
      nome: 'Banco de Dados',
      icone: Database,
      habilidades: [
        { nome: 'MongoDB', nivel: 85 },
        { nome: 'PostgreSQL', nivel: 80 },
        { nome: 'MySQL', nivel: 75 },
        { nome: 'Firebase', nivel: 80 },
      ],
    },
    {
      nome: 'Mobile',
      icone: Smartphone,
      habilidades: [
        { nome: 'React Native', nivel: 80 },
        { nome: 'PWA', nivel: 85 },
      ],
    },
    {
      nome: 'DevOps & Ferramentas',
      icone: Cloud,
      habilidades: [
        { nome: 'Git', nivel: 90 },
        { nome: 'Docker', nivel: 75 },
        { nome: 'AWS', nivel: 70 },
        { nome: 'CI/CD', nivel: 75 },
      ],
    },
    {
      nome: 'Soft Skills',
      icone: Users,
      habilidades: [
        { nome: 'Trabalho em Equipe', nivel: 95 },
        { nome: 'Comunicação', nivel: 90 },
        { nome: 'Resolução de Problemas', nivel: 90 },
        { nome: 'Gestão de Tempo', nivel: 85 },
      ],
    },
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Habilidades Técnicas</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categorias.map((categoria, index) => (
            <Card key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <categoria.icone className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold">{categoria.nome}</h2>
              </div>

              <div className="space-y-4">
                {categoria.habilidades.map((habilidade, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{habilidade.nome}</span>
                      <span className="text-gray-600 dark:text-gray-400">{habilidade.nivel}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${habilidade.nivel}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Habilidades