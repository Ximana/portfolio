const pontos = [
  { cx: 20, cy: 24, r: 3, cor: "fill-jade", atraso: 0 },
  { cx: 76, cy: 10, r: 2, cor: "fill-jade", atraso: 300 },
  { cx: 132, cy: 46, r: 4, cor: "fill-ouro", atraso: 700 },
  { cx: 46, cy: 82, r: 2.5, cor: "fill-jade", atraso: 150 },
  { cx: 104, cy: 104, r: 3, cor: "fill-jade", atraso: 550 },
  { cx: 158, cy: 130, r: 2, cor: "fill-jade", atraso: 900 },
  { cx: 28, cy: 148, r: 3.5, cor: "fill-jade", atraso: 400 },
  { cx: 88, cy: 178, r: 2, cor: "fill-jade", atraso: 650 },
  { cx: 140, cy: 200, r: 3, cor: "fill-ouro", atraso: 200 },
];

/**
 * Constelação decorativa do Herói — puramente ambiental, escondida em ecrãs
 * pequenos e de leitores de ecrã (aria-hidden).
 */
export function ConstelacaoHeroi() {
  return (
    <svg
      viewBox="0 0 180 220"
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-40 h-48 opacity-40 pointer-events-none"
      aria-hidden="true"
    >
      {pontos.map((ponto, indice) => (
        <circle
          key={indice}
          cx={ponto.cx}
          cy={ponto.cy}
          r={ponto.r}
          className={`${ponto.cor} animate-pulse`}
          style={{ animationDelay: `${ponto.atraso}ms`, animationDuration: "3.2s" }}
        />
      ))}
    </svg>
  );
}
