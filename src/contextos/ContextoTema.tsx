"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { Tema } from "@/tipos";

interface ValorContextoTema {
  tema: Tema;
  alternarTema: () => void;
}

const ContextoTema = createContext<ValorContextoTema | undefined>(undefined);

export const CHAVE_ARMAZENAMENTO_TEMA = "px-tema";

/**
 * Script executado antes da primeira pintura (ver layout.tsx) para aplicar o
 * tema certo imediatamente, evita o "flash" de tema errado ao carregar.
 */
export const scriptTemaInicial = `(function(){try{var t=localStorage.getItem("${CHAVE_ARMAZENAMENTO_TEMA}");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"claro":"escuro"}document.documentElement.classList.toggle("dark",t==="escuro")}catch(e){document.documentElement.classList.add("dark")}})();`;

export function FornecedorTema({ children }: { children: ReactNode }) {
  const [tema, definirTema] = useState<Tema>("escuro");

  // Sincroniza com o que o script inicial já aplicou ao <html>.
  useEffect(() => {
    // Lê o DOM só no navegador (evita diferenças de hidratação e o "flash" de tema).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    definirTema(document.documentElement.classList.contains("dark") ? "escuro" : "claro");
  }, []);

  const alternarTema = useCallback(() => {
    const raiz = document.documentElement;
    const proximo: Tema = raiz.classList.contains("dark") ? "claro" : "escuro";

    raiz.classList.add("tema-transicao");
    raiz.classList.toggle("dark", proximo === "escuro");
    window.setTimeout(() => raiz.classList.remove("tema-transicao"), 350);

    try {
      window.localStorage.setItem(CHAVE_ARMAZENAMENTO_TEMA, proximo);
    } catch {
      /* armazenamento indisponível, o tema aplica-se na mesma nesta sessão */
    }
    definirTema(proximo);
  }, []);

  return (
    <ContextoTema.Provider value={{ tema, alternarTema }}>{children}</ContextoTema.Provider>
  );
}

export function useTema(): ValorContextoTema {
  const contexto = useContext(ContextoTema);
  if (!contexto) {
    throw new Error("useTema deve ser usado dentro de um FornecedorTema");
  }
  return contexto;
}
