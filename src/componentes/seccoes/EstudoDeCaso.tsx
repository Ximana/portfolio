import type { ReactNode } from "react";
import type { NumeroDestaque, Projecto, TabelaProjecto } from "@/tipos";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";
import { Fluxo, Grafico } from "@/componentes/seccoes/GraficosProjecto";

function Secao({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <RevelarAoRolar>
      <h2 className="text-xl font-semibold md:text-2xl">{titulo}</h2>
      <div className="mt-5">{children}</div>
    </RevelarAoRolar>
  );
}

function Lista({ itens, compacta = false }: { itens: string[]; compacta?: boolean }) {
  return (
    <ul className={compacta ? "space-y-2.5" : "space-y-3"}>
      {itens.map((item, indice) => (
        <li key={`${indice}-${item}`} className="flex gap-3 leading-7 text-esbatido">
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-jade" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Indicadores({ itens, colunas }: { itens: NumeroDestaque[]; colunas: string }) {
  return (
    <dl className={`grid gap-px overflow-hidden rounded-2xl border border-linha bg-linha ${colunas}`}>
      {itens.map((item) => (
        <div key={item.rotulo} className="flex flex-col bg-superficie px-5 py-5">
          <dt className="order-2 mt-1 text-sm leading-5 text-esbatido">{item.rotulo}</dt>
          <dd className="font-mono text-xl font-medium tracking-tight sm:text-2xl">{item.valor}</dd>
        </div>
      ))}
    </dl>
  );
}

function Tabela({ tabela }: { tabela: TabelaProjecto }) {
  return (
    <div className="painel overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        <caption className="border-b border-linha px-5 py-3 text-left font-mono text-xs font-medium uppercase tracking-[0.14em] text-jade">
          {tabela.titulo}
        </caption>
        <thead>
          <tr className="border-b border-linha">
            {tabela.colunas.map((coluna) => (
              <th key={coluna} scope="col" className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-esbatido">
                {coluna}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabela.linhas.map((linha, i) => (
            <tr key={i} className="border-b border-linha last:border-b-0">
              {linha.map((celula, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-5 py-3 align-top font-medium">
                    {celula}
                  </th>
                ) : (
                  <td key={j} className="px-5 py-3 align-top leading-6 text-esbatido">
                    {celula}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Estudo de caso de um projecto. Segue sempre a mesma ordem, do mais para o
 * menos importante para quem avalia o trabalho:
 *
 *  1. Aviso e contexto (quando existem)
 *  2. Resultados / números-chave
 *  3. Problema, objectivo e solução
 *  4. Dados e análise (gráficos, tabelas e notas)
 *  5. Como funciona (fluxos e arquitectura)
 *  6. Funcionalidades
 *  7. Demonstração
 *  8. Decisões técnicas
 *  9. Desafios e limitações
 * 10. Próximos passos
 *
 * Cada bloco só aparece se estiver preenchido nos dados do projecto
 * (src/dados/detalhes/), por isso nunca mostra secções vazias ou inventadas.
 */
export function EstudoDeCaso({ projecto }: { projecto: Projecto }) {
  const {
    objectivo,
    solucao,
    problema,
    funcionalidades,
    gruposFuncionalidades,
    decisoesTecnicas,
    fluxos,
    desafios,
    resultados,
    numeros,
    proximosPassos,
    aviso,
    notasResultados,
    graficos,
    tabelas,
    limitacoes,
    contexto,
    demonstracao,
  } = projecto;

  const temVisaoGeral = Boolean(objectivo || solucao || problema?.length);
  const temDados = Boolean(graficos?.length || tabelas?.length || notasResultados?.length);
  const temGrupos = Boolean(gruposFuncionalidades?.length);
  const temDesafiosOuLimites = Boolean(desafios?.length || limitacoes?.length);

  const algumConteudo =
    aviso ||
    contexto?.itens.length ||
    resultados?.length ||
    numeros?.length ||
    temVisaoGeral ||
    temDados ||
    fluxos?.length ||
    temGrupos ||
    funcionalidades?.length ||
    demonstracao ||
    decisoesTecnicas?.length ||
    temDesafiosOuLimites ||
    proximosPassos?.length;

  if (!algumConteudo) return null;

  return (
    <div className="mt-14 space-y-14">
      {aviso && (
        <RevelarAoRolar>
          <div role="note" className="painel border-ouro/40 p-6">
            <p className="etiqueta-mono">Uso responsável</p>
            <p className="mt-3 leading-7 text-marfim/90">{aviso}</p>
          </div>
        </RevelarAoRolar>
      )}

      {contexto && contexto.itens.length > 0 && (
        <Secao titulo={contexto.titulo}>
          <dl className="painel divide-y divide-linha">
            {contexto.itens.map((item) => (
              <div key={item.rotulo} className="grid gap-1 px-6 py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="etiqueta-mono">{item.rotulo}</dt>
                <dd className="leading-7 text-marfim/90">{item.valor}</dd>
              </div>
            ))}
          </dl>
        </Secao>
      )}

      {resultados && resultados.length > 0 && (
        <Secao titulo="Resultados">
          <Indicadores
            itens={resultados}
            colunas={resultados.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}
          />
        </Secao>
      )}

      {numeros && numeros.length > 0 && (
        <Secao titulo="Em números">
          <Indicadores itens={numeros} colunas="grid-cols-2 lg:grid-cols-4" />
        </Secao>
      )}

      {temVisaoGeral && (
        <Secao titulo="Visão geral">
          <div className="grid gap-4 md:grid-cols-2">
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
            {problema && problema.length > 0 && (
              <div className="painel p-6 md:col-span-2">
                <p className="etiqueta-mono">O problema</p>
                <div className="mt-4">
                  <Lista itens={problema} compacta />
                </div>
              </div>
            )}
          </div>
        </Secao>
      )}

      {temDados && (
        <Secao titulo={graficos?.length ? "Dados e análise" : "Em detalhe"}>
          <div className="space-y-4">
            {graficos && graficos.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {graficos.map((grafico, indice) => (
                  <div
                    key={grafico.titulo}
                    className={indice === graficos.length - 1 && graficos.length % 2 === 1 ? "md:col-span-2" : undefined}
                  >
                    <Grafico grafico={grafico} />
                  </div>
                ))}
              </div>
            )}
            {tabelas?.map((tabela) => (
              <Tabela key={tabela.titulo} tabela={tabela} />
            ))}
            {notasResultados && notasResultados.length > 0 && (
              <div className="pt-2">
                <Lista itens={notasResultados} compacta />
              </div>
            )}
          </div>
        </Secao>
      )}

      {fluxos && fluxos.length > 0 && (
        <Secao titulo="Como funciona">
          <div className="space-y-8">
            {fluxos.map((fluxo) => (
              <div key={fluxo.titulo}>
                <p className="etiqueta-mono mb-3">{fluxo.titulo}</p>
                <Fluxo fluxo={fluxo} />
              </div>
            ))}
          </div>
        </Secao>
      )}

      {temGrupos && gruposFuncionalidades ? (
        <Secao titulo="Funcionalidades">
          <div className="grid gap-4 md:grid-cols-2">
            {gruposFuncionalidades.map((grupo, indice) => (
              <div
                key={grupo.titulo}
                className={`painel p-6 ${
                  indice === gruposFuncionalidades.length - 1 && gruposFuncionalidades.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <h3 className="etiqueta-mono">{grupo.titulo}</h3>
                <div className="mt-4">
                  <Lista itens={grupo.itens} compacta />
                </div>
              </div>
            ))}
          </div>
        </Secao>
      ) : (
        funcionalidades &&
        funcionalidades.length > 0 && (
          <Secao titulo="Funcionalidades">
            <Lista itens={funcionalidades} />
          </Secao>
        )
      )}

      {demonstracao && (
        <Secao titulo="Demonstração">
          <p className="leading-8 text-esbatido">{demonstracao}</p>
        </Secao>
      )}

      {decisoesTecnicas && decisoesTecnicas.length > 0 && (
        <Secao titulo="Decisões técnicas">
          <Lista itens={decisoesTecnicas} />
        </Secao>
      )}

      {temDesafiosOuLimites && (
        <RevelarAoRolar>
          <div className="grid gap-4 md:grid-cols-2">
            {desafios && desafios.length > 0 && (
              <div className="painel p-6">
                <h2 className="text-xl font-semibold">Desafios</h2>
                <div className="mt-4">
                  <Lista itens={desafios} compacta />
                </div>
              </div>
            )}
            {limitacoes && limitacoes.length > 0 && (
              <div className="painel p-6">
                <h2 className="text-xl font-semibold">Limitações</h2>
                <div className="mt-4">
                  <Lista itens={limitacoes} compacta />
                </div>
              </div>
            )}
          </div>
        </RevelarAoRolar>
      )}

      {proximosPassos && proximosPassos.length > 0 && (
        <Secao titulo="Próximos passos">
          <Lista itens={proximosPassos} />
        </Secao>
      )}
    </div>
  );
}
