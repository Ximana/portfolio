import type { MetadataRoute } from "next";
import { projectos } from "@/dados/projectos";
import { urlAbsoluta } from "@/utilitarios/seo";

/**
 * Data da última alteração de conteúdo. Actualizar quando o conteúdo mudar:
 * datas "sempre novas" levam o Google a desconfiar do campo lastModified.
 */
const ultimaActualizacao = new Date("2026-10-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas: MetadataRoute.Sitemap = [
    { url: urlAbsoluta("/"), changeFrequency: "monthly", priority: 1 },
    { url: urlAbsoluta("/projectos"), changeFrequency: "monthly", priority: 0.9 },
    { url: urlAbsoluta("/sobre"), changeFrequency: "monthly", priority: 0.8 },
    { url: urlAbsoluta("/contacto"), changeFrequency: "yearly", priority: 0.6 },
    { url: urlAbsoluta("/cv"), changeFrequency: "monthly", priority: 0.5 },
  ];

  const paginasProjectos: MetadataRoute.Sitemap = projectos.map((projecto) => ({
    url: urlAbsoluta(`/projectos/${projecto.slug}`),
    changeFrequency: "monthly",
    priority: projecto.destaque ? 0.8 : 0.6,
  }));

  return [...paginas, ...paginasProjectos].map((entrada) => ({
    ...entrada,
    lastModified: ultimaActualizacao,
  }));
}
