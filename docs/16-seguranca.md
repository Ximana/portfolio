# 16. Segurança

Superfície de ataque pequena: site praticamente estático, sem base de dados, sem autenticação, sem API própria.

## O que está configurado

Em `next.config.mjs`, cabeçalhos aplicados a todas as rotas:

| Cabeçalho | Valor | Protege contra |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | Interpretação errada de tipos de ficheiro |
| `X-Frame-Options` | `SAMEORIGIN` | Incorporação do site noutro (clickjacking) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Fuga de URLs completos a terceiros |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Acesso desnecessário a sensores |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains` | Ligações sem HTTPS (os navegadores só o aplicam em HTTPS) |

Também: `poweredByHeader: false` (não anuncia que usa Next.js).

## Dados e privacidade

- O formulário envia nome, email e mensagem **directamente ao Formspree**, que os reencaminha para o teu email. O site não guarda nada.
- Não há cookies de rastreio nem análise de tráfego. O único dado local é a preferência de tema em `localStorage` (`px-tema`).
- Se acrescentares analítica, cookies ou publicidade, passa a ser necessário um aviso de privacidade e, conforme o caso, consentimento. Verificar a lei de protecção de dados aplicável (em Angola, a Lei n.º 22/11 de Protecção de Dados Pessoais).
- O email público aparece em texto no site; é inevitável num portfólio, mas atrai spam. O formulário com `_gotcha` ajuda.

## Variáveis de ambiente

Todas as `NEXT_PUBLIC_*` ficam visíveis no navegador. **Não guardar segredos nelas.** O ID do Formspree é público por natureza. Ver [05](05-variaveis-de-ambiente.md).

## Dados estruturados e XSS

`DadosEstruturados` escapa o carácter `<` do JSON, impedindo que um texto malicioso feche a etiqueta `<script>`. Manter este escape se o componente for alterado. O conteúdo vem de `src/dados/`, que é código teu, não de utilizadores.

## Dependências

- Manter `package-lock.json` versionado, para builds reprodutíveis.
- Correr `npm audit` de tempos a tempos e actualizar com cuidado (ver [18](18-qualidade-e-testes.md)).
- O projecto usa Next.js 16.4.2 e React 19. `npm audit --omit=dev` (dependências de produção) dá **0 vulnerabilidades**. Restam avisos apenas em ferramentas de desenvolvimento do Tailwind 3 (`braces`, `postcss-selector-parser`): `braces` não tem versão corrigida e a outra só se resolve passando ao Tailwind 4 (alteração maior); processam apenas ficheiros do próprio projecto e não vão para o site publicado.
- Actualizações de segurança do Next.js devem ser aplicadas assim que saírem.
- Instalar apenas pacotes necessários; cada dependência nova aumenta o risco.

## Possíveis reforços

| Reforço | Notas |
|---|---|
| `Content-Security-Policy` | Mais restritiva, mas exige `nonce` por causa dos scripts inline do Next.js e do tema. Implementar com cuidado e testar. |
| `security.txt` | Ficheiro em `public/.well-known/security.txt` com um contacto para relatar falhas. |
| Protecção reCAPTCHA/Turnstile no formulário | Se o spam for um problema real. |

## Boas práticas

- Nunca enviar `.env.local` para o Git (já está no `.gitignore`).
- Ativar autenticação de dois factores no GitHub, na Vercel, no Formspree e no registador do domínio.
- Manter o domínio com renovação automática e protecção contra transferência.
