import { NavLink } from 'react-router-dom'

const linksNavegacao = [
  { para: '/', texto: 'Início' },
  { para: '/sobre', texto: 'Sobre' },
  { para: '/projetos', texto: 'Projetos' },
  { para: '/habilidades', texto: 'Habilidades' },
  { para: '/servicos', texto: 'Serviços' },
  { para: '/contato', texto: 'Contato' },
]

  {/*{ para: '/experiencia', texto: 'Experiência' },
     para: '/blog', texto: 'Blog' },*/}

function MenuMobile({ aberto, fechar }) {
  if (!aberto) return null

  return (
    <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <nav className="container-custom py-4">
        <ul className="flex flex-col gap-2">
          {linksNavegacao.map((link) => (
            <li key={link.para}>
              <NavLink
                to={link.para}
                onClick={fechar}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                {link.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MenuMobile