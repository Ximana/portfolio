import { perfil } from "@/dados/perfil";

/**
 * Cartão decorativo do Herói: o perfil apresentado como um objecto TypeScript.
 * É puramente ilustrativo (aria-hidden); a mesma informação existe em texto
 * normal no resto da página.
 */

const stack = ["Next.js", "Django", "React Native"];

function Chave({ nome }: { nome: string }) {
  return <span className="text-jade">{nome}</span>;
}
function Texto({ valor }: { valor: string }) {
  return <span className="text-ouro">&quot;{valor}&quot;</span>;
}
function Pontuacao({ children }: { children: string }) {
  return <span className="text-esbatido">{children}</span>;
}

export function CartaoCodigo() {
  const linhas: Array<{ chave: string; valor: React.ReactNode }> = [
    { chave: "nome", valor: <Texto valor={perfil.nome} /> },
    { chave: "funcao", valor: <Texto valor="Desenvolvedor Full-Stack" /> },
    { chave: "localidade", valor: <Texto valor={perfil.localidade} /> },
    { chave: "formacao", valor: <Texto valor="Licenciatura em Ciências da Computação" /> },
    { chave: "fundador", valor: <Texto valor="QUANTA" /> },
    {
      chave: "stack",
      valor: (
        <>
          <Pontuacao>[</Pontuacao>
          {stack.map((item, i) => (
            <span key={item}>
              <Texto valor={item} />
              {i < stack.length - 1 && <Pontuacao>, </Pontuacao>}
            </span>
          ))}
          <Pontuacao>]</Pontuacao>
        </>
      ),
    },
    { chave: "emIA", valor: <span className="text-marfim">true</span> },
  ];

  return (
    <div className="painel overflow-hidden" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-linha px-5 py-3">
        <span className="font-mono text-xs text-esbatido">perfil.ts</span>
        <span className="flex items-center gap-2 font-mono text-xs text-esbatido">
          <span className="h-1.5 w-1.5 rounded-full bg-jade" />
          disponível
        </span>
      </div>
      <pre className="whitespace-pre-wrap break-words px-5 py-6 font-mono text-[13px] leading-7 sm:text-sm">
        <code>
          <span className="text-esbatido">const </span>
          <span className="text-marfim">paulo</span>
          <Pontuacao>{" = {"}</Pontuacao>
          {"\n"}
          {linhas.map((linha) => (
            <span key={linha.chave} className="block pl-5">
              <Chave nome={linha.chave} />
              <Pontuacao>: </Pontuacao>
              {linha.valor}
              <Pontuacao>,</Pontuacao>
            </span>
          ))}
          <Pontuacao>{"};"}</Pontuacao>
          <span className="ml-1 inline-block h-4 w-[7px] translate-y-[3px] animate-cursor bg-jade" />
        </code>
      </pre>
    </div>
  );
}
