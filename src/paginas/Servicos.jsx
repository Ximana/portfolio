import { Monitor, Smartphone, MessageSquare, Zap, Check } from 'lucide-react'
import Card from '../componentes/comum/Card'
import Botao from '../componentes/comum/Botao'

function Servicos() {
  const servicos = [
    {
      icone: Monitor,
      titulo: 'Desenvolvimento Web',
      descricao: 'Criação de sites e aplicações web modernas, responsivas e performáticas.',
      inclusos: [
        'Sites institucionais',
        'Landing pages',
        'E-commerce',
        'Web apps',
        'Painel administrativo',
      ],
      preco: 'A partir de R$ 5.000',
    },
    {
      icone: Smartphone,
      titulo: 'Desenvolvimento Mobile',
      descricao: 'Aplicativos mobile nativos e híbridos para iOS e Android.',
      inclusos: [
        'Apps nativos',
        'Apps híbridos',
        'Progressive Web Apps',
        'Integração com APIs',
        'Publicação nas lojas',
      ],
      preco: 'A partir de R$ 8.000',
    },
    {
      icone: MessageSquare,
      titulo: 'Consultoria Técnica',
      descricao: 'Análise de sistemas, otimização de performance e code review.',
      inclusos: [
        'Análise de código',
        'Otimização de performance',
        'Arquitetura de software',
        'Mentoria técnica',
        'Code review',
      ],
      preco: 'R$ 200/hora',
    },
  ]

  const processo = [
    {
      numero: '01',
      titulo: 'Briefing',
      descricao: 'Entendimento das necessidades e objetivos do projeto.',
    },
    {
      numero: '02',
      titulo: 'Proposta',
      descricao: 'Apresentação de proposta técnica e orçamento detalhado.',
    },
    {
      numero: '03',
      titulo: 'Desenvolvimento',
      descricao: 'Execução do projeto com atualizações constantes.',
    },
    {
      numero: '04',
      titulo: 'Testes',
      descricao: 'Testes rigorosos de qualidade e performance.',
    },
    {
      numero: '05',
      titulo: 'Entrega',
      descricao: 'Deploy e treinamento para uso da solução.',
    },
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Serviços Oferecidos</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções completas para transformar suas ideias em realidade
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {servicos.map((servico, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex-grow">
                <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-6">
                  <servico.icone className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{servico.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {servico.descricao}
                </p>

                <div className="space-y-2 mb-6">
                  {servico.inclusos.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {servico.preco}
                </div>
                <Botao para="/contato" variante="primary" className="w-full justify-center">
                  Solicitar Orçamento
                </Botao>
              </div>
            </Card>
          ))}
        </div>

        {/* Processo de Trabalho */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Processo de Trabalho</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {processo.map((etapa, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-2xl font-bold rounded-full mb-4">
                  {etapa.numero}
                </div>
                <h3 className="text-xl font-bold mb-2">{etapa.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {etapa.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-lg mb-6 opacity-90">
            Entre em contato e vamos discutir seu projeto
          </p>
          <Botao 
            para="/contato" 
            className="bg-white text-primary-600 hover:bg-gray-100"
          >
            Fale Comigo
          </Botao>
        </div>
      </div>
    </div>
  )
}

export default Servicos