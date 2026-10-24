import type { ReactNode } from "react";
import type { DadoGrafico, FluxoProjecto, GraficoProjecto } from "@/tipos";
import { IconeSeta } from "@/componentes/icones/Icones";

/**
 * Gráficos e fluxos da página de projecto.
 * Desenhados só com HTML, CSS e SVG (sem bibliotecas), usam as cores do tema
 * (claro/escuro) e são Server Components: não acrescentam JavaScript ao cliente.
 */

/** Cores das séries, por ordem. Seguem os tokens do tema. */
const PALETA = ["rgb(var(--cor-jade))", "rgb(var(--cor-ouro))", "rgb(var(--cor-esbatido))"];

function formatar(valor: number, unidade = "", casas = 0): string {
  // useGrouping "always": o pt-PT não agrupa números de 4 dígitos por omissão (5083 em vez de 5 083).
  const texto = valor.toLocaleString("pt-PT", {
    minimumFractionDigits: casas,
    maximumFractionDigits: Math.max(casas, 2),
    useGrouping: "always",
  });
  if (!unidade) return texto;
  return unidade === "%" ? `${texto} %` : `${texto} ${unidade}`;
}

function textoDado(dado: DadoGrafico, unidade?: string): string {
  return dado.texto ?? formatar(dado.valor, unidade);
}

function Moldura({ grafico, children }: { grafico: GraficoProjecto; children: ReactNode }) {
  return (
    <figure className="painel flex h-full flex-col p-6">
      <figcaption className="etiqueta-mono">{grafico.titulo}</figcaption>
      <div className="mt-5 flex-1">{children}</div>
      {grafico.nota && <p className="mt-5 text-xs leading-5 text-esbatido">{grafico.nota}</p>}
    </figure>
  );
}

function Legenda({ itens }: { itens: { rotulo: string; texto: string; cor: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {itens.map((item) => (
        <li key={item.rotulo} className="flex items-center gap-3 text-sm">
          <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ backgroundColor: item.cor }} aria-hidden="true" />
          <span className="text-esbatido">{item.rotulo}</span>
          <span className="ml-auto font-mono text-marfim">{item.texto}</span>
        </li>
      ))}
    </ul>
  );
}

