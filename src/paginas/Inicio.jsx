import SecaoHero from '../componentes/inicio/SecaoHero'
import SecaoEstatisticas from '../componentes/inicio/SecaoEstatisticas'
import ServicosDestaque from '../componentes/inicio/ServicosDestaque'
import ProjetosDestaque from '../componentes/inicio/ProjetosDestaque'
import SecaoCTA from '../componentes/inicio/SecaoCTA'

function Inicio() {
  return (
    <div>
      <SecaoHero />
      {/* <SecaoEstatisticas /> */}
      <ServicosDestaque />
      <ProjetosDestaque />
      <SecaoCTA />
    </div>
  )
}

export default Inicio