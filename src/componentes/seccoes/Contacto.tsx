import { perfil } from "@/dados/perfil";
import { IconeEmail } from "@/componentes/icones/Icones";
import { LigacaoBotao } from "@/componentes/ui/Botao";

export function Contacto() {
  return (
    <section className="contentor py-16 md:py-24" id="contacto">
      <div className="painel relative overflow-hidden px-6 py-14 text-center md:px-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_280px_at_50%_0%,rgb(var(--cor-jade)/0.16),transparent_70%)]"
        />
        <div className="relative">
          <p className="etiqueta-mono">04 / Contacto</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold md:text-5xl">
            Vamos construir algo juntos?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-esbatido">
            {perfil.disponibilidade}.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <LigacaoBotao href={`mailto:${perfil.email}`} variante="primario">
              Enviar email
            </LigacaoBotao>
            <LigacaoBotao href="/contacto" variante="secundario">
              Abrir formulário
            </LigacaoBotao>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-esbatido">
            <IconeEmail tamanho={16} />
            {perfil.email}
          </p>
        </div>
      </div>
    </section>
  );
}
