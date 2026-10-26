import type { Projecto } from "@/tipos";

/**
 * Meteo: aplicação web de meteorologia, publicada em Firebase Hosting.
 */
export const meteo: Projecto = {
  slug: "meteo",
  nome: "Meteo",
  resumo:
    "Aplicação web de meteorologia com clima em tempo real, previsão de 5 dias, mapa interactivo e locais favoritos, em português e sem recolha de dados pessoais.",
  descricao: [
    "O Meteo mostra o tempo de forma rápida e simples. Ao abrir, pede a localização e apresenta logo o clima de onde o utilizador está. Depois é possível pesquisar qualquer cidade do mundo, ver a previsão, explorar camadas no mapa e guardar os locais preferidos.",
    "Os dados vêm da API OpenWeather e a interface está toda em português. Não tem contas nem rastreamento: os favoritos ficam guardados só no dispositivo.",
  ],
  papel: "Desenvolvedor front-end",
  tecnologias: ["React", "Vite", "Tailwind CSS", "Leaflet", "OpenWeather API", "Firebase Hosting"],
  estado: "concluido",
  imagem: "/imagens/projectos/meteo-capa.jpg",
  destaque: false,
  // Para o botão do GitHub, acrescente: urlCodigo: "https://github.com/utilizador/repositorio",
  url: "https://meteo-7504e.web.app",

  numeros: [
    { valor: "5", rotulo: "Dias de previsão" },
    { valor: "5", rotulo: "Camadas no mapa" },
    { valor: "~2 400", rotulo: "Linhas de código" },
  ],

  objectivo:
    "Dar acesso imediato ao tempo de qualquer sítio, numa interface limpa e em português, sem registos nem publicidade.",
  solucao:
    "Uma aplicação de página única que junta a localização do utilizador, a OpenWeather API e uma pesquisa global. O essencial aparece logo e o resto está a um toque.",
  problema: [
    "Muitas apps de tempo obrigam a criar conta, mostram publicidade ou pedem dados desnecessários.",
    "Poucas estão em português e muitas mostram informação a mais logo à entrada.",
  ],

  gruposFuncionalidades: [
    {
      titulo: "Clima",
      itens: [
        "Tempo actual: temperatura, humidade, vento, pressão, nascer e pôr do sol",
        "Previsão de 5 dias, com mínimas e máximas",
      ],
    },
    {
      titulo: "Mapa e pesquisa",
      itens: [
        "Mapa com camadas de nuvens, precipitação, temperatura, vento e pressão",
        "Pesquisa de cidades com sugestões automáticas",
      ],
    },
    {
      titulo: "Favoritos e privacidade",
      itens: [
        "Locais favoritos guardados só no dispositivo",
        "Sem contas, sem analítica e sem backend",
      ],
    },
  ],

  decisoesTecnicas: [
    "Lógica de dados separada da interface, o que facilita testar e evoluir",
    "Pesquisa com debounce, para não fazer um pedido à API por cada tecla",
  ],

  proximosPassos: [
    "Alertas meteorológicos e notificações",
    "Escolha de unidades e de idioma",
    "Previsão por hora, qualidade do ar e modo offline (PWA)",
  ],
};
