import { Outlet } from 'react-router-dom'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecalho />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Rodape />
    </div>
  )
}

export default Layout