import { projectos } from "@/dados/projectos";
import { criarImagemSocial, tamanhoImagemSocial } from "@/utilitarios/imagemSocial";

export const alt = "Projecto de Paulo Ximana";
export const size = tamanhoImagemSocial;
export const contentType = "image/png";

export function generateStaticParams() {
  return projectos.map((projecto) => ({ slug: projecto.slug }));
}

export default async function ImagemSocialProjecto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projecto = projectos.find((item) => item.slug === slug);

  return criarImagemSocial({
    etiqueta: "Projecto",
    titulo: projecto?.nome ?? "Projecto",
    subtitulo: projecto?.resumo ?? "",
    etiquetas: projecto?.tecnologias ?? [],
  });
}
