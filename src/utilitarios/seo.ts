import type { Metadata } from "next";
import { perfil } from "@/dados/perfil";
import { gruposCompetencias } from "@/dados/competencias";

/** URL pública do site, sem barra final. Definir em NEXT_PUBLIC_URL_SITE. */
export const urlSite = (process.env.NEXT_PUBLIC_URL_SITE ?? "https://pauloximana.ao").replace(
  /\/+$/,
  ""
);

export const urlAbsoluta = (caminho = "/") => `${urlSite}${caminho === "/" ? "" : caminho}`;

/** Identificadores estáveis das entidades nos dados estruturados (JSON-LD). */
export const idPessoa = `${urlSite}/#pessoa`;
export const idSite = `${urlSite}/#site`;

interface OpcoesMetadata {
  /** Título da página. O modelo do layout acrescenta " | Paulo Ximana". */
  titulo: string;
  /** Usa o título tal como está, sem o modelo do layout. */
  tituloAbsoluto?: boolean;
  descricao: string;
  /** Caminho da página, ex.: "/sobre". */
  caminho: string;
  /** Caminho da imagem de partilha. Por defeito, a imagem geral do site. */
  imagem?: string;
  tipo?: "website" | "article" | "profile";
}

/**
 * Cria os metadados de uma página (título, descrição, URL canónico, Open Graph
 * e Twitter). Devem ser sempre definidos em conjunto: o Next.js substitui,
 * e não funde, o Open Graph do layout quando uma página define o seu.
 */
export function criarMetadata({
  titulo,
  tituloAbsoluto = false,
  descricao,
  caminho,
  imagem = "/opengraph-image",
  tipo = "website",
}: OpcoesMetadata): Metadata {
  const tituloCompleto = tituloAbsoluto ? titulo : `${titulo} | ${perfil.nome}`;

  return {
    title: tituloAbsoluto ? { absolute: titulo } : titulo,
    description: descricao,
    alternates: {
      canonical: caminho,
      languages: { "pt-AO": caminho, "x-default": caminho },
    },
    openGraph: {
      type: tipo,
      locale: "pt_AO",
      siteName: perfil.nome,
      url: caminho,
      title: tituloCompleto,
      description: descricao,
      images: [{ url: imagem, width: 1200, height: 630, alt: tituloCompleto }],
    },
    twitter: {
      card: "summary_large_image",
      title: tituloCompleto,
      description: descricao,
      images: [imagem],
    },
  };
}

/** Pessoa: a entidade central do site, referida por todas as páginas. */
export function dadosPessoa() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": idPessoa,
    name: perfil.nome,
    url: urlAbsoluta("/"),
    image: urlAbsoluta("/imagens/perfil/perfil.jpg"),
    email: `mailto:${perfil.email}`,
    jobTitle: "Desenvolvedor Full-Stack",
    description: perfil.descricaoSeo,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Luanda",
      addressCountry: "AO",
    },
    nationality: { "@type": "Country", name: "Angola" },
    alumniOf: { "@type": "CollegeOrUniversity", name: perfil.instituicao },
    worksFor: { "@type": "Organization", name: "QUANTA" },
    knowsAbout: gruposCompetencias.flatMap((grupo) => grupo.itens),
    knowsLanguage: "pt",
    sameAs: perfil.redesSociais.map((rede) => rede.url),
  };
}

export function dadosSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": idSite,
    url: urlAbsoluta("/"),
    name: perfil.nome,
    description: perfil.descricaoSeo,
    inLanguage: "pt-AO",
    publisher: { "@id": idPessoa },
  };
}

export function dadosMigalhas(itens: Array<{ nome: string; caminho: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((item, indice) => ({
      "@type": "ListItem",
      position: indice + 1,
      name: item.nome,
      item: urlAbsoluta(item.caminho),
    })),
  };
}
