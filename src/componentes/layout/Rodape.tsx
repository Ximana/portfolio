import Link from "next/link";
import { IconeEmail, IconeRede } from "@/componentes/icones/Icones";
import { perfil } from "@/dados/perfil";

const ligacoes = [
  { href: "/", rotulo: "Início" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/projectos", rotulo: "Projectos" },
  { href: "/contacto", rotulo: "Contacto" },
];

export function Rodape() {
  const anoActual = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-linha">
      <div className="contentor py-14">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight">{perfil.nome}</p>
            <p className="mt-3 text-sm leading-6 text-esbatido">{perfil.cargo}.</p>
            <p className="mt-1 text-sm text-esbatido">{perfil.localidade}</p>
          </div>

          <nav aria-label="Rodapé">
            <p className="etiqueta-mono text-esbatido">Navegação</p>
            <ul className="mt-4 space-y-3 text-sm">
              {ligacoes.map((ligacao) => (
                <li key={ligacao.href}>
                  <Link
                    href={ligacao.href}
                    className="text-esbatido transition-colors duration-200 hover:text-marfim"
                  >
                    {ligacao.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="etiqueta-mono text-esbatido">Contactos</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${perfil.email}`}
                  className="inline-flex items-center gap-2.5 text-esbatido transition-colors duration-200 hover:text-marfim"
                >
                  <IconeEmail tamanho={16} />
                  {perfil.email}
                </a>
              </li>
              {perfil.redesSociais.map((rede) => (
                <li key={rede.nome}>
                  <a
                    href={rede.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-esbatido transition-colors duration-200 hover:text-marfim"
                  >
                    <IconeRede nome={rede.nome} tamanho={16} />
                    {rede.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-linha pt-6 text-xs text-esbatido sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {anoActual} {perfil.nome}. Todos os direitos reservados.
          </p>
          <p className="font-mono">Feito em Luanda, Angola</p>
        </div>
      </div>
    </footer>
  );
}
