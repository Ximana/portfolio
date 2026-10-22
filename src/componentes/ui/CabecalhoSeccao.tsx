import type { ReactNode } from "react";

interface PropsCabecalhoSeccao {
  /** Número da secção, ex.: "01". */
  indice?: string;
  etiqueta: string;
  titulo: string;
  descricao?: string;
  /** Elemento alinhado à direita (ex.: ligação "Ver todos"). */
  accao?: ReactNode;
  /** Use "h1" na primeira secção de uma página. */
  nivel?: "h1" | "h2";
}

export function CabecalhoSeccao({
  indice,
  etiqueta,
  titulo,
  descricao,
  accao,
  nivel = "h2",
}: PropsCabecalhoSeccao) {
  const Titulo = nivel;

  return (
    <header className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="etiqueta-mono">
          {indice && <span className="text-esbatido">{indice} / </span>}
          {etiqueta}
        </p>
        <Titulo
          className={
            nivel === "h1"
              ? "mt-4 text-4xl font-semibold md:text-5xl"
              : "mt-4 text-3xl font-semibold md:text-4xl"
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
