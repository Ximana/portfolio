"use client";

import { useEffect, useState } from "react";

/**
 * Devolve `true` quando a página foi rolada além de `limite` pixels.
 * Útil, por exemplo, para dar uma aparência diferente ao cabeçalho ao rolar.
 */
export function usarDeteccaoScroll(limite = 8): boolean {
  const [rolado, definirRolado] = useState(false);

  useEffect(() => {
    function verificarPosicao() {
      definirRolado(window.scrollY > limite);
    }

    verificarPosicao();
    window.addEventListener("scroll", verificarPosicao, { passive: true });
    return () => window.removeEventListener("scroll", verificarPosicao);
  }, [limite]);

  return rolado;
}
