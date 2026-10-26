import Link from "next/link";
import { reconhecimentos } from "@/dados/reconhecimentos";
import { projectos } from "@/dados/projectos";
import { CabecalhoSeccao } from "@/componentes/ui/CabecalhoSeccao";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";

export function Reconhecimentos() {
  if (reconhecimentos.length === 0) return null;

  return (
    <section className="py-16 md:py-20">
      <CabecalhoSeccao titulo="Reconhecimentos" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {reconhecimentos.map((item, indice) => {
          const projecto = projectos.find((p) => p.slug === item.projecto);
          return (
            <RevelarAoRolar key={item.titulo} atraso={indice * 80} className="h-full">
              <div className="painel flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold">{item.titulo}</h3>
                <p className="mt-3 leading-7 text-esbatido">{item.descricao}</p>
                {projecto && (
                  <Link
                    href={`/projectos/${projecto.slug}`}
                    className="mt-auto pt-5 text-sm font-medium text-jade underline-offset-4 hover:underline"
                  >
                    Ver {projecto.nome}
                  </Link>
                )}
              </div>
            </RevelarAoRolar>
          );
        })}
      </div>
    </section>
  );
}
