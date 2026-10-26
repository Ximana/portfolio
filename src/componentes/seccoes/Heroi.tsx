import type { CSSProperties } from "react";
import { perfil } from "@/dados/perfil";
import { LigacaoBotao } from "@/componentes/ui/Botao";
import { IconeRede } from "@/componentes/icones/Icones";
import { CartaoCodigo } from "@/componentes/seccoes/CartaoCodigo";

/** Propriedade CSS personalizada usada para escalonar a animação de entrada. */
type EstiloComAtraso = CSSProperties & { "--atraso-entrada"?: string };
const atraso = (ms: number) => ({ "--atraso-entrada": `${ms}ms` }) as EstiloComAtraso;

export function Heroi() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden pt-16">
      {/* Imagem de fundo (public/imagens/hero/fundo-hero.svg): padrão discreto de
          circuitos e matriz de pontos, esbatido nas margens para não competir com o texto. */}
      <div
        aria-hidden="true"
        className="hero-fundo pointer-events-none absolute inset-0 -z-10 bg-cover bg-[position:75%_center] bg-no-repeat opacity-25 md:bg-right md:opacity-60 dark:opacity-30 md:dark:opacity-90"
      />
      <div className="contentor pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <h1
            className="entrada-heroi text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
            style={atraso(90)}
          >
            {perfil.nome}
          </h1>
          <p
            className="entrada-heroi mt-4 text-xl font-medium tracking-tight text-jade sm:text-2xl"
            style={atraso(160)}
          >
            {perfil.cargo}
          </p>

          <p
            className="entrada-heroi mt-6 max-w-xl text-lg leading-8 text-esbatido"
            style={atraso(230)}
          >
            {perfil.frase}
          </p>

          <div className="entrada-heroi mt-10 flex flex-wrap items-center gap-3" style={atraso(310)}>
            <LigacaoBotao href="/projectos" variante="primario">
              Ver projectos
            </LigacaoBotao>
            <LigacaoBotao href="/contacto" variante="secundario">
              Entrar em contacto
            </LigacaoBotao>
          </div>

          <div
            className="entrada-heroi mt-8 flex items-center gap-6 text-sm text-esbatido"
            style={atraso(380)}
          >
            {perfil.cv && (
              <a
                href={perfil.cv.url}
                download={perfil.cv.nome}
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-marfim"
              >
                Currículo (PDF)
              </a>
            )}
            {perfil.redesSociais.map((rede) => (
              <a
                key={rede.nome}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-marfim"
              >
                <IconeRede nome={rede.nome} tamanho={18} />
                {rede.nome}
              </a>
            ))}
          </div>
        </div>

        <div className="entrada-heroi min-w-0" style={atraso(220)}>
          <CartaoCodigo />
        </div>
      </div>

      <dl
        className="entrada-heroi mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-linha bg-linha sm:grid-cols-3 md:mt-20"
        style={atraso(460)}
      >
        {perfil.numeros.map((numero) => (
          <div key={numero.rotulo} className="flex flex-col bg-superficie px-6 py-6">
            <dt className="order-2 mt-1 text-sm text-esbatido">{numero.rotulo}</dt>
            <dd className="font-mono text-3xl font-medium tracking-tight text-marfim">
              {numero.valor}
            </dd>
          </div>
        ))}
      </dl>
      </div>
    </section>
  );
}
