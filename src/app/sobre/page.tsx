import type { Metadata } from "next";
import Image from "next/image";
import { criarMetadata, dadosMigalhas, idPessoa, urlAbsoluta } from "@/utilitarios/seo";
import { DadosEstruturados } from "@/componentes/seo/DadosEstruturados";
import { perfil } from "@/dados/perfil";
import { Reconhecimentos } from "@/componentes/seccoes/Reconhecimentos";
import { PercursoAcademico } from "@/componentes/seccoes/PercursoAcademico";
import { LigacaoBotao } from "@/componentes/ui/Botao";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";

export const metadata: Metadata = criarMetadata({
  titulo: "Sobre mim: licenciado em Ciências da Computação",
  descricao:
    "Percurso de Paulo Ximana: licenciado em Ciências da Computação, desenvolvedor full-stack em Luanda, Angola.",
  caminho: "/sobre",
  tipo: "profile",
});

export default function PaginaSobre() {
  const [introducao, ...restante] = perfil.bioCompleta;

  return (
    <div className="contentor py-16 md:py-24">
      <DadosEstruturados
        dados={[
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: urlAbsoluta("/sobre"),
            name: `Sobre ${perfil.nome}`,
            inLanguage: "pt-AO",
            mainEntity: { "@id": idPessoa },
          },
          dadosMigalhas([
            { nome: "Início", caminho: "/" },
            { nome: "Sobre", caminho: "/sobre" },
          ]),
        ]}
      />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="painel relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden lg:mx-0">
            <Image
              src="/imagens/perfil/perfil.jpg"
              alt={`Fotografia de ${perfil.nome}`}
              fill
              sizes="320px"
              priority
              className="object-cover"
            />
          </div>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-linha pb-3">
              <dt className="text-esbatido">Localidade</dt>
              <dd className="text-right">{perfil.localidade}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-linha pb-3">
              <dt className="text-esbatido">Email</dt>
              <dd className="text-right font-mono text-xs leading-5 break-all">{perfil.email}</dd>
            </div>
          </dl>
        </aside>

        <div>
          <h1 className="text-4xl font-semibold md:text-5xl">Sobre mim</h1>

          <p className="mt-8 max-w-conteudo text-xl leading-9 text-marfim/90">{introducao}</p>
          <div className="mt-6 max-w-conteudo space-y-5">
            {restante.map((paragrafo, indice) => (
              <p key={indice} className="leading-8 text-esbatido">
                {paragrafo}
              </p>
            ))}
          </div>

          <PercursoAcademico />

          <Reconhecimentos />

          <RevelarAoRolar>
            <div className="painel p-8">
              <p className="max-w-conteudo text-lg leading-8">{perfil.disponibilidade}.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <LigacaoBotao href="/contacto" variante="primario">
                  Entrar em contacto
                </LigacaoBotao>
                {perfil.cv && (
                  <LigacaoBotao href={perfil.cv.url} download={perfil.cv.nome} variante="secundario">
                    Descarregar currículo
                  </LigacaoBotao>
                )}
              </div>
            </div>
          </RevelarAoRolar>
        </div>
      </div>
    </div>
  );
}
