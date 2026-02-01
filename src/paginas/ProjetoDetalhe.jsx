import { useParams, Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import Badge from '../componentes/comum/Badge'
import Botao from '../componentes/comum/Botao'

function ProjetoDetalhe() {
  const { id } = useParams()

  // Dados de exemplo (viriam de uma API ou arquivo de dados)
  const projeto = {
    id: 1,
    titulo: 'E-commerce Moderno',
    descricao: 'Plataforma completa de vendas online com painel administrativo, sistema de pagamentos integrado e gestão de estoque.',
    categoria: 'Web',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    cliente: 'Empresa XYZ',
    data: 'Março 2024',
    duracao: '3 meses',
    papel: 'Fullstack Developer',
    demo: 'https://demo.com',
    github: 'https://github.com',
    desafios: [
      'Integração com múltiplos gateways de pagamento',
      'Otimização de performance para grande volume de produtos',
      'Sistema de recomendações personalizado',
    ],
    solucoes: [
      'Implementação de cache estratégico com Redis',
      'Lazy loading e code splitting para melhor performance',
      'Algoritmo de ML para recomendações baseadas em histórico',
    ],
    resultados: [
      'Aumento de 40% nas conversões',
      'Redução de 60% no tempo de carregamento',
      'Interface responsiva em todos os dispositivos',
    ],
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Botão Voltar */}
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          Voltar para Projetos
        </Link>

        {/* Hero do Projeto */}
        <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-2xl mb-12" />

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{projeto.titulo}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {projeto.descricao}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Desafios</h2>
              <ul className="space-y-2">
                {projeto.desafios.map((desafio, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{desafio}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Soluções</h2>
              <ul className="space-y-2">
                {projeto.solucoes.map((solucao, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">✓</span>
                    <span className="text-gray-600 dark:text-gray-400">{solucao}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Resultados</h2>
              <ul className="space-y-2">
                {projeto.resultados.map((resultado, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">★</span>
                    <span className="text-gray-600 dark:text-gray-400">{resultado}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Detalhes */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Detalhes do Projeto</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Cliente</div>
                  <div className="font-medium">{projeto.cliente}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Data</div>
                  <div className="font-medium">{projeto.data}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Duração</div>
                  <div className="font-medium">{projeto.duracao}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Papel</div>
                  <div className="font-medium">{projeto.papel}</div>
                </div>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <Botao href={projeto.demo} variante="primary" className="w-full justify-center">
                <ExternalLink className="inline-block mr-2" size={20} />
                Ver Demo
              </Botao>
              <Botao href={projeto.github} variante="secondary" className="w-full justify-center">
                <Github className="inline-block mr-2" size={20} />
                Ver Código
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjetoDetalhe