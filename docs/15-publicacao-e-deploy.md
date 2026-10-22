# 15. Publicação e deploy

O site é compatível com qualquer alojamento que corra Next.js. A **Vercel** (criadora do Next.js) é o caminho mais simples e tem plano gratuito para projectos pessoais. Confirmar os limites e preços actuais no site deles.

O projecto já inclui a configuração para três destinos:

| Destino | Ficheiros | Quando escolher |
|---|---|---|
| **Vercel** (recomendado) | `vercel.json` | Mais simples; HTTPS, CDN e pré-visualizações automáticas |
| **Netlify** | `netlify.toml` | Alternativa equivalente |
| **Docker / VPS** | `Dockerfile`, `.dockerignore` | Servidor próprio; controlo total |

Em todos, o site é 100% estático no build (27 páginas, incluindo as imagens de partilha), sem API nem base de dados.

## Antes de publicar (lista de verificação)

- [ ] `npm run type-check`, `npm run lint` e `npm run build` sem erros (o build do Next.js 16 não corre o lint) (ou `npm ci` seguido dos três, como faz o CI).
- [ ] `npm run verificar-conteudo` revisto (imagens reais, email, GitHub e LinkedIn reais, CV).
- [ ] Textos revistos (perfil, projectos, competências, percurso).
- [ ] Conta no Formspree criada e `NEXT_PUBLIC_FORMSPREE_ID` à mão.
- [ ] Domínio decidido (ou usar primeiro o endereço `*.vercel.app`).
- [ ] Testado em telemóvel e em computador, nos dois temas.

## Deploy na Vercel (passo a passo)

1. **Repositório Git.** Na pasta do projecto:

   ```bash
   git init
   git add .
   git commit -m "Site pessoal: versão inicial"
   git branch -M main
   git remote add origin https://github.com/<utilizador>/<repositorio>.git
   git push -u origin main
   ```

   O `.gitignore` já exclui `node_modules`, `.next` e `.env*.local`. Nunca enviar `.env.local`.

2. **Importar.** Em <https://vercel.com>, **Add New, Project**, escolher o repositório. A Vercel detecta o Next.js e lê o `vercel.json` (instalação com `npm ci`, build com `npm run build`). A versão do Node vem de `engines` no `package.json` (22.x).

3. **Variáveis de ambiente.** Em **Environment Variables**, acrescentar (para Production e Preview):

   | Nome | Valor |
   |---|---|
   | `NEXT_PUBLIC_FORMSPREE_ID` | O ID do Formspree (ex.: `abcd1234`) |
   | `NEXT_PUBLIC_URL_SITE` | O domínio final, sem barra no fim. Pode ficar vazio no primeiro deploy: usa-se o endereço `https://<projecto>.vercel.app` automaticamente |
   | `NEXT_PUBLIC_GOOGLE_VERIFICATION`, `NEXT_PUBLIC_BING_VERIFICATION` | Opcionais |

   Detalhes em [05](05-variaveis-de-ambiente.md).

4. **Deploy.** Cada `git push` para `main` publica em produção; as outras ramificações e pull requests geram pré-visualizações (a Vercel marca-as com `noindex`, por isso não aparecem no Google).

## Domínio próprio

1. No painel do projecto, **Settings, Domains**, acrescentar o domínio.
2. Configurar os registos DNS que a Vercel indicar no registador (`A` para o domínio raiz, `CNAME` para `www`).
3. Escolher o endereço principal (com ou sem `www`) e redireccionar o outro para ele, no mesmo painel.
4. O HTTPS é emitido automaticamente. O site envia `Strict-Transport-Security`, por isso o HTTPS tem de estar a funcionar antes de ligar o domínio definitivamente.
5. Definir `NEXT_PUBLIC_URL_SITE=https://o-teu-dominio` (igual ao endereço principal) e **refazer o deploy** (Deployments, menu do último deploy, Redeploy). As variáveis `NEXT_PUBLIC_*` são fixadas no build.

Domínios `.ao` são registados através da entidade gestora do domínio em Angola; o processo e os requisitos podem variar, por isso convém verificar junto dela.

## Deploy no Netlify

1. **Add new site, Import an existing project** e escolher o repositório.
2. O `netlify.toml` fixa o comando de build (`npm run build`) e o Node 22; o Netlify instala sozinho o adaptador oficial do Next.js.
3. Em **Site configuration, Environment variables**, acrescentar as mesmas variáveis da tabela acima.
4. Não existe a variável `VERCEL_PROJECT_PRODUCTION_URL` no Netlify: definir `NEXT_PUBLIC_URL_SITE` logo no primeiro deploy.

## Docker / servidor próprio (VPS)

O `Dockerfile` usa o modo `standalone` do Next.js (servidor mínimo, utilizador sem privilégios, `HEALTHCHECK` incluído). As variáveis `NEXT_PUBLIC_*` são incorporadas **no build**, por isso passam-se com `--build-arg`:

```bash
docker build \
  --build-arg NEXT_PUBLIC_URL_SITE=https://pauloximana.ao \
  --build-arg NEXT_PUBLIC_FORMSPREE_ID=abcd1234 \
  -t portfolio-ximana .

docker run -d --name portfolio -p 3000:3000 --restart unless-stopped portfolio-ximana
```

Colocar um proxy inverso com HTTPS à frente (Caddy ou Nginx com Let's Encrypt), a apontar para a porta 3000. Exemplo de Caddy:

```
pauloximana.ao {
  reverse_proxy 127.0.0.1:3000
}
```

Sem Docker: `BUILD_STANDALONE=true npm run build` e, depois, copiar `public` e `.next/static` para dentro de `.next/standalone` e correr `node server.js` (ou, mais simples, `npm run build` e `npm run start`, com PM2 ou systemd a manter o processo).

Notas:

- O build descarrega as fontes do Google Fonts: o servidor/contentor de build precisa de internet.
- Para a optimização de imagens em produção auto-alojada, o Next.js recomenda o pacote `sharp` (`npm install sharp`); sem ele usa uma alternativa mais lenta, mas funcional.
- O `HSTS` só deve ser enviado quando o HTTPS estiver activo (o proxy trata disso).

## Integração contínua (GitHub Actions)

`.github/workflows/ci.yml` corre `npm ci`, `type-check`, `lint` e `build` em cada push e pull request. Com a Vercel ligada ao GitHub, os dois funcionam em paralelo. Opcionalmente, definir a variável de repositório `NEXT_PUBLIC_URL_SITE` (Settings, Secrets and variables, Actions, Variables).

## Depois de publicar

1. Abrir `https://<dominio>/sitemap.xml` e `/robots.txt` e confirmar que os URLs são os do domínio final (não `vercel.app`).
2. Registar o site no Google Search Console e no Bing Webmaster Tools e submeter o sitemap (ver [13](13-seo.md)).
3. Correr PageSpeed Insights e o Rich Results Test.
4. Partilhar um link no LinkedIn e no WhatsApp para confirmar a imagem de pré-visualização.
5. Enviar uma mensagem de teste pelo formulário e confirmar o email do Formspree (a primeira submissão exige confirmação).
6. Abrir `/cv`, `/ficheiros/cv-paulo-ximana.pdf` e a página 404 (`/qualquer-coisa`).
7. Verificar os cabeçalhos de segurança (por exemplo em <https://securityheaders.com>).

## Exportação estática (opcional)

Como não há rotas dinâmicas em runtime nem API, seria possível usar `output: "export"` no `next.config.mjs` para gerar HTML estático. Mas as imagens de partilha (`next/og`) e a optimização do `next/image` exigem servidor Next.js, e os cabeçalhos de `next.config.mjs` deixam de se aplicar. Só vale a pena se houver forte razão para alojamento puramente estático; nesse caso, trocar as imagens de partilha por ficheiros PNG, usar `images.unoptimized` e configurar os cabeçalhos no alojamento.

## Reverter

Na Vercel, cada deploy fica guardado: em **Deployments**, escolher uma versão anterior e **Promote to Production** (ou **Instant Rollback**). Com Git, `git revert` do commit problemático.
