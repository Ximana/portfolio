import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import assinatura from "../../assets/imagens/signature.svg";

function Rodape() {
  const anoAtual = new Date().getFullYear();

  const linksSociais = [
    { icone: Github, url: "https://github.com/Ximana", label: "GitHub" },
    {
      icone: Linkedin,
      url: "https://www.linkedin.com/in/paulo-ximana-3240a025b/",
      label: "LinkedIn",
    },
    { icone: Mail, url: "mailto:pauloximana@gmail.com", label: "Email" },
  ];

  const linksRapidos = [
    { para: "/", texto: "Início" },
    { para: "/sobre", texto: "Sobre" },
    { para: "/projetos", texto: "Projetos" },
    { para: "/contato", texto: "Contato" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div>
            <img
              src="/logo-icone.svg"
              alt="Paulo Ximana"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-4">Paulo Ximana</h3>
            <p className="text-gray-400 mb-4">
              Desenvolvedor Full Stack criando experiências digitais incríveis.
            </p>
            <div className="flex gap-4">
              {linksSociais.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icone size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {linksRapidos.map((link) => (
                <li key={link.para}>
                  <Link
                    to={link.para}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Receba atualizações sobre novos projetos e artigos.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-600 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Assinatura e Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img
              src={assinatura}
              alt="Assinatura Paulo Ximana"
              className="h-12 opacity-70"
            />
            <p className="text-gray-400 text-center md:text-right">
              © {anoAtual} Paulo Ximana. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