function Barras({ grafico }: { grafico: GraficoProjecto }) {
  const dados = grafico.dados ?? [];
  const maximo = grafico.maximo ?? Math.max(...dados.map((d) => d.valor), 1);
  return (
    <Moldura grafico={grafico}>
      <ul className="space-y-4">
        {dados.map((dado) => (
          <li key={dado.rotulo}>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-esbatido">{dado.rotulo}</span>
              <span className="font-mono text-marfim">{textoDado(dado, grafico.unidade)}</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-linha" aria-hidden="true">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.max((dado.valor / maximo) * 100, 1.5)}%`,
                  backgroundColor: PALETA[0],
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Moldura>
  );
}

function Agrupadas({ grafico }: { grafico: GraficoProjecto }) {
  const series = grafico.series ?? [];
  const grupos = grafico.grupos ?? [];
  const maximo = grafico.maximo ?? Math.max(...grupos.flatMap((g) => g.valores), 1);
  return (
    <Moldura grafico={grafico}>
      <ul className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-esbatido">
        {series.map((serie, i) => (
          <li key={serie} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: PALETA[i % PALETA.length] }} aria-hidden="true" />
            {serie}
          </li>
        ))}
      </ul>
      <div className="space-y-5">
        {grupos.map((grupo) => (
          <div key={grupo.rotulo}>
            <p className="text-sm font-medium">{grupo.rotulo}</p>
            <ul className="mt-2 space-y-1.5">
              {grupo.valores.map((valor, i) => (
                <li key={series[i] ?? i} className="flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-linha" aria-hidden="true">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${Math.max((valor / maximo) * 100, 1.5)}%`, backgroundColor: PALETA[i % PALETA.length] }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right font-mono text-xs text-esbatido">
                    <span className="sr-only">{series[i]}: </span>
                    {formatar(valor, grafico.unidade, maximo <= 1 ? 2 : 0)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Moldura>
  );
}

function Donut({ grafico }: { grafico: GraficoProjecto }) {
  const dados = grafico.dados ?? [];
  const total = dados.reduce((soma, d) => soma + d.valor, 0) || 1;
  const raio = 62;
  const circunferencia = 2 * Math.PI * raio;
  let acumulado = 0;

  return (
    <Moldura grafico={grafico}>
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <div className="relative h-40 w-40 shrink-0">
          <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90" role="img" aria-label={grafico.titulo}>
            <circle cx="80" cy="80" r={raio} fill="none" strokeWidth="18" style={{ stroke: "rgb(var(--cor-linha))" }} />
            {dados.map((dado, i) => {
              const comprimento = (dado.valor / total) * circunferencia;
              const arco = (
                <circle
                  key={dado.rotulo}
                  cx="80"
                  cy="80"
                  r={raio}
                  fill="none"
                  strokeWidth="18"
                  strokeDasharray={`${Math.max(comprimento - 2, 0)} ${circunferencia}`}
                  strokeDashoffset={-acumulado}
                  style={{ stroke: PALETA[i % PALETA.length] }}
                />
              );
              acumulado += comprimento;
              return arco;
            })}
          </svg>
          {grafico.centro && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-xl font-medium tracking-tight">{grafico.centro.valor}</span>
              <span className="mt-0.5 max-w-[90px] text-[11px] leading-4 text-esbatido">{grafico.centro.rotulo}</span>
            </div>
          )}
        </div>
        <div className="w-full min-w-0 flex-1">
          <Legenda
            itens={dados.map((d, i) => ({
              rotulo: d.rotulo,
              texto: `${textoDado(d, grafico.unidade)} · ${Math.round((d.valor / total) * 100)} %`,
              cor: PALETA[i % PALETA.length],
            }))}
          />
        </div>
      </div>
    </Moldura>
  );
}

function Empilhada({ grafico }: { grafico: GraficoProjecto }) {
  const dados = grafico.dados ?? [];
  const total = dados.reduce((soma, d) => soma + d.valor, 0) || 1;
  return (
    <Moldura grafico={grafico}>
      <div className="flex h-5 gap-0.5 overflow-hidden rounded-full" aria-hidden="true">
        {dados.map((dado, i) => (
          <div key={dado.rotulo} style={{ width: `${(dado.valor / total) * 100}%`, backgroundColor: PALETA[i % PALETA.length] }} />
        ))}
      </div>
      <div className="mt-6">
        <Legenda
          itens={dados.map((d, i) => ({
            rotulo: d.rotulo,
            texto: `${textoDado(d, grafico.unidade)} · ${Math.round((d.valor / total) * 100)} %`,
            cor: PALETA[i % PALETA.length],
          }))}
        />
      </div>
    </Moldura>
  );
}

export function Grafico({ grafico }: { grafico: GraficoProjecto }) {
  switch (grafico.tipo) {
    case "barras":
      return <Barras grafico={grafico} />;
    case "agrupadas":
      return <Agrupadas grafico={grafico} />;
    case "donut":
      return <Donut grafico={grafico} />;
    case "empilhada":
      return <Empilhada grafico={grafico} />;
  }
}

/** Sequência de passos: setas até 5 passos, cartões numerados acima disso. */
export function Fluxo({ fluxo }: { fluxo: FluxoProjecto }) {
  const comSetas = fluxo.passos.length <= 5;
  return (
    <ol
      className={
        comSetas
          ? "flex flex-col gap-2 md:flex-row md:items-stretch"
          : "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
      }
    >
      {fluxo.passos.map((passo, indice) => (
        <li key={passo.rotulo} className={comSetas ? "flex flex-col items-center gap-2 md:flex-1 md:flex-row" : ""}>
          <div className="painel h-full w-full flex-1 px-4 py-4">
            <p className="text-sm font-semibold leading-5">{passo.rotulo}</p>
            {passo.detalhe && <p className="mt-1.5 text-xs leading-5 text-esbatido">{passo.detalhe}</p>}
          </div>
          {comSetas && indice < fluxo.passos.length - 1 && (
            <IconeSeta tamanho={16} className="shrink-0 rotate-90 text-esbatido md:rotate-0" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}
