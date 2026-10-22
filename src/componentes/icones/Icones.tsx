import type { SVGProps } from "react";

/**
 * Conjunto mínimo de ícones, usados apenas onde ajudam a reconhecer ou a
 * orientar (redes sociais, email, setas de ação, estados do formulário).
 * Todos herdam a cor do texto (currentColor) e são decorativos (aria-hidden).
 */
type PropsIcone = SVGProps<SVGSVGElement> & { tamanho?: number };

function Base({ tamanho = 16, children, ...resto }: PropsIcone) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...resto}
    >
      {children}
    </svg>
  );
}

export function IconeSeta(props: PropsIcone) {
  return (
    <Base {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Base>
  );
}

export function IconeEmail(props: PropsIcone) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Base>
  );
}

export function IconeVerificar(props: PropsIcone) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.8 2.8L16 9.8" />
    </Base>
  );
}

export function IconeAlerta(props: PropsIcone) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.5h.01" />
    </Base>
  );
}

export function IconeGitHub(props: PropsIcone) {
  return (
    <Base {...props} fill="currentColor" stroke="none">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.2-3.37-1.2-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </Base>
  );
}

export function IconeLinkedIn(props: PropsIcone) {
  return (
    <Base {...props} fill="currentColor" stroke="none">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.05c0-1.2-.02-2.75-1.67-2.75-1.68 0-1.93 1.31-1.93 2.66V21h-4V9.75Z" />
    </Base>
  );
}

/** Devolve o ícone de uma rede social pelo nome, ou nada se não houver. */
export function IconeRede({ nome, ...props }: PropsIcone & { nome: string }) {
  const chave = nome.toLowerCase();
  if (chave === "github") return <IconeGitHub {...props} />;
  if (chave === "linkedin") return <IconeLinkedIn {...props} />;
  return null;
}
