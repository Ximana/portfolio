import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Badge from '../componentes/comum/Badge'

function PostBlog() {
  const { slug } = useParams()

  // Dados de exemplo
  const post = {
    titulo: 'Introdução aos React Hooks',
    categoria: 'Tutorial',
    data: '15 Jan 2024',
    tempoLeitura: '8 min',
    autor: 'Seu Nome',
    conteudo: `
      <p>React Hooks revolucionaram a forma como escrevemos componentes React. Introduzidos na versão 16.8, os Hooks permitem usar state e outros recursos do React sem escrever uma classe.</p>

      <h2>O que são Hooks?</h2>
      <p>Hooks são funções que permitem "conectar" os recursos de state e ciclo de vida do React a partir de componentes funcionais. Eles não funcionam dentro de classes — eles permitem usar React sem classes.</p>

      <h2>Por que usar Hooks?</h2>
      <p>Os Hooks resolvem diversos problemas que encontramos ao longo dos anos trabalhando com React:</p>
      <ul>
        <li>É difícil reutilizar lógica com state entre componentes</li>
        <li>Componentes complexos se tornam difíceis de entender</li>
        <li>Classes confundem tanto pessoas quanto máquinas</li>
      </ul>

      <h2>useState - O Hook Mais Básico</h2>
      <p>O useState é um Hook que permite adicionar state do React a componentes funcionais. Veja um exemplo:</p>
      
      <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}</code></pre>

      <h2>useEffect - Para Efeitos Colaterais</h2>
      <p>O useEffect permite realizar efeitos colaterais em componentes funcionais. É similar aos métodos componentDidMount, componentDidUpdate e componentWillUnmount combinados.</p>

      <h2>Conclusão</h2>
      <p>Os Hooks são uma adição poderosa ao React que torna o código mais limpo e reutilizável. Continue praticando e explorando outros Hooks disponíveis!</p>
    `,
  }

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        {/* Botão Voltar */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          Voltar para Blog
        </Link>

        {/* Header do Artigo */}
        <article>
          <header className="mb-12">
            <Badge className="mb-4">{post.categoria}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.titulo}</h1>
            
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {post.data}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {post.tempoLeitura}
              </span>
              <span>Por {post.autor}</span>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-2xl mb-8" />

            <button className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <Share2 size={18} />
              Compartilhar artigo
            </button>
          </header>

          {/* Conteúdo */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
              prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
              prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-ul:text-gray-600 dark:prose-ul:text-gray-400
              prose-li:marker:text-primary-600 dark:prose-li:marker:text-primary-400"
            dangerouslySetInnerHTML={{ __html: post.conteudo }}
          />
        </article>

        {/* Navegação entre posts */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Artigo Anterior</span>
              <Link to="/blog/outro-post" className="block text-primary-600 dark:text-primary-400 hover:underline mt-2">
                ← Título do Artigo Anterior
              </Link>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500 dark:text-gray-400">Próximo Artigo</span>
              <Link to="/blog/proximo-post" className="block text-primary-600 dark:text-primary-400 hover:underline mt-2">
                Título do Próximo Artigo →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostBlog