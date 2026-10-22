import type { Metadata } from "next";
import { perfil } from "@/dados/perfil";
import { criarMetadata } from "@/utilitarios/seo";
import { Heroi } from "@/componentes/seccoes/Heroi";
import { SobreMim } from "@/componentes/seccoes/SobreMim";
import { Projectos } from "@/componentes/seccoes/Projectos";
import { Competencias } from "@/componentes/seccoes/Competencias";
import { Testemunhos } from "@/componentes/seccoes/Testemunhos";
import { Contacto } from "@/componentes/seccoes/Contacto";
import { RevelarAoRolar } from "@/componentes/ui/RevelarAoRolar";

export const metadata: Metadata = criarMetadata({
  titulo: `${perfil.nome} | Desenvolvedor Full-Stack em Luanda, Angola`,
  tituloAbsoluto: true,
  descricao: perfil.descricaoSeo,
  caminho: "/",
});

export default function PaginaInicial() {
  return (
    <>
      <Heroi />
      <RevelarAoRolar>
        <SobreMim />
      </RevelarAoRolar>
      <Projectos />
      <Competencias />
      <Testemunhos />
      <RevelarAoRolar>
        <Contacto />
      </RevelarAoRolar>
    </>
  );
}
