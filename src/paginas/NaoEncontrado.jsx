import { Link } from 'react-router-dom'
import { Home, Search, ArrowLeft } from 'lucide-react'
import Botao from '../componentes/comum/Botao'

function NaoEncontrado() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Número 404 */}
          <div className="text-9xl font-bold text-gradient mb-8">
            404
          </div>

          {/* Ilustração */}
          <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-full opacity-20" />

          {/* Mensagem */}
          <h1 className="text-4xl font-bold mb-4">
            Ops! Página não encontrada
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            A página que você está procurando não existe ou foi movida.
            Tente usar a navegação abaixo para encontrar o que procura.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Botao para="/" variante="primary">
              <Home className="inline-block mr-2" size={20} />
              Voltar para Home
            </Botao>
            <Botao para="/projetos" variante="secondary">
              <Search className="inline-block mr-2" size={20} />
              Ver Projetos
            </Botao>
          </div>

          {/* Links Úteis */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Links Úteis</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/"
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="font-medium">Início</div>
              </Link>
              <Link
                to="/sobre"
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="font-medium">Sobre</div>
              </Link>
              <Link
                to="/projetos"
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="font-medium">Projetos</div>
              </Link>
              <Link
                to="/contato"
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="font-medium">Contato</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NaoEncontrado