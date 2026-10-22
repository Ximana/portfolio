export function Etiqueta({ texto }: { texto: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-linha bg-fundo/60 px-2 py-1 font-mono text-xs text-esbatido">
      {texto}
    </span>
  );
}
