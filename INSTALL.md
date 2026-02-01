# 🚀 Guia de Instalação e Uso - Portfolio

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:
- Node.js (versão 16 ou superior)
- npm ou yarn

## 📦 Instalação

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

## 🏃 Executando o Projeto

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

## 📁 Estrutura do Projeto

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

## 🎨 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para adicionar suas informações:

**src/componentes/inicio/SecaoHero.jsx**
- Substitua "Seu Nome" pelo seu nome
- Atualize a profissão/cargo
- Modifique a descrição
- Adicione seus links de redes sociais

**src/componentes/layout/Rodape.jsx**
- Atualize links de redes sociais
- Modifique email de contato

### 2. Conteúdo das Páginas

**Sobre (src/paginas/Sobre.jsx)**
- Adicione sua história pessoal
- Substitua a imagem de perfil

**Projetos (src/paginas/Projetos.jsx)**
- Adicione seus projetos reais
- Substitua as imagens dos projetos
- Atualize links de demo e repositórios

**Habilidades (src/paginas/Habilidades.jsx)**
- Ajuste os níveis de habilidade
- Adicione/remova tecnologias

**Experiência (src/paginas/Experiencia.jsx)**
- Adicione suas experiências profissionais
- Atualize sua formação acadêmica

**Serviços (src/paginas/Servicos.jsx)**
- Modifique os serviços oferecidos
- Ajuste preços (se aplicável)

**Contato (src/paginas/Contato.jsx)**
- Atualize email, telefone e localização
- Configure integração com serviço de email

### 3. Cores e Estilos

**tailwind.config.js**
```javascript
colors: {
  primary: {
    // Modifique as cores primárias aqui
    500: '#3b82f6',
    600: '#2563eb',
  },
  // ... outras cores
}
```

**src/estilos/index.css**
- Personalize estilos globais
- Ajuste classes utilitárias

### 4. Imagens

Adicione suas imagens nas seguintes pastas:
- `src/assets/imagens/perfil/` - Fotos suas
- `src/assets/imagens/projetos/` - Screenshots de projetos
- `src/assets/imagens/blog/` - Imagens de artigos

### 5. Favicon e Logo

Substitua em `public/`:
- `favicon.ico` - Seu favicon
- Adicione seu logo

## 🔧 Funcionalidades Implementadas

✅ **Design Responsivo** - Funciona em todos os dispositivos
✅ **Modo Escuro/Claro** - Alternância de temas
✅ **Navegação Suave** - Transições entre páginas
✅ **Menu Mobile** - Menu hamburguer para dispositivos móveis
✅ **11 Páginas Completas** - Todas funcionais
✅ **Componentes Reutilizáveis** - Código organizado e modular
✅ **Formulário de Contato** - Pronto para integração
✅ **Filtros de Projetos** - Sistema de filtragem
✅ **Blog** - Sistema de blog completo

## 📝 Próximos Passos

### 1. Adicionar Conteúdo Real
- [ ] Substituir textos de exemplo
- [ ] Adicionar projetos reais
- [ ] Inserir suas fotos
- [ ] Escrever artigos do blog

### 2. Integração com Backend (Opcional)
- [ ] Configurar envio de email do formulário
- [ ] Criar API para projetos dinâmicos
- [ ] Sistema de CMS para blog

### 3. Animações (Opcional)
- [ ] Adicionar Framer Motion
- [ ] Animações de scroll
- [ ] Transições de página

### 4. SEO e Performance
- [ ] Adicionar meta tags específicas
- [ ] Otimizar imagens
- [ ] Configurar sitemap.xml
- [ ] Adicionar Google Analytics

### 5. Deploy
- [ ] Escolher plataforma (Vercel, Netlify, etc.)
- [ ] Configurar domínio personalizado
- [ ] Configurar CI/CD

## 🌐 Deploy Sugerido

### Vercel (Recomendado)
1. Crie conta no [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático a cada commit

### Netlify
1. Crie conta no [Netlify](https://netlify.com)
2. Arraste a pasta `dist` após build
3. Configure domínio

### GitHub Pages
1. Instale `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Adicione scripts no `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Execute:
```bash
npm run deploy
```

## 💡 Dicas

### Boas Práticas
- Mantenha commits pequenos e descritivos
- Teste em diferentes navegadores
- Otimize imagens antes de adicionar
- Mantenha código limpo e comentado
- Use variáveis para cores e espaçamentos

### Performance
- Lazy loading de imagens
- Code splitting já configurado
- Minimize uso de bibliotecas pesadas
- Otimize builds para produção

### SEO
- Use títulos descritivos
- Adicione alt text em imagens
- Meta descriptions únicas por página
- URLs semânticas (já configuradas)

## 🐛 Problemas Comuns

### Erro ao instalar dependências
```bash
# Limpe o cache do npm
npm cache clean --force
# Tente novamente
npm install
```

### Porta 3000 já em uso
```bash
# Use outra porta
npm run dev -- --port 3001
```

### Build com erros
```bash
# Verifique versão do Node.js
node --version
# Deve ser 16 ou superior
```

## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vite](https://vitejs.dev)

## 📞 Suporte

Se tiver dúvidas:
1. Verifique a documentação das tecnologias
2. Consulte os exemplos nos arquivos
3. Leia os comentários no código

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

---

**Desenvolvido com ❤️ usando React, Tailwind CSS e Vite**

Bom desenvolvimento! 🚀