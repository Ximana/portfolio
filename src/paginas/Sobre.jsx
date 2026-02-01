function Sobre() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Conheça mais sobre minha trajetória e paixões
            </p>
          </div>

          {/* Conteúdo Principal */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Foto */}
            <div className="flex justify-center items-start">
              <div className="w-full max-w-sm h-96 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-2xl" />
            </div>

            {/* Texto */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Olá! Sou [Seu Nome]</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Sou um desenvolvedor apaixonado por criar experiências digitais incríveis.
                Com mais de 5 anos de experiência, trabalhei em diversos projetos
                desafiadores que me permitiram crescer profissionalmente.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Minha jornada começou com curiosidade sobre como as coisas funcionam
                na web e se transformou em uma carreira dedicada a construir
                soluções inovadoras e eficientes.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Quando não estou codificando, gosto de aprender novas tecnologias,
                contribuir com projetos open source e compartilhar conhecimento
                através de artigos e mentorias.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Meus Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2">Inovação</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Sempre buscando novas soluções e tecnologias
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Código limpo e manutenível é minha prioridade
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Colaboração</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Trabalho em equipe e comunicação efetiva
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre