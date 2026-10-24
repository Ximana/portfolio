#!/usr/bin/env node
/**
 * Lista o conteúdo ainda por preencher ou substituir antes de publicar.
 * Sem dependências. Uso: npm run verificar-conteudo
 * Sai com código 0 mesmo com pendências (é um aviso, não uma barreira).
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const ler = (caminho) => readFileSync(join(raiz, caminho), "utf8");
const pendencias = [];
const avisar = (grupo, texto) => pendencias.push({ grupo, texto });

// 1. Imagens geradas (marcadas com o comentário JPEG "px-gerado") ainda em uso.
const geradas = (caminho) => existsSync(join(raiz, caminho)) && readFileSync(join(raiz, caminho)).includes("px-gerado");
if (geradas("public/imagens/perfil/perfil.jpg")) avisar("Imagens", "Fotografia de perfil é um monograma gerado: substituir por uma fotografia real (public/imagens/perfil/perfil.jpg).");
for (const slug of ["pulmovision", "quanta-learn", "medinova", "rzn-app", "okuyeva", "hadoop-saude-angola"]) {
  if (geradas(`public/imagens/projectos/${slug}.jpg`)) avisar("Imagens", `Capa de "${slug}" é ilustrativa: substituir por uma captura real (public/imagens/projectos/${slug}.jpg).`);
}

// 2. Dados de contacto e domínio.
const perfil = ler("src/dados/perfil.ts");
if (perfil.includes("pauloximana.ao")) avisar("Contactos", "Email de exemplo (@pauloximana.ao) em src/dados/perfil.ts: usar o email real.");
if (perfil.includes("github.com/pauloximana")) avisar("Contactos", "URL do GitHub parece de exemplo: confirmar em src/dados/perfil.ts.");
if (perfil.includes("linkedin.com/in/pauloximana")) avisar("Contactos", "URL do LinkedIn parece de exemplo: confirmar em src/dados/perfil.ts.");
if (!existsSync(join(raiz, ".env.local")) && !process.env.NEXT_PUBLIC_URL_SITE) avisar("Configuração", "NEXT_PUBLIC_URL_SITE não definido: sitemap, canónicos e Open Graph usam o domínio por omissão.");
if (!process.env.NEXT_PUBLIC_FORMSPREE_ID && !(existsSync(join(raiz, ".env.local")) && ler(".env.local").includes("FORMSPREE_ID="))) avisar("Configuração", "NEXT_PUBLIC_FORMSPREE_ID em falta: o formulário só abre o programa de email do visitante (alternativa). Ver docs/12.");

// 3. Projectos.
// Os projectos estão em src/dados/projectos.ts e em src/dados/detalhes/*.ts.
const ficheirosProjectos = ["src/dados/projectos.ts", ...readdirSync(join(raiz, "src/dados/detalhes")).filter((f) => f.endsWith(".ts")).map((f) => `src/dados/detalhes/${f}`)];
const projectos = ficheirosProjectos.map(ler).join("\n");
const blocos = projectos.split(/\n\s*(?:\{|export const \w+: Projecto = \{)\s*\n\s*slug:/).slice(1);
for (const bloco of blocos) {
  const slug = (bloco.match(/^\s*"([^"]+)"/) || [])[1];
  if (!/\burl:/.test(bloco) && !/\burlCodigo:/.test(bloco)) avisar("Projectos", `"${slug}" sem url nem urlCodigo.`);
  if (!/\bresultados:/.test(bloco)) avisar("Projectos", `"${slug}" sem resultados mensuráveis (utilizadores, precisão, tempo poupado...).`);
}

// 4. Currículo e testemunhos.
if (!existsSync(join(raiz, "public/ficheiros/cv-paulo-ximana.pdf"))) avisar("Currículo", "Falta public/ficheiros/cv-paulo-ximana.pdf (gerar a partir de /cv).");
else avisar("Currículo", "Rever o PDF do currículo e regenerá-lo depois de corrigir email e ligações (abrir /cv e Guardar como PDF).");
if (/export const testemunhos[^=]*=\s*\[\s*(\/\/[^\n]*\n\s*)*\]/.test(ler("src/dados/testemunhos.ts"))) avisar("Testemunhos", "Sem testemunhos reais: a secção está oculta até existir pelo menos um.");

const grupos = [...new Set(pendencias.map((p) => p.grupo))];
if (pendencias.length === 0) {
  console.log("Sem pendências de conteúdo.");
} else {
  console.log(`\n${pendencias.length} pendência(s) de conteúdo:\n`);
  for (const g of grupos) {
    console.log(g);
    for (const p of pendencias.filter((x) => x.grupo === g)) console.log(`  - ${p.texto}`);
  }
  console.log("");
}
