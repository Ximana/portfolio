"use client";

import { useTema } from "@/contextos/ContextoTema";

export function AlternadorTema() {
  const { tema, alternarTema } = useTema();
  const eEscuro = tema === "escuro";

  return (
    <button
      type="button"
      onClick={alternarTema}
      aria-label={eEscuro ? "Activar tema claro" : "Activar tema escuro"}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-linha bg-superficie/70 text-esbatido transition-colors duration-200 hover:border-esbatido/50 hover:text-marfim"
    >
      {/* Sol, visível no tema escuro */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          eEscuro ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      {/* Lua, visível no tema claro */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          eEscuro ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}
