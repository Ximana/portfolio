import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BarraNavegacao from './BarraNavegacao'
import MenuMobile from './MenuMobile'
import AlternarTema from '../comum/AlternarTema'

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gradient">
            Portfolio
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden md:block">
            <BarraNavegacao />
          </div>

          {/* Controles */}
          <div className="flex items-center gap-4">
            <AlternarTema />
            
            {/* Botão Menu Mobile */}
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Menu"
            >
              {menuAberto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <MenuMobile aberto={menuAberto} fechar={() => setMenuAberto(false)} />
    </header>
  )
}

export default Cabecalho