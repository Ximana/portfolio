# 12. Formulário de contacto

Ficheiro: `src/componentes/seccoes/FormularioContacto.tsx`, usado na página `/contacto`. Envia as mensagens para o teu email através do serviço **Formspree**, sem servidor próprio.

## Activar (uma vez)

O destino das mensagens é **pauloximana@gmail.com**. Esse endereço é definido no painel do Formspree (não no código), por isso a conta e o formulário têm de ser criados por ti:

1. Criar conta gratuita em <https://formspree.io> com **pauloximana@gmail.com**.
2. Confirmar o email (link que o Formspree envia para a caixa de entrada).
3. Em **New Form**, dar um nome (ex.: "Portfolio") e confirmar que o email de destino é pauloximana@gmail.com.
4. Copiar o endpoint, algo como `https://formspree.io/f/abcd1234`. O ID é `abcd1234`.
5. Local: criar `.env.local` (copiar `.env.example`) com `NEXT_PUBLIC_FORMSPREE_ID=abcd1234` e reiniciar `npm run dev`.
6. Produção: acrescentar a mesma variável nas definições do alojamento (Vercel: Project, Settings, Environment Variables) e fazer novo deploy, porque `NEXT_PUBLIC_*` é fixada no build.
7. No painel do Formspree, separador **Settings**, em **Domain whitelist**/restrições, indicar o domínio do site (assim só o teu site consegue usar o formulário).
8. Enviar uma mensagem de teste pelo site e confirmar que chega ao Gmail (ver também a pasta Spam na primeira vez).

Sem o passo 5 e 6, o formulário usa a alternativa: abre o programa de email do visitante com a mensagem preenchida (`mailto:`), e o botão não fica inerte.

## Campos

| Campo | `name` enviado | Validação |
|---|---|---|
| Nome | `name` | `required`, `autocomplete="name"` |
| Email | `email` | `required`, `type="email"` |
| Motivo do contacto | `tipo` e `_subject` | Lista fixa; define o assunto do email recebido |
| Mensagem | `message` | `required`, 10 a 1500 caracteres |
| Armadilha anti-spam | `_gotcha` | Campo oculto (`hidden`, `tabIndex=-1`); se vier preenchido, o Formspree descarta |

A validação é a do próprio navegador (HTML5). Os nomes `name`, `email`, `message` e `_gotcha` são os esperados pelo Formspree.

## Estados

| Estado | Quando | O que o utilizador vê |
|---|---|---|
| `inactivo` | Inicial | Formulário |
| `a-enviar` | Durante o `fetch` | Botão desactivado com "A enviar…" |
| `sucesso` | Resposta `ok` | Painel de confirmação com botão "Enviar outra mensagem" |
| `alternativa` | Sem `NEXT_PUBLIC_FORMSPREE_ID` | Abre o email do visitante com a mensagem preenchida |
| `erro` | Resposta não `ok`, falha de rede ou mais de 15 segundos sem resposta | Aviso (`role="alert"`) com o email para contacto directo |

Sem `NEXT_PUBLIC_FORMSPREE_ID`, o formulário **não falha em silêncio**: usa a alternativa `mailto:`. O pedido ao Formspree tem limite de 15 segundos.

## Fluxo técnico

```
onSubmit ──► preventDefault ──► existe URL do Formspree?
                                   não ► abre mailto e estado "alternativa"
                                   sim ► fetch POST (FormData, Accept: application/json)
                                          ok ► "sucesso" + reset do formulário
                                          falha ► "erro"
```

## Personalizar

- **Textos e placeholders:** no próprio componente.
- **Campo novo:** acrescentar um `<input name="...">` com `label`; o Formspree recebe-o automaticamente.
- **Alterar o email de destino ou notificações:** no painel do Formspree, não no código.
- **Limites do plano gratuito:** o Formspree limita o número de submissões mensais. Ver o plano em vigor no site deles.

## Acessibilidade

Cada campo tem `label` associado por `htmlFor`/`id`; o erro usa `role="alert"` e o sucesso usa `role="status"`, por isso os leitores de ecrã anunciam as mudanças.

## Alternativas

Se um dia sair do Formspree, bastam duas mudanças: trocar o URL do `fetch` e adaptar o formato dos dados enviados. Pode ser outro serviço ou uma rota `app/api/contacto/route.ts` própria (nesse caso, mover a lógica para o servidor e acrescentar limitação de pedidos).

## Melhorias de usabilidade

- Campo "Motivo do contacto" (colaboração, freelance, oportunidade, outro), enviado também como `_subject` para o Formspree.
- Pré-preenchimento por ligação: `/contacto?assunto=PulmoVision` preenche a mensagem inicial. É usado pelo botão "Falar sobre este projecto".
- Contador de caracteres (máximo 1500), mínimo de 10, alternativa visível por email e botão "Copiar" na página de Contacto.
