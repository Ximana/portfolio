# 18. Qualidade e testes

## Estado actual

O projecto **não tem testes automáticos**. A qualidade assenta em tipagem estrita, ESLint e verificação manual. Para um site de portfólio com pouca lógica, é um equilíbrio razoável; abaixo ficam as verificações a fazer e o que acrescentar se o site crescer.

## Verificações automáticas existentes

| Comando | Verifica |
|---|---|
| `npm run type-check` | Tipos TypeScript em modo `strict` (`tsc --noEmit`) |
| `npm run lint` | Regras `next/core-web-vitals` (React, hooks, acessibilidade básica, imagens, links) |
| `npm run build` | Compilação de produção; falha se houver erros de tipos (o lint já não corre no build desde o Next.js 16: usar `npm run lint`) |

## Lista de verificação manual (antes de publicar)

### Funcional
- [ ] Todas as ligações de navegação funcionam (cabeçalho, rodapé, botões, cartões).
- [ ] Detalhe de cada projecto abre; Anterior/Seguinte funcionam.
- [ ] Formulário: campos vazios são recusados; envio real chega ao email; mensagem de erro aparece sem `NEXT_PUBLIC_FORMSPREE_ID`.
- [ ] Alternador de tema muda e a escolha persiste após recarregar.
- [ ] Rota inexistente (ex.: `/xyz`) mostra a 404.
- [ ] Menu móvel abre, fecha com Esc e ao navegar.

### Visual
- [ ] Larguras: 320, 390, 768, 1024, 1440 px.
- [ ] Temas claro e escuro em todas as páginas.
- [ ] Sem scroll horizontal em nenhuma largura.
- [ ] Imagens carregam; nenhuma imagem quebrada.

### Acessibilidade e desempenho
- [ ] Navegação completa por teclado, com foco sempre visível.
- [ ] Lighthouse (móvel): Performance, Accessibility, Best Practices e SEO acima de 90.
- [ ] Ver [14](14-acessibilidade-e-desempenho.md).

### SEO
- [ ] `/sitemap.xml` e `/robots.txt` correctos e com o domínio certo.
- [ ] JSON-LD válido no Rich Results Test.
- [ ] Pré-visualização de partilha correcta.
- [ ] Ver [13](13-seo.md).

## Dependências

- `npm audit` mensal; avaliar cada alerta (muitos afectam só as ferramentas de desenvolvimento).
- `npm outdated` para ver actualizações. Actualizar uma de cada vez, com `build` e verificação manual entre elas.
- Antes de subir de versão maior do Next.js, ler o guia de migração oficial. Na migração para o 16 foi preciso: `params` assíncrono nas rotas dinâmicas, ESLint 9 com `eslint.config.mjs` e `next typegen` no `type-check`.

## Se o site crescer: testes recomendados

| Tipo | Ferramenta sugerida | O que cobrir |
|---|---|---|
| Unitários | Vitest | `juntarClasses`, `criarMetadata`, `dadosMigalhas`, `urlAbsoluta` |
| Componentes | Testing Library | `FormularioContacto` (estados), `Cabecalho` (menu) |
| Ponta a ponta | Playwright | Navegação, tema, envio do formulário (com o Formspree simulado) |
| Acessibilidade | `@axe-core/playwright` | Violações em cada página |
| Visual | Capturas com Playwright | Regressões de layout nos dois temas |
| Integração contínua | GitHub Actions | `type-check`, `lint`, `build` e testes em cada pull request |

A integração contínua já está configurada em `.github/workflows/ci.yml`: em cada push para `main`/`master` e em cada pull request corre `npm ci`, `type-check`, `lint` e `build`, e mostra as pendências de conteúdo (`verificar-conteudo`, apenas aviso). Usa a versão do Node de `.nvmrc`. Para o build usar o domínio certo, definir a variável de repositório `NEXT_PUBLIC_URL_SITE` em GitHub, Settings, Secrets and variables, Actions, Variables.

## Critérios de "pronto"

Uma alteração está pronta quando: compila sem erros, passa `type-check` e `lint`, foi vista nos dois temas e em telemóvel, não piorou a acessibilidade e a documentação afectada foi actualizada.
