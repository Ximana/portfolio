import type { Testemunho } from "@/tipos";

/**
 * Testemunhos de clientes, colegas ou professores.
 * Enquanto a lista estiver vazia, a secção NÃO aparece no site.
 * Acrescentar apenas testemunhos reais e com autorização de quem os deu:
 *
 * {
 *   texto: "O Paulo entregou ...",
 *   autor: "Nome Apelido",
 *   funcao: "Cargo",
 *   organizacao: "Empresa ou instituição",
 * }
 */
export const testemunhos: Testemunho[] = [];
