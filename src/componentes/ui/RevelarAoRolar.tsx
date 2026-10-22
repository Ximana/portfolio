"use client";

import type { ReactNode } from "react";
import { useNoEcra } from "@/ganchos/useNoEcra";
import { juntarClasses } from "@/utilitarios/juntarClasses";

export function RevelarAoRolar({
  children,
  atraso = 0,
  className,
}: {
  children: ReactNode;
  /** Atraso em milissegundos, útil para escalonar vários itens em sequência. */
  atraso?: number;
  className?: string;
}) {
  const { referencia, emVista } = useNoEcra<HTMLDivElement>();

  return (
    <div
      ref={referencia}
      className={juntarClasses(
        "transition-all duration-700 ease-out",
        emVista ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
      style={{ transitionDelay: `${atraso}ms` }}
    >
      {children}
    </div>
  );
}
