import { NavLink } from 'react-router-dom'

const linksNavegacao = [
  { para: '/', texto: 'Início' },
  { para: '/sobre', texto: 'Sobre' },
  { para: '/projetos', texto: 'Projetos' },
  { para: '/habilidades', texto: 'Habilidades' },
  { para: '/servicos', texto: 'Serviços' },
  { para: '/contato', texto: 'Contato' },
]

{/* Componente de barra de navegação completo com todos os links
  const linksNavegacao = [
  { para: '/', texto: 'Início' },
  { para: '/sobre', texto: 'Sobre' },
  { para: '/projetos', texto: 'Projetos' },
  { para: '/habilidades', texto: 'Habilidades' },
  { para: '/experiencia', texto: 'Experiência' },
  { para: '/servicos', texto: 'Serviços' },
  { para: '/blog', texto: 'Blog' },
  { para: '/contato', texto: 'Contato' },
]
   */}

function BarraNavegacao() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {linksNavegacao.map((link) => (
          <li key={link.para}>
            <NavLink
              to={link.para}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`
              }
            >
              {link.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BarraNavegacao