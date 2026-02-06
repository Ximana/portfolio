import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Card from "../componentes/comum/Card";
import Botao from "../componentes/comum/Botao";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      assunto: formData.assunto,
      servico: formData.servico,
      mensagem: formData.mensagem,
    };

    try {
      const response = await fetch("https://formspree.io/f/xojnarjw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!");
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          servico: "",
          mensagem: "",
        });
      } else {
        toast.error("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro de conexão. Verifique sua internet.");
    }
  };

  const informacoesContato = [
    {
      icone: Mail,
      titulo: "Email",
      conteudo: "pauloximana@gmail.com",
      link: "mailto:pauloximana@gmail.com",
    },
    {
      icone: Phone,
      titulo: "Telefone",
      conteudo: "+244 937 123 602",
      link: "tel:+244937123602",
    },
    {
      icone: MapPin,
      titulo: "Localização",
      conteudo: "Luanda, Luanda - Angola",
      link: null,
    },
  ];

  const redesSociais = [
    { icone: Github, url: "https://github.com/Ximana", label: "GitHub" },
    {
      icone: Linkedin,
      url: "https://www.linkedin.com/in/paulo-ximana-3240a025b/",
      label: "LinkedIn",
    },
    { icone: Twitter, url: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tem algum projeto em mente? Vamos conversar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda - Informações */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                {informacoesContato.map((info, index) => (
                  <Card key={index} hover={false}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <info.icone
                          className="text-primary-600 dark:text-primary-400"
                          size={24}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.titulo}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {info.conteudo}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">
                            {info.conteudo}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                {redesSociais.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icone size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Tempo de Resposta</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Normalmente respondo em até 24 horas durante dias úteis.
              </p>
            </div>
          </div>

          {/* Coluna Direita - Formulário */}
          <div>
            <Card>
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="(+244) 912 345 678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="servico"
                    className="block text-sm font-medium mb-2"
                  >
                    Tipo de Serviço *
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    required
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="web">Desenvolvimento Web</option>
                    <option value="mobile">Desenvolvimento Mobile</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium mb-2"
                  >
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows="5"
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                  />
                </div>

                <Botao
                  tipo="submit"
                  variante="primary"
                  className="w-full justify-center"
                >
                  <Send className="inline-block mr-2" size={20} />
                  Enviar Mensagem
                </Botao>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Contato;