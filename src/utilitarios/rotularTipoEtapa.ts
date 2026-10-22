import type { TipoEtapa } from "@/tipos";

interface InfoTipoEtapa {
  rotulo: string;
  corPonto: string;
}

const infoPorTipo: Record<TipoEtapa, InfoTipoEtapa> = {
  academico: { rotulo: "Académico", corPonto: "bg-ouro" },
  profissional: { rotulo: "Profissional", corPonto: "bg-jade" },
};

export function obterInfoTipoEtapa(tipo: TipoEtapa): InfoTipoEtapa {
  return infoPorTipo[tipo];
}
