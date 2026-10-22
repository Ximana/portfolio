import type { Metadata, Viewport } from "next";
import { fonteTexto, fonteMono } from "@/estilos/tipografia";
import { FornecedorTema, scriptTemaInicial } from "@/contextos/ContextoTema";
import { Cabecalho } from "@/componentes/layout/Cabecalho";
import { Rodape } from "@/componentes/layout/Rodape";
import { BarraProgresso } from "@/componentes/layout/BarraProgresso";
import { perfil } from "@/dados/perfil";
import { DadosEstruturados } from "@/componentes/seo/DadosEstruturados";
import { dadosPessoa, dadosSite, urlSite } from "@/utilitarios/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(urlSite),
  title: {
    default: `${perfil.nome} | Desenvolvedor Full-Stack em Luanda, Angola`,
    template: `%s | ${perfil.nome}`,
  },
  description: perfil.descricaoSeo,
  applicationName: perfil.nome,
  keywords: perfil.palavrasChave,
  authors: [{ name: perfil.nome, url: urlSite }],
  creator: perfil.nome,
  publisher: perfil.nome,
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Códigos de verificação do Google Search Console e do Bing Webmaster Tools
  // (opcionais, definidos em .env.local; ver README).
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    siteName: perfil.nome,
    url: "/",
    title: `${perfil.nome} | Desenvolvedor Full-Stack em Luanda, Angola`,
    description: perfil.descricaoSeo,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0D0E" },
  ],
};

export default function LayoutRaiz({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-AO"
      className={`${fonteTexto.variable} ${fonteMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTemaInicial }} />
      </head>
      <body>
        <DadosEstruturados dados={[dadosSite(), dadosPessoa()]} />
        <FornecedorTema>
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-jade focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-fundo"
          >
            Saltar para o conteúdo
          </a>
          <BarraProgresso />
          <Cabecalho />
          <main id="conteudo">{children}</main>
          <Rodape />
        </FornecedorTema>
      </body>
    </html>
  );
}
