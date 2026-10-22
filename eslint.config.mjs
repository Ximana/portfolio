import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** Configuração do ESLint 9 (formato "flat"). O Next.js 16 já não inclui `next lint`. */
const configuracaoEslint = [
  ...nextCoreWebVitals,
  { ignores: [".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"] },
];

export default configuracaoEslint;
