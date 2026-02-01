import { ArrowRight } from 'lucide-react'
import Botao from '../comum/Botao'

function SecaoCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Tenho disponibilidade para novos projetos. Entre em contato e vamos transformar suas ideias em realidade!
          </p>
          <Botao 
            para="/contato" 
            className="bg-white text-primary-600 hover:bg-gray-100"
          >
            Entre em Contato
            <ArrowRight className="inline-block ml-2" size={20} />
          </Botao>
        </div>
      </div>
    </section>
  )
}

export default SecaoCTA