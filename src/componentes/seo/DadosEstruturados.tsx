/**
 * Insere dados estruturados (JSON-LD) na página, para os motores de pesquisa
 * perceberem quem és, o que fazes e como as páginas se relacionam.
 * O "<" é escapado para o conteúdo nunca poder fechar a etiqueta <script>.
 */
export function DadosEstruturados({ dados }: { dados: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }}
    />
  );
}
