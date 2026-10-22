/**
 * Combina classes CSS condicionalmente, ignorando valores falsos.
 * Uso: juntarClasses("base", condicao && "classe-extra", outraCondicao && "outra-classe")
 */
export function juntarClasses(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
