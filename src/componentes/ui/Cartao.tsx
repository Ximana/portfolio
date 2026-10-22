import type { ReactNode } from "react";
import { juntarClasses } from "@/utilitarios/juntarClasses";

export function Cartao({
  children,
  className,
  interactivo = false,
}: {
  children: ReactNode;
  className?: string;
  /** Activa o realce ao passar o rato, usar apenas em cartões clicáveis. */
  interactivo?: boolean;
}) {
  return (
    <div
      className={juntarClasses(
        "painel transition-all duration-300",
        interactivo && "group-hover:-translate-y-0.5 group-hover:border-jade/40",
        className
      )}
    >
      {children}
    </div>
  );
}
