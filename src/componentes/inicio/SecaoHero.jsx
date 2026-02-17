
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Botao from "../comum/Botao";
import foto from "../../assets/perfil/foto-perfil.png";
import curriculo from "../../assets/documentos/Curriculo_Paulo_Ximana.pdf";

function SecaoHero() {
  const redesSociais = [
    { icone: Github, url: "https://github.com/Ximana", label: "GitHub" },
    { icone: Linkedin, url: "https://www.linkedin.com/in/paulo-ximana-3240a025b/", label: "LinkedIn" },
    { icone: Mail, url: "mailto:pauloximana@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative overflow-hidden section-padding bg-gray-50 dark:bg-gray-900">
      
      {/* Camada de Background Light */}
      <div className="absolute inset-0 z-0 bg-hero-light dark:hidden opacity-40"></div>
      
      {/* Camada de Background Dark */}
      <div className="absolute inset-0 z-0 hidden dark:block bg-hero-dark opacity-20"></div>

      {/* Conteúdo - O z-10 é vital para os botões funcionarem */}
      <div className="container-custom hero-content-z">
        <div className="flex flex-col items-center text-center gap-8">
          
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 p-1 shadow-2xl">
            <img src={foto} alt="Perfil" className="w-full h-full rounded-full bg-white dark:bg-gray-800 object-cover" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Olá, sou <span className="text-gradient">Paulo Ximana</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transformo ideias em experiências digitais através de código e design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Botao para="/projetos" variante="primary">
              Ver Projetos <ArrowRight className="inline-block ml-2" size={20} />
            </Botao>
            <Botao href={curriculo} variante="secondary">
              <Download className="inline-block mr-2" size={20} /> Baixar CV
            </Botao>
          </div>

          <div className="flex gap-4">
            {redesSociais.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-sm hover:bg-primary-600 hover:text-white transition-all"
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