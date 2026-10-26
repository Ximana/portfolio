import type { Metadata } from "next";
import { criarMetadata, dadosMigalhas, urlAbsoluta } from "@/utilitarios/seo";
import { DadosEstruturados } from "@/componentes/seo/DadosEstruturados";
import { projectos } from "@/dados/projectos";
import { ListaProjectos } from "@/componentes/seccoes/ListaProjectos";
import { CabecalhoSeccao } from "@/componentes/ui/CabecalhoSeccao";

export const metadata: Metadata = criarMetadata({
  titulo: "Projectos de software e inteligência artificial",
  descricao:
    "Projectos de Paulo Ximana: PulmoVision (deep learning na saúde), QUANTA Learn (aprendizagem de inglês), Agenda QUANTA (agenda escolar), Rikoa SGH (gestão hospitalar), RZN App (desporto e comunidade), Meteo (meteorologia), Okuyeva (tradutor de Língua Gestual Angolana, 2.º lugar no Hackathon Zero Barreiras) e análise de saúde pública com Hadoop.",
  caminho: "/projectos",
});

export default function PaginaProjectos() {
  return (
    <div className="contentor py-16 md:py-24">
      <DadosEstruturados
        dados={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            url: urlAbsoluta("/projectos"),
            name: "Projectos de Paulo Ximana",
            inLanguage: "pt-AO",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: projectos.map((projecto, indice) => ({
                "@type": "ListItem",
                position: indice + 1,
                url: urlAbsoluta(`/projectos/${projecto.slug}`),
                name: projecto.nome,
              })),
            },
          },
          dadosMigalhas([
            { nome: "Início", caminho: "/" },
            { nome: "Projectos", caminho: "/projectos" },
          ]),
        ]}
      />
      <CabecalhoSeccao
        nivel="h1"
        titulo="Uma selecção do que tenho construído"
        descricao="Da startup QUANTA ao trabalho académico e independente: da saúde à educação, ao desporto e à acessibilidade."
      />

      <ListaProjectos projectos={projectos} />
    </div>
  );
}
