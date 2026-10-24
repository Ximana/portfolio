/**
 * URL público do site.
 * 1. NEXT_PUBLIC_URL_SITE (definido por ti) tem sempre prioridade.
 * 2. Na Vercel, se não estiver definido, usa o domínio de produção do projecto
 *    (VERCEL_PROJECT_PRODUCTION_URL), para o sitemap, os canónicos e o Open Graph
 *    não apontarem para um domínio que ainda não existe.
 * 3. Caso contrário, o valor por omissão fica em src/utilitarios/seo.ts.
 */
const urlProducaoVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;
const urlSite = process.env.NEXT_PUBLIC_URL_SITE || urlProducaoVercel;

/** Cache moderada para ficheiros de public/: podem ser substituídos mantendo o nome. */
const cacheEstaticos = "public, max-age=86400, stale-while-revalidate=604800";

/** @type {import('next').NextConfig} */
const configuracaoNext = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Docker/VPS: BUILD_STANDALONE=true gera .next/standalone (servidor mínimo).
  // Na Vercel e no desenvolvimento não é usado.
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  env: urlSite ? { NEXT_PUBLIC_URL_SITE: urlSite } : {},
  images: {
    // Formatos modernos e mais leves (melhoram o LCP, um factor de ranking).
    formats: ["image/avif", "image/webp"],
    // Adicionar aqui os domínios remotos usados para imagens (ex.: CDN de projectos)
    remotePatterns: [],
  },
  async redirects() {
    return [
      // O projecto "Zero Barreiras" passou a chamar-se Okuyeva (o nome anterior era o do hackathon).
      { source: "/projectos/zero-barreiras", destination: "/projectos/okuyeva", permanent: true },
      // Projecto removido do portfólio.
      { source: "/projectos/recruta-app", destination: "/projectos", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // HTTPS obrigatório durante 2 anos (os navegadores só aplicam em HTTPS).
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
      { source: "/imagens/:path*", headers: [{ key: "Cache-Control", value: cacheEstaticos }] },
      { source: "/ficheiros/:path*", headers: [{ key: "Cache-Control", value: cacheEstaticos }] },
    ];
  },
};

export default configuracaoNext;
