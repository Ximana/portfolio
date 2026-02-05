# Guia de Instalação e Uso - Portfolio

## Pré-requisitos

Antes de começar, você precisa ter instalado:
- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

### Passo 1: Extrair os arquivos
Extraia o conteúdo do projeto para uma pasta de sua escolha.

### Passo 2: Instalar dependências
Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Ou se preferir usar yarn:

```bash
yarn install
```

## Executando o Projeto

### Modo de Desenvolvimento
Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:3000`

### Build para Produção
Para criar uma versão otimizada para produção:

```bash
npm run build
```

### Preview da Build
Para visualizar a build de produção localmente:

```bash
npm run preview
```

## Estrutura do Projeto

```
portfolio-projeto/
├── public/                 # Arquivos públicos estáticos
├── src/
│   ├── assets/            # Imagens, fontes, etc.
│   │   ├── imagens/
│   │   │   ├── projetos/
│   │   │   ├── blog/
│   │   │   ├── perfil/
│   │   │   └── icones/
│   │   ├── fontes/
│   │   └── videos/
│   │
│   ├── componentes/       # Componentes React
│   │   ├── layout/       # Cabeçalho, Rodapé, Layout
│   │   ├── comum/        # Botão, Card, Badge, etc.
│   │   ├── inicio/       # Componentes da página inicial
│   │   ├── sobre/
│   │   ├── projetos/
│   │   ├── habilidades/
│   │   ├── experiencia/
│   │   ├── servicos/
│   │   ├── blog/
│   │   └── contato/
│   │
│   ├── paginas/          # Páginas principais
│   │   ├── Inicio.jsx
│   │   ├── Sobre.jsx
│   │   ├── Projetos.jsx
│   │   ├── ProjetoDetalhe.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Experiencia.jsx
│   │   ├── Servicos.jsx
│   │   ├── Blog.jsx
│   │   ├── PostBlog.jsx
│   │   ├── Contato.jsx
│   │   └── NaoEncontrado.jsx
│   │
│   ├── dados/            # Dados estáticos (a serem criados)
│   ├── contexto/         # Contextos React (Tema)
│   ├── hooks/            # Hooks customizados
│   ├── utils/            # Funções utilitárias
│   ├── estilos/          # Arquivos CSS
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada
│
├── .eslintrc.cjs         # Configuração do ESLint
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```