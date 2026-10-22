import { percurso } from "@/dados/percurso";
import { CabecalhoSeccao } from "@/componentes/ui/CabecalhoSeccao";
import { obterInfoTipoEtapa } from "@/utilitarios/rotularTipoEtapa";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";

export function PercursoAcademico() {
  return (
    <section className="py-16 md:py-20">
      <CabecalhoSeccao etiqueta="Percurso" titulo="Formação e experiência" />

      <ol className="relative ml-2 border-l border-linha">
        {percurso.map((etapa, indice) => {
          const infoTipo = obterInfoTipoEtapa(etapa.tipo);

          return (
            <li key={`${etapa.titulo}-${etapa.instituicao}`} className="pb-10 pl-8 last:pb-0 md:pl-10">
              <span
                className={`absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full ring-4 ring-fundo ${infoTipo.corPonto}`}
                aria-hidden="true"
              />
              <RevelarAoRolar atraso={indice * 80}>
                <div className="painel p-6 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-esbatido">
                    <span>{etapa.periodo}</span>
                    <span className="rounded-md border border-linha px-2 py-1">{infoTipo.rotulo}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{etapa.titulo}</h3>
                  <p className="mt-1 text-sm font-medium text-jade">{etapa.instituicao}</p>
                  <p className="mt-3 max-w-conteudo leading-7 text-esbatido">{etapa.descricao}</p>
                </div>
              </RevelarAoRolar>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
