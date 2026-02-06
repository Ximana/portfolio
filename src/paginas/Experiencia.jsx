import { Briefcase, GraduationCap } from 'lucide-react'
import Badge from '../componentes/comum/Badge'

function Experiencia() {
  
  const experiencias = [
    
    {
      cargo: 'Desenvolvedor Full Stack',
      empresa: 'Empresa Tech XYZ',
      periodo: 'Jan 2023 - Presente',
      localizacao: 'Remoto',
      descricao: 'Desenvolvimento de aplicações web modernas usando React e Node.js.',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      cargo: 'Desenvolvedor Frontend',
      empresa: 'Startup Inovadora',
      periodo: 'Jun 2021 - Dez 2022',
      localizacao: 'São Paulo, SP',
      descricao: 'Criação de interfaces responsivas e performáticas para aplicações SaaS.',
      tecnologias: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      cargo: 'Desenvolvedor Junior',
      empresa: 'Agência Digital',
      periodo: 'Jan 2020 - Mai 2021',
      localizacao: 'Rio de Janeiro, RJ',
      descricao: 'Desenvolvimento de sites e landing pages para diversos clientes.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },
  ]

  const educacao = [
    {
      curso: 'Licenciatura em Ciência da Computação (IMETRO)',
      instituicao: 'Instituto Superior Metropolitano de Angola',
      periodo: '2021 - 2025',
      descricao: 'Formação sólida em Computação.',
    },
    {
      curso: 'Curso de Desenvolvimento Web Full Stack',
      instituicao: 'Plataforma Online',
      periodo: '2019',
      descricao: 'Especialização em tecnologias de desenvolvimento web.',
    },
    {
      curso: 'Informática de Gestão',
      instituicao: 'Instituto Médio Comercial de Luanda (IMCL)',
      periodo: '2019',
      descricao: 'Fundamentos em informática, e bases de organização e administração de empresas.',
    },
  ]

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experiência Profissional</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Minha trajetória profissional e acadêmica
          </p>
        </div>

        {/* Experiência Profissional */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary-600 dark:text-primary-400" size={32} />
            <h2 className="text-3xl font-bold">Experiência</h2>
          </div>

          <div className="space-y-8">
            {experiencias.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary-600 dark:border-primary-400">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400" />
                
                <div className="card mb-0">
                  <h3 className="text-xl font-bold mb-1">{exp.cargo}</h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.empresa}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {exp.periodo} • {exp.localizacao}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.descricao}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tecnologias.map((tech, idx) => (
                      <Badge key={idx}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educação */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary-600 dark:text-primary-400" size={32} />
            <h2 className="text-3xl font-bold">Educação</h2>
          </div>

          <div className="space-y-8">
            {educacao.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary-600 dark:border-primary-400">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400" />
                
                <div className="card mb-0">
                  <h3 className="text-xl font-bold mb-1">{edu.curso}</h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.instituicao}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {edu.periodo}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiencia