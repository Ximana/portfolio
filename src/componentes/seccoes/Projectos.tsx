import { projectos } from "@/dados/projectos";
import { CabecalhoSeccao } from "@/componentes/ui/CabecalhoSeccao";
import { CartaoProjecto } from "@/componentes/ui/CartaoProjecto";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";
import { LigacaoBotao } from "@/componentes/ui/Botao";

export function Projectos() {
  const projectosDestaque = projectos.filter((projecto) => projecto.destaque);
  const [principal, ...restantes] = projectosDestaque;

  return (
    <section className="contentor py-16 md:py-24" id="projectos">
      <CabecalhoSeccao
        titulo="Trabalho seleccionado"
        descricao="Produtos reais, da saúde à educação e ao desporto, construídos de ponta a ponta."
        accao={
          <LigacaoBotao href="/projectos" variante="secundario" tamanho="sm">
            Ver todos
          </LigacaoBotao>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {principal && (
          <RevelarAoRolar className="md:col-span-2">
            <CartaoProjecto projecto={principal} variante="destaque" />
          </RevelarAoRolar>
        )}
        {restantes.map((projecto, indice) => {
          // Se o número de cartões for ímpar, o último ocupa a largura toda para não deixar um vazio.
          const ultimoSozinho = restantes.length % 2 === 1 && indice === restantes.length - 1;
          return (
            <RevelarAoRolar
              key={projecto.slug}
              atraso={indice * 80}
              className={ultimoSozinho ? "h-full md:col-span-2" : "h-full"}
            >
              <CartaoProjecto
                projecto={projecto}
                variante={ultimoSozinho ? "destaque" : "padrao"}
                limiteTecnologias={ultimoSozinho ? 5 : 3}
              />
            </RevelarAoRolar>
          );
        })}
      </div>
    </section>
  );
}
