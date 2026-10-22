import type { Projecto } from "@/tipos";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";

function Titulo({ children }: { children: string }) {
  return <h2 className="text-xl font-semibold md:text-2xl">{children}</h2>;
}

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {itens.map((item) => (
        <li key={item} className="flex gap-3 leading-7 text-esbatido">
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-jade" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Estudo de caso de um projecto: objectivo, solução, funcionalidades, decisões
 * técnicas, desafios e resultados. Cada bloco só aparece se estiver preenchido
 * em src/dados/projectos.ts, por isso nunca mostra secções vazias nem inventadas.
 */
export function EstudoDeCaso({ projecto }: { projecto: Projecto }) {
  const { objectivo, solucao, funcionalidades, decisoesTecnicas, desafios, resultados } = projecto;
  const temContexto = Boolean(objectivo || solucao);

  if (
    !temContexto &&
    !funcionalidades?.length &&
    !decisoesTecnicas?.length &&
    !desafios?.length &&
    !resultados?.length
  ) {
    return null;
  }

  return (
    <div className="mt-14 space-y-14">
      {resultados && resultados.length > 0 && (
        <RevelarAoRolar>
          <Titulo>Resultados</Titulo>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-linha bg-linha sm:grid-cols-3">
            {resultados.map((resultado) => (
              <div key={resultado.rotulo} className="flex flex-col bg-superficie px-6 py-5">
                <dt className="order-2 mt-1 text-sm text-esbatido">{resultado.rotulo}</dt>
                <dd className="font-mono text-2xl font-medium tracking-tight">{resultado.valor}</dd>
              </div>
            ))}
          </dl>
        </RevelarAoRolar>
      )}

      {temContexto && (
        <RevelarAoRolar>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {objectivo && (
              <div className="painel p-6">
                <p className="etiqueta-mono">Objectivo</p>
                <p className="mt-3 leading-7 text-marfim/90">{objectivo}</p>
              </div>
            )}
            {solucao && (
              <div className="painel p-6">
                <p className="etiqueta-mono">Solução</p>
                <p className="mt-3 leading-7 text-marfim/90">{solucao}</p>
              </div>
            )}
          </div>
        </RevelarAoRolar>
      )}

      {funcionalidades && funcionalidades.length > 0 && (
        <RevelarAoRolar>
          <Titulo>Funcionalidades</Titulo>
          <Lista itens={funcionalidades} />
        </RevelarAoRolar>
      )}

      {decisoesTecnicas && decisoesTecnicas.length > 0 && (
        <RevelarAoRolar>
          <Titulo>Decisões técnicas</Titulo>
          <Lista itens={decisoesTecnicas} />
        </RevelarAoRolar>
      )}

      {desafios && desafios.length > 0 && (
        <RevelarAoRolar>
          <Titulo>Desafios</Titulo>
          <Lista itens={desafios} />
        </RevelarAoRolar>
      )}
    </div>
  );
}
