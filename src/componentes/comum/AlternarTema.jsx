import { Sun, Moon } from 'lucide-react'
import { useTema } from '../../contexto/TemaContexto'

function AlternarTema() {
  const { temaDark, alternarTema } = useTema()

  return (
    <button
      onClick={alternarTema}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Alternar tema"
    >
      {temaDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default AlternarTema