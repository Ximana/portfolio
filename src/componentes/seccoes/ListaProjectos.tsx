"use client";

import { useMemo, useState } from "react";
import type { Projecto } from "@/tipos";
import { CartaoProjecto } from "@/componentes/ui/CartaoProjecto";
import { juntarClasses } from "@/utilitarios/juntarClasses";

/** Lista de projectos com filtro por tecnologia (só mostra tecnologias usadas em 2 ou mais projectos). */
export function ListaProjectos({ projectos }: { projectos: Projecto[] }) {
  const [filtro, definirFiltro] = useState<string | null>(null);

  const tecnologias = useMemo(() => {
    const contagem = new Map<string, number>();
    projectos.forEach((p) => p.tecnologias.forEach((t) => contagem.set(t, (contagem.get(t) ?? 0) + 1)));
    return [...contagem.entries()].filter(([, n]) => n > 1).map(([t]) => t);
  }, [projectos]);

  const visiveis = filtro ? projectos.filter((p) => p.tecnologias.includes(filtro)) : projectos;

  return (
    <div>
      {tecnologias.length > 0 && (
        <div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por tecnologia">
          {[null, ...tecnologias].map((tecnologia) => {
            const activo = filtro === tecnologia;
            return (
              <button
                key={tecnologia ?? "todos"}
                type="button"
                aria-pressed={activo}
                onClick={() => definirFiltro(tecnologia)}
                className={juntarClasses(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-jade",
                  activo
                    ? "border-jade bg-jade/10 text-marfim"
                    : "border-linha text-esbatido hover:border-esbatido/50 hover:text-marfim"
                )}
              >
                {tecnologia ?? "Todos"}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visiveis.map((projecto) => (
          <div key={projecto.slug} className="h-full">
            <CartaoProjecto projecto={projecto} />
          </div>
        ))}
      </div>
      <p role="status" className="sr-only">{`${visiveis.length} projectos mostrados`}</p>
    </div>
  );
}
