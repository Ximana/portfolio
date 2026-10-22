import { testemunhos } from "@/dados/testemunhos";
import { CabecalhoSeccao } from "@/componentes/ui/CabecalhoSeccao";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";

/** Só aparece quando existirem testemunhos reais em src/dados/testemunhos.ts. */
export function Testemunhos() {
  if (testemunhos.length === 0) return null;

  return (
    <section className="contentor py-16 md:py-24" id="testemunhos">
      <CabecalhoSeccao etiqueta="Testemunhos" titulo="O que dizem sobre o meu trabalho" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {testemunhos.map((item, indice) => (
          <RevelarAoRolar key={item.autor} atraso={indice * 80} className="h-full">
            <figure className="painel flex h-full flex-col p-6 md:p-8">
              <blockquote className="text-lg leading-8">{item.texto}</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{item.autor}</span>
                <span className="text-esbatido">
                  {", "}
                  {item.funcao}
                  {item.organizacao ? `, ${item.organizacao}` : ""}
                </span>
              </figcaption>
            </figure>
          </RevelarAoRolar>
        ))}
      </div>
    </section>
  );
}
