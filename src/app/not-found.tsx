import type { Metadata } from "next";
import Link from "next/link";
import { LigacaoBotao } from "@/componentes/ui/Botao";
import { projectos } from "@/dados/projectos";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NaoEncontrado() {
  return (
    <div className="contentor py-28 md:py-40">
      <p className="font-mono text-6xl font-medium text-jade md:text-8xl">404</p>
      <h1 className="mt-6 text-3xl font-semibold md:text-4xl">Página não encontrada.</h1>
      <p className="mt-4 max-w-conteudo text-lg text-esbatido">
        A página que procura não existe ou foi movida. Pode continuar por aqui:
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LigacaoBotao href="/">Voltar ao início</LigacaoBotao>
        <LigacaoBotao href="/projectos" variante="secundario">
          Ver projectos
        </LigacaoBotao>
        <LigacaoBotao href="/contacto" variante="secundario">
          Contacto
        </LigacaoBotao>
      </div>
      <ul className="mt-10 max-w-conteudo divide-y divide-linha border-y border-linha text-sm">
        {projectos.map((projecto) => (
          <li key={projecto.slug}>
            <Link
              href={`/projectos/${projecto.slug}`}
              className="flex justify-between gap-4 py-3 transition-colors duration-200 hover:text-jade"
            >
              <span className="font-medium">{projecto.nome}</span>
              <span className="truncate text-esbatido">{projecto.resumo}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
