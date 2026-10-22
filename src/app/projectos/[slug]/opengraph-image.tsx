import { projectos } from "@/dados/projectos";
import { criarImagemSocial, tamanhoImagemSocial } from "@/utilitarios/imagemSocial";

export const alt = "Projecto de Paulo Ximana";
export const size = tamanhoImagemSocial;
export const contentType = "image/png";

export function generateStaticParams() {
  return projectos.map((projecto) => ({ slug: projecto.slug }));
}

export default function ImagemSocialProjecto({ params }: { params: { slug: string } }) {
  const projecto = projectos.find((item) => item.slug === params.slug);

  return criarImagemSocial({
    etiqueta: "Projecto",
    titulo: projecto?.nome ?? "Projecto",
    subtitulo: projecto?.resumo ?? "",
    etiquetas: projecto?.tecnologias ?? [],
  });
}
