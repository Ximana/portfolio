import { Download, ArrowRight } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import Botao from "../comum/Botao";
import foto from "../../assets/perfil/foto-perfil.png";
import curriculo from "../../assets/documentos/Curriculo_Paulo_Ximana.pdf";

function SecaoHero() {
  const redesSociais = [
    { icone: Github, url: "https://github.com/Ximana", label: "GitHub" },
    {
      icone: Linkedin,
      url: "https://www.linkedin.com/in/paulo-ximana-3240a025b/",
      label: "LinkedIn",
    },
    { icone: Mail, url: "mailto:pauloximana@gmail.com", label: "Email" },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Imagem de Perfil */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 p-1">
            <img src={foto} className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Textos */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Olá, sou <span className="text-gradient">Paulo Ximana</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transformo ideias em experiências digitais incríveis através de
              código limpo e design intuitivo.
            </p>
          </div>

          {/* Botões */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Botao para="/projetos" variante="primary">
              Ver Projetos
              <ArrowRight className="inline-block ml-2" size={20} />
            </Botao>
            <Botao href={curriculo} variante="secondary">
              <Download className="inline-block mr-2" size={20} />
              Baixar CV
            </Botao>
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-4">
            {redesSociais.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icone size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecaoHero;
