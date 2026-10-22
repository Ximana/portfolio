import { perfil } from "@/dados/perfil";
import { percurso } from "@/dados/percurso";
import { CabecalhoSeccao } from "@/componentes/ui/CabecalhoSeccao";
import { LigacaoBotao } from "@/componentes/ui/Botao";

const factos = [
  { rotulo: "Localidade", valor: perfil.localidade },
  { rotulo: "Formação", valor: percurso[0].titulo },
  { rotulo: "Fundador", valor: "QUANTA" },
  { rotulo: "Disponibilidade", valor: perfil.disponibilidade },
];

export function SobreMim() {
  return (
    <section className="contentor py-16 md:py-24" id="sobre">
      <CabecalhoSeccao indice="01" etiqueta="Sobre" titulo="Engenharia de software com inteligência artificial aplicada." />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <p className="max-w-conteudo text-lg leading-8 text-esbatido">{perfil.bioResumida}</p>
          <LigacaoBotao href="/sobre" variante="texto" className="mt-6 !px-0 text-jade hover:text-marfim">
            Ler o percurso completo
          </LigacaoBotao>
        </div>

        <dl className="divide-y divide-linha border-y border-linha">
          {factos.map((facto) => (
            <div key={facto.rotulo} className="grid grid-cols-[140px_1fr] gap-4 py-4 text-sm">
              <dt className="font-mono text-xs uppercase tracking-[0.1em] text-esbatido">
                {facto.rotulo}
              </dt>
              <dd className="text-marfim">{facto.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
