import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { juntarClasses } from "@/utilitarios/juntarClasses";

type VarianteBotao = "primario" | "secundario" | "texto";
type TamanhoBotao = "md" | "sm";

const classesBase =
  "group inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const classesPorVariante: Record<VarianteBotao, string> = {
  primario: "bg-jade text-fundo hover:bg-jade-escuro hover:-translate-y-px",
  secundario:
    "border border-linha bg-superficie/70 text-marfim hover:border-esbatido/50 hover:bg-superficie",
  texto: "text-esbatido hover:text-marfim",
};

const classesPorTamanho: Record<TamanhoBotao, string> = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
};

interface PropsComuns {
  variante?: VarianteBotao;
  tamanho?: TamanhoBotao;
}

function classesDoBotao({ variante = "primario", tamanho = "md" }: PropsComuns, extra?: string) {
  return juntarClasses(
    classesBase,
    classesPorVariante[variante],
    variante !== "texto" && classesPorTamanho[tamanho],
    variante === "texto" && "py-2 text-sm",
    extra
  );
}

interface PropsBotao extends ButtonHTMLAttributes<HTMLButtonElement>, PropsComuns {}

export function Botao({ variante, tamanho, className, ...resto }: PropsBotao) {
  return <button className={classesDoBotao({ variante, tamanho }, className)} {...resto} />;
}

interface PropsLigacaoBotao extends AnchorHTMLAttributes<HTMLAnchorElement>, PropsComuns {
  href: string;
  children: ReactNode;
}

export function LigacaoBotao({ variante, tamanho, className, href, ...resto }: PropsLigacaoBotao) {
  const classes = classesDoBotao({ variante, tamanho }, className);
  const eInterna = (href.startsWith("/") || href.startsWith("#")) && !resto.download;

  if (eInterna) {
    return <Link href={href} className={classes} {...resto} />;
  }
  return <a href={href} className={classes} {...resto} />;
}
