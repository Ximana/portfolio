import type { Metadata } from "next";
import { criarMetadata, dadosMigalhas, idPessoa, urlAbsoluta } from "@/utilitarios/seo";
import { DadosEstruturados } from "@/componentes/seo/DadosEstruturados";
import { perfil } from "@/dados/perfil";
import { IconeEmail, IconeRede } from "@/componentes/icones/Icones";
import { CopiarEmail } from "@/componentes/ui/CopiarEmail";
import { FormularioContacto } from "@/componentes/seccoes/FormularioContacto";

export const metadata: Metadata = criarMetadata({
  titulo: "Contacto e colaborações",
  descricao:
    "Contacte Paulo Ximana, desenvolvedor full-stack em Luanda, para colaborações, projectos freelance e oportunidades em software e inteligência artificial.",
  caminho: "/contacto",
});

export default function PaginaContacto() {
  return (
    <div className="contentor py-16 md:py-24">
      <DadosEstruturados
        dados={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: urlAbsoluta("/contacto"),
            name: `Contacto de ${perfil.nome}`,
            inLanguage: "pt-AO",
            mainEntity: { "@id": idPessoa },
          },
          dadosMigalhas([
            { nome: "Início", caminho: "/" },
            { nome: "Contacto", caminho: "/contacto" },
          ]),
        ]}
      />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h1 className="text-4xl font-semibold md:text-5xl">Vamos conversar.</h1>
          <p className="mt-6 max-w-conteudo text-lg leading-8 text-esbatido">
            {perfil.disponibilidade}. Envie-me uma mensagem com os detalhes e respondo o mais brevemente possível.
          </p>

          <dl className="mt-10 divide-y divide-linha border-y border-linha">
            <div className="grid grid-cols-[130px_1fr] gap-4 py-4 text-sm">
              <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-esbatido">
                <IconeEmail tamanho={15} /> Email
              </dt>
              <dd>
                <a
                  href={`mailto:${perfil.email}`}
                  className="underline decoration-linha underline-offset-4 transition-colors duration-200 hover:decoration-jade"
                >
                  {perfil.email}
                </a>
                <CopiarEmail email={perfil.email} />
              </dd>
            </div>
            {perfil.redesSociais.map((rede) => (
              <div key={rede.nome} className="grid grid-cols-[130px_1fr] gap-4 py-4 text-sm">
                <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-esbatido">
                  <IconeRede nome={rede.nome} tamanho={15} /> {rede.nome}
                </dt>
                <dd>
                  <a
                    href={rede.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-linha underline-offset-4 transition-colors duration-200 hover:decoration-jade"
                  >
                    {rede.identificador}
                  </a>
                </dd>
              </div>
            ))}
            {perfil.cv && (
              <div className="grid grid-cols-[130px_1fr] gap-4 py-4 text-sm">
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-esbatido">Currículo</dt>
                <dd>
                  <a
                    href={perfil.cv.url}
                    download={perfil.cv.nome}
                    className="underline decoration-linha underline-offset-4 transition-colors duration-200 hover:decoration-jade"
                  >
                    Descarregar em PDF
                  </a>
                </dd>
              </div>
            )}
            <div className="grid grid-cols-[130px_1fr] gap-4 py-4 text-sm">
              <dt className="font-mono text-xs uppercase tracking-[0.1em] text-esbatido">Local</dt>
              <dd>{perfil.localidade}</dd>
            </div>
          </dl>
        </div>

        <FormularioContacto />
      </div>
    </div>
  );
}
