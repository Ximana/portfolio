import { Link } from 'react-router-dom'

function Botao({ children, para, href, tipo = 'button', variante = 'primary', tamanho = 'md', className = '', ...props }) {
  const classes = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }

  const tamanhos = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classesBase = `${classes[variante]} ${tamanhos[tamanho]} ${className}`

  // Link interno
  if (para) {
    return (
      <Link to={para} className={classesBase} {...props}>
        {children}
      </Link>
    )
  }

  // Link externo
  if (href) {
    return (
      <a
        href={href}
        className={classesBase}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  // Botão normal
  return (
    <button type={tipo} className={classesBase} {...props}>
      {children}
    </button>
  )
}

export default Botao