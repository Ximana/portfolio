import type { Projecto } from "@/tipos";

/** Caminho da imagem de capa de um projecto (campo `imagem` ou, por omissão, <slug>.jpg). */
export function imagemProjecto(projecto: Pick<Projecto, "slug" | "imagem">): string {
  return projecto.imagem ?? `/imagens/projectos/${projecto.slug}.jpg`;
}
