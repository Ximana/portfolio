import { perfil } from "@/dados/perfil";
import { criarImagemSocial, tamanhoImagemSocial } from "@/utilitarios/imagemSocial";

export const alt = `${perfil.nome}: ${perfil.cargo}`;
export const size = tamanhoImagemSocial;
export const contentType = "image/png";

export default function ImagemSocial() {
  return criarImagemSocial({
    etiqueta: "Portfólio",
    titulo: perfil.nome,
    subtitulo: perfil.cargo,
    etiquetas: ["Next.js", "Django", "IA", "React Native"],
  });
}
