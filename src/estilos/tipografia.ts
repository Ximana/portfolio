import { Inter, JetBrains_Mono } from "next/font/google";

/** Texto e títulos, uma única família com pesos e espaçamento bem trabalhados. */
export const fonteTexto = Inter({
  subsets: ["latin"],
  variable: "--fonte-texto",
  display: "swap",
});

/** Etiquetas técnicas, números e blocos de código. */
export const fonteMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--fonte-mono",
  display: "swap",
});
