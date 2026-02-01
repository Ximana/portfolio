import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TemaProvider } from './contexto/TemaContexto'
import Layout from './componentes/layout/Layout'
import ScrollParaTopo from './componentes/comum/ScrollParaTopo'

// Páginas
import Inicio from './paginas/Inicio'
import Sobre from './paginas/Sobre'
import Projetos from './paginas/Projetos'
import ProjetoDetalhe from './paginas/ProjetoDetalhe'
import Habilidades from './paginas/Habilidades'
import Experiencia from './paginas/Experiencia'
import Servicos from './paginas/Servicos'
import Blog from './paginas/Blog'
import PostBlog from './paginas/PostBlog'
import Contato from './paginas/Contato'
import NaoEncontrado from './paginas/NaoEncontrado'

function App() {
  return (
    <TemaProvider>
      <Router>
        <ScrollParaTopo />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="projetos" element={<Projetos />} />
            <Route path="projetos/:id" element={<ProjetoDetalhe />} />
            <Route path="habilidades" element={<Habilidades />} />
            <Route path="experiencia" element={<Experiencia />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<PostBlog />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Route>
        </Routes>
      </Router>
    </TemaProvider>
  )
}

export default App