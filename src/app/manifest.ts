import type { MetadataRoute } from "next";
import { perfil } from "@/dados/perfil";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${perfil.nome} | ${perfil.cargo}`,
    short_name: perfil.nome,
    description: perfil.descricaoSeo,
    lang: "pt-AO",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0D0E",
    theme_color: "#0A0D0E",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
