# Documentação técnica

Documentação do site pessoal e portfólio de **Paulo Ximana**. Os documentos estão numerados por ordem de necessidade: quem chega pela primeira vez lê do 01 ao 05; quem vai mexer no código segue para os restantes conforme precisar.

## Como ler

| Se queres... | Lê |
|---|---|
| Perceber o que é o projecto | 01 |
| Pôr o site a funcionar na tua máquina | 02 |
| Saber onde está cada coisa | 03 |
| Mudar textos, projectos ou competências | 04 |
| Configurar variáveis de ambiente | 05 |
| Perceber como o código está organizado | 06, 07, 08 |
| Mudar o visual | 09, 10 |
| Trocar imagens ou adicionar ficheiros | 11 |
| Activar o formulário de contacto | 12 |
| Melhorar a visibilidade no Google | 13 |
| Publicar o site | 15 |
| Resolver um erro | 19 |

## Índice

### Essencial (começar aqui)

1. [Visão geral](01-visao-geral.md): o que é o projecto, objectivos, tecnologias e funcionalidades.
2. [Instalação e execução](02-instalacao-e-execucao.md): requisitos, instalação, scripts e primeiros passos.
3. [Estrutura do projecto](03-estrutura-do-projecto.md): mapa de pastas e ficheiros.
4. [Conteúdo e dados](04-conteudo-e-dados.md): como editar perfil, projectos, competências e percurso.
5. [Variáveis de ambiente](05-variaveis-de-ambiente.md): configuração por ambiente.

### Arquitectura e código

6. [Arquitectura](06-arquitectura.md): decisões técnicas e fluxo de renderização.
7. [Páginas e rotas](07-paginas-e-rotas.md): rotas, metadados e geração estática.
8. [Componentes](08-componentes.md): catálogo de componentes e hooks.
9. [Sistema de design](09-sistema-de-design.md): cores, tipografia, espaçamento, movimento.
10. [Tema claro e escuro](10-tema-claro-escuro.md): funcionamento e como alterar.

### Funcionalidades e activos

11. [Imagens e ficheiros estáticos](11-imagens-e-ficheiros-estaticos.md): formatos, dimensões e substituição.
12. [Formulário de contacto](12-formulario-de-contacto.md): integração com o Formspree.
13. [SEO](13-seo.md): metadados, dados estruturados, sitemap e indexação.
14. [Acessibilidade e desempenho](14-acessibilidade-e-desempenho.md): práticas aplicadas e como verificar.

### Operação

15. [Publicação e deploy](15-publicacao-e-deploy.md): Vercel, domínio e lista de verificação.
16. [Segurança](16-seguranca.md): cabeçalhos, dados pessoais e boas práticas.
17. [Convenções de código](17-convencoes-de-codigo.md): nomes, estilo e padrões.
18. [Qualidade e testes](18-qualidade-e-testes.md): lint, tipos e verificação manual.
19. [Resolução de problemas](19-resolucao-de-problemas.md): erros frequentes e soluções.

### Referência

20. [Roteiro e melhorias futuras](20-roteiro-e-melhorias.md): o que falta e ideias.
21. [Glossário e histórico de alterações](21-glossario-e-historico.md): termos usados e resumo das versões.

## Convenção de nomes

O código e a documentação estão em português (Angola/Portugal). Ficheiros com nome fixo imposto pelas ferramentas (`package.json`, `layout.tsx`, `page.tsx`, `sitemap.ts`, etc.) mantêm o nome original. Ver [17](17-convencoes-de-codigo.md).
