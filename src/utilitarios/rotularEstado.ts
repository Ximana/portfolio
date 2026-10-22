import type { EstadoProjecto } from "@/tipos";

interface InfoEstado {
  rotulo: string;
  corPonto: string;
}

const infoPorEstado: Record<EstadoProjecto, InfoEstado> = {
  "em-desenvolvimento": { rotulo: "Em desenvolvimento", corPonto: "bg-jade" },
  concluido: { rotulo: "Concluído", corPonto: "bg-esbatido" },
  pausado: { rotulo: "Pausado", corPonto: "bg-ouro" },
};

export function obterInfoEstado(estado: EstadoProjecto): InfoEstado {
  return infoPorEstado[estado];
}
