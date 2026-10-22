"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconeSeta } from "@/componentes/icones/Icones";
import { LogotipoPX } from "@/componentes/icones/LogotipoPX";
import { AlternadorTema } from "@/componentes/layout/AlternadorTema";
import { LigacaoBotao } from "@/componentes/ui/Botao";
import { useDeteccaoScroll } from "@/ganchos/useDeteccaoScroll";
import { perfil } from "@/dados/perfil";
import { juntarClasses } from "@/utilitarios/juntarClasses";

const ligacoesNavegacao = [
  { href: "/", rotulo: "Início" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/projectos", rotulo: "Projectos" },
];

export function Cabecalho() {
  const caminho = usePathname();
  const rolado = useDeteccaoScroll(8);
  const [menuAberto, definirMenuAberto] = useState(false);

  const estaActiva = (href: string) => (href === "/" ? caminho === "/" : caminho.startsWith(href));

  // Fecha o menu móvel ao mudar de página ou ao carregar em Escape.
  useEffect(() => {
    definirMenuAberto(false);
  }, [caminho]);

  useEffect(() => {
    if (!menuAberto) return;
    const aoPremirTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") definirMenuAberto(false);
    };
    window.addEventListener("keydown", aoPremirTecla);
    return () => window.removeEventListener("keydown", aoPremirTecla);
  }, [menuAberto]);

  return (
    <header
      className={juntarClasses(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        rolado || menuAberto
          ? "border-linha bg-fundo/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="contentor flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Página inicial"
          className="group flex items-center gap-3 text-marfim"
          onClick={() => definirMenuAberto(false)}
        >
          <LogotipoPX tamanho={28} />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">{perfil.nome}</span>
        </Link>

        {/* Navegação de ecrã largo */}
        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {ligacoesNavegacao.map((ligacao) => {
            const activa = estaActiva(ligacao.href);
            return (
              <Link
                key={ligacao.href}
                href={ligacao.href}
                aria-current={activa ? "page" : undefined}
                className={juntarClasses(
                  "relative rounded-md px-3.5 py-2 text-sm transition-colors duration-200",
                  activa ? "text-marfim" : "text-esbatido hover:text-marfim"
                )}
              >
                {ligacao.rotulo}
                {activa && (
                  <span className="absolute inset-x-3.5 -bottom-[13px] h-px bg-jade" aria-hidden="true" />
                )}
              </Link>
            );
          })}
          <span className="mx-3 h-5 w-px bg-linha" aria-hidden="true" />
          <AlternadorTema />
          <LigacaoBotao href="/contacto" tamanho="sm" className="ml-2">
            Contacto
          </LigacaoBotao>
        </nav>

        {/* Botão de menu em ecrãs pequenos */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-linha bg-superficie/70 md:hidden"
          aria-expanded={menuAberto}
          aria-controls="menu-navegacao-movel"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => definirMenuAberto((aberto) => !aberto)}
        >
          <span
            className={juntarClasses(
              "h-px w-[18px] bg-marfim transition-transform duration-200",
              menuAberto && "translate-y-[3px] rotate-45"
            )}
          />
          <span
            className={juntarClasses(
              "h-px w-[18px] bg-marfim transition-transform duration-200",
              menuAberto && "-translate-y-[3px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Navegação de ecrã pequeno */}
      {menuAberto && (
        <nav
          id="menu-navegacao-movel"
          aria-label="Principal"
          className="contentor border-t border-linha pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {[...ligacoesNavegacao, { href: "/contacto", rotulo: "Contacto" }].map((ligacao) => {
              const activa = estaActiva(ligacao.href);
              return (
                <li key={ligacao.href} className="border-b border-linha/60 last:border-b-0">
                  <Link
                    href={ligacao.href}
                    aria-current={activa ? "page" : undefined}
                    className={juntarClasses(
                      "flex items-center justify-between py-4 text-xl font-medium tracking-tight",
                      activa ? "text-jade" : "text-marfim"
                    )}
                  >
                    {ligacao.rotulo}
                    <IconeSeta tamanho={18} className="text-esbatido" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-esbatido">Tema</span>
            <AlternadorTema />
          </div>
        </nav>
      )}
    </header>
  );
}
