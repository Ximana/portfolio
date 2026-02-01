import { createContext, useContext, useEffect, useState } from 'react'

const TemaContexto = createContext()

export function TemaProvider({ children }) {
  // Inicializa o estado do tema
  const [temaDark, setTemaDark] = useState(() => {
    // Verifica se já existe preferência salva
    const temaSalvo = localStorage.getItem('tema')
    if (temaSalvo) {
      return temaSalvo === 'dark'
    }
    // Caso contrário, verifica a preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Aplica o tema ao carregar e quando mudar
  useEffect(() => {
    const root = document.documentElement
    
    if (temaDark) {
      root.classList.add('dark')
      localStorage.setItem('tema', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('tema', 'light')
    }
  }, [temaDark])

  // Função para alternar o tema
  const alternarTema = () => {
    setTemaDark(prev => !prev)
  }

  return (
    <TemaContexto.Provider value={{ temaDark, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  )
}

// Hook personalizado para usar o tema
export function useTema() {
  const contexto = useContext(TemaContexto)
  if (!contexto) {
    throw new Error('useTema deve ser usado dentro de TemaProvider')
  }
  return contexto
}