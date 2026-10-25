import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { criarMetadata, dadosMigalhas, idPessoa, urlAbsoluta } from "@/utilitarios/seo";
import { DadosEstruturados } from "@/componentes/seo/DadosEstruturados";
import { projectos } from "@/dados/projectos";
import { IconeSeta } from "@/componentes/icones/Icones";
import { EstudoDeCaso } from "@/componentes/seccoes/EstudoDeCaso";
import { Etiqueta } from "@/componentes/ui/Etiqueta";
import { LigacaoBotao } from "@/componentes/ui/Botao";
import { imagemProjecto } from "@/utilitarios/imagemProjecto";
import { obterInfoEstado } from "@/utilitarios/rotularEstado";

interface PropsPagina {
  // No Next.js 15 e 16, `params` é uma Promise e tem de ser aguardado com `await`.
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectos.map((projecto) => ({ slug: projecto.slug }));
}

function obterProjecto(slug: string) {
  return projectos.find((projecto) => projecto.slug === slug);
}

export async function generateMetadata({ params }: PropsPagina): Promise<Metadata> {
  const { slug } = await params;
  const projecto = obterProjecto(slug);
  if (!projecto) return {};
  return criarMetadata({
    titulo: `${projecto.nome}: ${projecto.tecnologias.slice(0, 3).join(", ")}`,
    descricao: `${projecto.resumo} ${projecto.papel}. Tecnologias: ${projecto.tecnologias.join(", ")}.`,
    caminho: `/projectos/${projecto.slug}`,
    imagem: `/projectos/${projecto.slug}/opengraph-image`,
    tipo: "article",
  });
}

export default async function PaginaProjecto({ params }: PropsPagina) {
  const { slug } = await params;
  const indiceActual = projectos.findIndex((projecto) => projecto.slug === slug);
  const projecto = projectos[indiceActual];

  if (!projecto) {
    notFound();
  }

  const infoEstado = obterInfoEstado(projecto.estado);
  const projectoAnterior = indiceActual > 0 ? projectos[indiceActual - 1] : undefined;
  const proximoProjecto =
    indiceActual < projectos.length - 1 ? projectos[indiceActual + 1] : undefined;

  return (
    <div className="contentor py-12 md:py-20">
      <DadosEstruturados
        dados={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: projecto.nome,
            description: projecto.descricao[0],
            url: urlAbsoluta(`/projectos/${projecto.slug}`),
            image: urlAbsoluta(imagemProjecto(projecto)),
            inLanguage: "pt-AO",
            keywords: projecto.tecnologias.join(", "),
            creator: { "@id": idPessoa },
            author: { "@id": idPessoa },
          },
          dadosMigalhas([
            { nome: "Início", caminho: "/" },
            { nome: "Projectos", caminho: "/projectos" },
            { nome: projecto.nome, caminho: `/projectos/${projecto.slug}` },
          ]),
        ]}
      />
      <nav aria-label="Localização" className="font-mono text-xs text-esbatido">
        <Link href="/projectos" className="transition-colors duration-200 hover:text-jade">
          Projectos
        </Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <span className="text-marfim">{projecto.nome}</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-xs text-esbatido">
          <span className={`h-1.5 w-1.5 rounded-full ${infoEstado.corPonto}`} />
          {infoEstado.rotulo}
        </div>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">{projecto.nome}</h1>
        <p className="mt-5 text-xl leading-8 text-esbatido">{projecto.resumo}</p>
      </header>

      <div className="painel relative mt-10 aspect-video w-full overflow-hidden">
        <Image
          src={imagemProjecto(projecto)}
          alt={`Imagem do projecto ${projecto.nome}`}
          fill
          sizes="(min-width: 1152px) 1100px, 100vw"
          priority
          className="object-cover"
        />
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
        <div className="min-w-0">
          <div className="max-w-conteudo space-y-6">
            {projecto.descricao.map((paragrafo, indice) => (
              <p key={indice} className={indice === 0 ? "text-lg leading-8 text-marfim/90" : "leading-8 text-esbatido"}>
                {paragrafo}
              </p>
            ))}
          </div>
          <EstudoDeCaso projecto={projecto} />
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="painel space-y-6 p-6">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.1em] text-esbatido">Papel</h2>
              <p className="mt-2 text-sm">{projecto.papel}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.1em] text-esbatido">Estado</h2>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <span className={`h-1.5 w-1.5 rounded-full ${infoEstado.corPonto}`} />
                {infoEstado.rotulo}
              </p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.1em] text-esbatido">Tecnologias</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {projecto.tecnologias.map((tecnologia) => (
                  <Etiqueta key={tecnologia} texto={tecnologia} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-linha pt-6">
                {projecto.url && (
                  <LigacaoBotao href={projecto.url} target="_blank" rel="noopener noreferrer" variante="primario">
                    Ver site
                  </LigacaoBotao>
                )}
                {projecto.urlCodigo && (
                  <LigacaoBotao href={projecto.urlCodigo} target="_blank" rel="noopener noreferrer" variante="secundario">
                    Ver código
                  </LigacaoBotao>
                )}
              <LigacaoBotao
                href={`/contacto?assunto=${encodeURIComponent(projecto.nome)}`}
                variante={projecto.url || projecto.urlCodigo ? "secundario" : "primario"}
              >
                Falar sobre este projecto
              </LigacaoBotao>
            </div>
          </div>
        </aside>
      </div>

      {(projectoAnterior || proximoProjecto) && (
        <nav aria-label="Outros projectos" className="mt-20 grid gap-4 border-t border-linha pt-10 sm:grid-cols-2">
          {projectoAnterior ? (
            <Link
              href={`/projectos/${projectoAnterior.slug}`}
              className="group painel p-6 transition-colors duration-200 hover:border-jade/40"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs text-esbatido">
                <IconeSeta tamanho={14} className="rotate-180" /> Anterior
              </span>
              <span className="mt-2 block text-lg font-semibold">{projectoAnterior.nome}</span>
            </Link>
          ) : (
            <span />
          )}
          {proximoProjecto && (
            <Link
              href={`/projectos/${proximoProjecto.slug}`}
              className="group painel p-6 text-left transition-colors duration-200 hover:border-jade/40 sm:text-right"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-esbatido sm:justify-end">
                Seguinte <IconeSeta tamanho={14} />
              </span>
              <span className="mt-2 block text-lg font-semibold">{proximoProjecto.nome}</span>
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
