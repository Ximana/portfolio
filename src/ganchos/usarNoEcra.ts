"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Devolve uma referência a atribuir a um elemento e `true` assim que esse
 * elemento entra no ecrã pela primeira vez. Deixa de observar depois disso,
 * para não repetir a animação a cada scroll.
 */
export function usarNoEcra<T extends HTMLElement>(
  limiar = 0.15
): { referencia: RefObject<T>; emVista: boolean } {
  const referencia = useRef<T | null>(null);
  const [emVista, definirEmVista] = useState(false);

  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          definirEmVista(true);
          observador.disconnect();
        }
      },
      { threshold: limiar }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, [limiar]);

  return { referencia: referencia as RefObject<T>, emVista };
}
