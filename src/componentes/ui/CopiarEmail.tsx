"use client";

import { useState } from "react";

/** Botão discreto que copia o email para a área de transferência. */
export function CopiarEmail({ email }: { email: string }) {
  const [copiado, definirCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(email);
      definirCopiado(true);
      setTimeout(() => definirCopiado(false), 2200);
    } catch {
      // Sem permissão para a área de transferência: a ligação mailto continua disponível.
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copiar}
        className="ml-3 rounded-md border border-linha px-2 py-0.5 font-mono text-xs text-esbatido transition-colors duration-200 hover:border-jade hover:text-marfim focus-visible:outline focus-visible:outline-2 focus-visible:outline-jade"
      >
        {copiado ? "Copiado" : "Copiar"}
      </button>
      <span role="status" className="sr-only">
        {copiado ? "Email copiado" : ""}
      </span>
    </>
  );
}
