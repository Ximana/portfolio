import type { Config } from "tailwindcss";

const configuracao: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Todos os tokens são variáveis CSS (ver globals.css) que mudam de valor
        // consoante o tema, as classes (text-marfim, bg-superficie, etc.) são
        // sempre as mesmas, em qualquer componente.
        fundo: "rgb(var(--cor-fundo) / <alpha-value>)",
        superficie: "rgb(var(--cor-superficie) / <alpha-value>)",
        linha: "rgb(var(--cor-linha) / <alpha-value>)",
        marfim: "rgb(var(--cor-marfim) / <alpha-value>)",
        esbatido: "rgb(var(--cor-esbatido) / <alpha-value>)",
        jade: "rgb(var(--cor-jade) / <alpha-value>)",
        "jade-escuro": "rgb(var(--cor-jade-escuro) / <alpha-value>)",
        ouro: "rgb(var(--cor-ouro) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--fonte-texto)", "system-ui", "sans-serif"],
        texto: ["var(--fonte-texto)", "system-ui", "sans-serif"],
        mono: ["var(--fonte-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        conteudo: "65ch",
      },
      boxShadow: {
        cartao: "0 1px 0 0 rgb(var(--cor-marfim) / 0.04) inset, 0 24px 48px -28px rgb(0 0 0 / 0.45)",
        brilho: "0 0 0 1px rgb(var(--cor-jade) / 0.35), 0 10px 28px -10px rgb(var(--cor-jade) / 0.55)",
      },
      keyframes: {
        cursor: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        cursor: "cursor 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default configuracao;
