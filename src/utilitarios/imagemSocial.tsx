import { ImageResponse } from "next/og";
import { perfil } from "@/dados/perfil";

export const tamanhoImagemSocial = { width: 1200, height: 630 };

interface OpcoesImagem {
  etiqueta: string;
  titulo: string;
  subtitulo: string;
  etiquetas?: string[];
}

/**
 * Imagem de pré-visualização (Open Graph / Twitter) gerada em runtime com a
 * identidade visual do site, para as partilhas em redes sociais ficarem bonitas.
 */
export function criarImagemSocial({ etiqueta, titulo, subtitulo, etiquetas = [] }: OpcoesImagem) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0A0D0E",
          color: "#ECEFEC",
          backgroundImage:
            "radial-gradient(circle at 90% 0%, rgba(72,196,154,0.22) 0px, rgba(10,13,14,0) 700px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#48C49A" }} />
          <div style={{ fontSize: 28, color: "#48C49A", letterSpacing: 4 }}>
            {etiqueta.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {titulo}
          </div>
          <div style={{ marginTop: 24, fontSize: 34, color: "#8F9996", lineHeight: 1.35, maxWidth: 980 }}>
            {subtitulo}
          </div>
          {etiquetas.length > 0 && (
            <div style={{ display: "flex", marginTop: 32, gap: 12 }}>
              {etiquetas.slice(0, 4).map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "8px 18px",
                    fontSize: 24,
                    color: "#8F9996",
                    border: "2px solid #242C2D",
                    borderRadius: 10,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#8F9996" }}>
          <div style={{ display: "flex" }}>{perfil.nome}</div>
          <div style={{ display: "flex" }}>{perfil.localidade}</div>
        </div>
      </div>
    ),
    { ...tamanhoImagemSocial }
  );
}
