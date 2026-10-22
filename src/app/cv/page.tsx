import type { Metadata } from "next";
import { criarMetadata } from "@/utilitarios/seo";
import { perfil } from "@/dados/perfil";
import { percurso } from "@/dados/percurso";
import { projectos } from "@/dados/projectos";
import { gruposCompetencias } from "@/dados/competencias";
import { reconhecimentos } from "@/dados/reconhecimentos";
import { LigacaoBotao } from "@/componentes/ui/Botao";

export const metadata: Metadata = {
  ...criarMetadata({
    titulo: "Currículo",
    descricao: `Currículo de ${perfil.nome}: ${perfil.cargo}.`,
    caminho: "/cv",
  }),
};

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="cv-bloco mt-8">
      <h2 className="break-after-avoid border-b border-linha pb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-jade">
        {titulo}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

/** Versão do currículo própria para leitura e impressão (Guardar como PDF, A4). */
export default function PaginaCv() {
  const nome = perfil.nome;
  return (
    <div className="cv contentor max-w-[820px] py-12 md:py-16">
      <div className="nao-imprimir mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-esbatido">Versão para impressão. Use Guardar como PDF no seu navegador.</p>
        <div className="flex gap-3">
          {perfil.cv && (
            <LigacaoBotao href={perfil.cv.url} download={perfil.cv.nome} variante="secundario" tamanho="sm">
              Descarregar PDF
            </LigacaoBotao>
          )}
        </div>
      </div>

      <header>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{nome}</h1>
        <p className="mt-1 text-lg text-esbatido">{perfil.cargo}</p>
        <p className="mt-3 text-sm text-esbatido">
          {perfil.localidade}
          {" · "}
          {perfil.email}
          {perfil.redesSociais.map((rede) => ` · ${rede.nome}: ${rede.url.replace("https://", "")}`).join("")}
        </p>
      </header>

      <Bloco titulo="Resumo">
        <p className="leading-7">{perfil.bioResumida}</p>
      </Bloco>

      <Bloco titulo="Formação e experiência">
        <ul className="space-y-5">
          {percurso.map((etapa) => (
            <li key={`${etapa.titulo}-${etapa.instituicao}`} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-medium">
                  {etapa.titulo}
                  <span className="font-normal text-esbatido">{`, ${etapa.instituicao}`}</span>
                </p>
                <p className="font-mono text-xs text-esbatido">{etapa.periodo}</p>
              </div>
              <p className="mt-1 text-sm leading-6 text-esbatido">{etapa.descricao}</p>
            </li>
          ))}
        </ul>
      </Bloco>

      <Bloco titulo="Projectos">
        <ul className="space-y-5">
          {projectos.map((projecto) => (
            <li key={projecto.slug} className="break-inside-avoid">
              <p className="font-medium">
                {projecto.nome}
                <span className="font-normal text-esbatido">{`, ${projecto.papel}`}</span>
              </p>
              <p className="mt-1 text-sm leading-6 text-esbatido">{projecto.resumo}</p>
              <p className="mt-1 font-mono text-xs text-esbatido">{projecto.tecnologias.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </Bloco>

      {reconhecimentos.length > 0 && (
        <Bloco titulo="Reconhecimentos">
          <ul className="space-y-3">
            {reconhecimentos.map((item) => (
              <li key={item.titulo}>
                <p className="font-medium">{item.titulo}</p>
                <p className="text-sm leading-6 text-esbatido">{item.descricao}</p>
              </li>
            ))}
          </ul>
        </Bloco>
      )}

      <Bloco titulo="Competências">
        <dl className="space-y-2 text-sm">
          {gruposCompetencias.map((grupo) => (
            <div key={grupo.area} className="grid grid-cols-[170px_1fr] gap-4">
              <dt className="font-medium">{grupo.area}</dt>
              <dd className="text-esbatido">{grupo.itens.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Bloco>
    </div>
  );
}
