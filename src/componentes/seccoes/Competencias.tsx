import { gruposCompetencias } from "@/dados/competencias";
import { CabecalhoSeccao } from "@/componentes/ui/CabecalhoSeccao";
import { Etiqueta } from "@/componentes/ui/Etiqueta";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";
import { juntarClasses } from "@/utilitarios/juntarClasses";

/** Disposição em "bento": as duas primeiras áreas ocupam mais largura. */
const larguraPorPosicao = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

export function Competencias() {
  return (
    <section className="contentor py-16 md:py-24" id="competencias">
      <CabecalhoSeccao
        titulo="Tecnologias e áreas de actuação"
        descricao="Das interfaces ao modelo de aprendizagem, o conjunto de ferramentas com que trabalho."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {gruposCompetencias.map((grupo, indice) => (
          <RevelarAoRolar
            key={grupo.area}
            atraso={indice * 60}
            className={juntarClasses("h-full", larguraPorPosicao[indice] ?? "lg:col-span-2")}
          >
            <div className="painel h-full p-6 transition-colors duration-300 hover:border-jade/40">
              <h3 className="text-lg font-semibold">{grupo.area}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {grupo.itens.map((item) => (
                  <Etiqueta key={item} texto={item} />
                ))}
              </div>
            </div>
          </RevelarAoRolar>
        ))}
      </div>
    </section>
  );
}
