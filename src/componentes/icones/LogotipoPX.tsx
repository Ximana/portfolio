export function LogotipoPX({ tamanho = 32 }: { tamanho?: number }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Monograma Paulo Ximana"
      role="img"
      className="transition-transform duration-300 group-hover:scale-110"
    >
      <path
        d="M4 4H16C20.4183 4 24 7.58172 24 12C24 16.4183 20.4183 20 16 20H4V4Z"
        stroke="currentColor"
        strokeWidth="2"
        className="text-jade"
      />
      <path d="M4 20V36" stroke="currentColor" strokeWidth="2" className="text-jade" />
      <path
        d="M24 20L36 36"
        stroke="currentColor"
        strokeWidth="2"
        className="text-marfim transition-colors duration-300 group-hover:text-jade"
      />
      <path
        d="M36 20L24 36"
        stroke="currentColor"
        strokeWidth="2"
        className="text-marfim transition-colors duration-300 group-hover:text-jade"
      />
    </svg>
  );
}
