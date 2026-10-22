"use client";

import { useEffect, useState } from "react";

export function BarraProgresso() {
  const [progresso, definirProgresso] = useState(0);

  useEffect(() => {
    function calcularProgresso() {
      const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
      definirProgresso(alturaTotal > 0 ? (window.scrollY / alturaTotal) * 100 : 0);
    }

    calcularProgresso();
    window.addEventListener("scroll", calcularProgresso, { passive: true });
    window.addEventListener("resize", calcularProgresso);
    return () => {
      window.removeEventListener("scroll", calcularProgresso);
      window.removeEventListener("resize", calcularProgresso);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px]" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-jade to-ouro transition-[width] duration-150 ease-out"
        style={{ width: `${progresso}%` }}
      />
    </div>
  );
}
