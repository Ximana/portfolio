import type { ReactNode } from "react";

interface PropsCabecalhoSeccao {
  titulo: string;
  descricao?: string;
  /** Elemento alinhado à direita (ex.: ligação "Ver todos"). */
  accao?: ReactNode;
  /** Use "h1" na primeira secção de uma página. */
  nivel?: "h1" | "h2";
}

export function CabecalhoSeccao({
  titulo,
  descricao,
  accao,
  nivel = "h2",
}: PropsCabecalhoSeccao) {
  const Titulo = nivel;

  return (
    <header className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <Titulo
          className={
            nivel === "h1"
              ? "text-4xl font-semibold md:text-5xl"
              : "text-3xl font-semibold md:text-4xl"
          }
        >
          {titulo}
        </Titulo>
        {descricao && <p className="mt-4 text-lg leading-8 text-esbatido">{descricao}</p>}
      </div>
      {accao && <div className="shrink-0">{accao}</div>}
    </header>
  );
}
