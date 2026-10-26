import Image from "next/image";
import Link from "next/link";
import type { Projecto } from "@/tipos";
import { Cartao } from "@/componentes/ui/Cartao";
import { Etiqueta } from "@/componentes/ui/Etiqueta";
import { imagemProjecto } from "@/utilitarios/imagemProjecto";
import { obterInfoEstado } from "@/utilitarios/rotularEstado";
import { juntarClasses } from "@/utilitarios/juntarClasses";

interface PropsCartaoProjecto {
  projecto: Projecto;
  /** "destaque" apresenta imagem e texto lado a lado em ecrãs largos. */
  variante?: "padrao" | "destaque";
  /** Limita quantas etiquetas de tecnologia mostrar. */
  limiteTecnologias?: number;
}

export function CartaoProjecto({
  projecto,
  variante = "padrao",
  limiteTecnologias,
}: PropsCartaoProjecto) {
  const infoEstado = obterInfoEstado(projecto.estado);
  const tecnologias = limiteTecnologias
    ? projecto.tecnologias.slice(0, limiteTecnologias)
    : projecto.tecnologias;
  const eDestaque = variante === "destaque";

  return (
    <Link
      href={`/projectos/${projecto.slug}`}
      className="group block h-full rounded-2xl"
      aria-label={`${projecto.nome}: ver detalhes do projecto`}
    >
      <Cartao
        interactivo
        className={juntarClasses("flex h-full overflow-hidden", eDestaque ? "flex-col lg:flex-row" : "flex-col")}
      >
        <div
          className={juntarClasses(
            "relative aspect-video w-full overflow-hidden border-b border-linha bg-fundo",
            eDestaque && "lg:aspect-auto lg:min-h-[320px] lg:w-[56%] lg:border-b-0 lg:border-r"
          )}
        >
          <Image
            src={imagemProjecto(projecto)}
            alt={`Imagem do projecto ${projecto.nome}`}
            fill
            sizes={eDestaque ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className={juntarClasses("flex flex-1 flex-col p-6", eDestaque ? "md:p-8" : "md:p-7")}>
          <div className="flex items-center gap-2 font-mono text-xs text-esbatido">
            <span className={`h-1.5 w-1.5 rounded-full ${infoEstado.corPonto}`} />
            {infoEstado.rotulo}
          </div>
          <h3 className={juntarClasses("mt-4 font-semibold", eDestaque ? "text-3xl" : "text-2xl")}>
            {projecto.nome}
          </h3>
          <p className="mt-3 text-base leading-7 text-esbatido">{projecto.resumo}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tecnologias.map((tecnologia) => (
              <Etiqueta key={tecnologia} texto={tecnologia} />
            ))}
          </div>

          <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-jade">
            Ver projecto
          </span>
        </div>
      </Cartao>
    </Link>
  );
}
