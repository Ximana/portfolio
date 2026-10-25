import type { Projecto } from "@/tipos";

/**
 * RZN App: aplicação móvel de desporto e comunidade.
 * Fonte do conteúdo: documentação do projecto (README). Editar aqui actualiza
 * a lista, a página de detalhe, o sitemap e as imagens de partilha.
 */
export const rznApp: Projecto = {
  slug: "rzn-app",
  nome: "RZN App",
  resumo:
    "Aplicação móvel de desporto e comunidade que transforma corridas, pedaladas e caminhadas em pontos, níveis, desafios e recompensas de parceiros locais.",
  descricao: [
    "A RZN App é uma aplicação móvel para quem pratica corrida, ciclismo e caminhada. O utilizador regista as actividades com GPS, ganha pontos pelo esforço e pela consistência, sobe de nível, participa em desafios, junta-se a grupos de treino e troca os pontos por recompensas de marcas parceiras.",
    "Foi pensada para o contexto angolano: a linguagem, os níveis (de Monami a Casca grossa), os grupos de treino (as Matangas) e os pagamentos (Multicaixa Express, referência e transferência) reflectem a forma como as pessoas falam e pagam no dia-a-dia.",
  ],
  papel: "Desenvolvedor mobile e de interface (React Native)",
  tecnologias: [
    "React Native",
    "JavaScript",
    "React Navigation",
    "MapLibre",
    "OpenFreeMap",
    "Axios",
    "Notifee",
    "Jest",
  ],
  estado: "em-desenvolvimento",
  imagem: "/imagens/projectos/rzn-app-capa.jpg",
  destaque: true,

  numeros: [
    { valor: "~17 600", rotulo: "Linhas de JavaScript" },
    { valor: "~45", rotulo: "Ecrãs por domínio" },
    { valor: "~50", rotulo: "Componentes reutilizáveis" },
    { valor: "6", rotulo: "Níveis de progressão" },
  ],

  objectivo:
    "Incentivar a prática regular de exercício através de gamificação e comunidade, ligando quem treina às marcas que querem apoiá-lo.",
  solucao:
    "Uma app com cinco separadores que cobre o ciclo do treino à recompensa: Mbanje (comunidade), Explorar, Pra cima deles (actividade com mapa e GPS), Fezada (pontos e recompensas) e Perfil.",
  problema: [
    "Manter a motivação para treinar sozinho é difícil, e as apps conhecidas não usam a língua nem os pagamentos locais.",
    "Em apps com pontos e rankings, a fraude (GPS falso, trajectos inventados) retira o valor à competição.",
  ],

  graficos: [
    {
      tipo: "barras",
      titulo: "Limite de velocidade do anti-fraude",
      unidade: "km/h",
      dados: [
        { rotulo: "Ciclismo (Pedalada)", valor: 80 },
        { rotulo: "Corrida (Kibidi)", valor: 30 },
        { rotulo: "Caminhada (Matutinar)", valor: 15 },
      ],
      nota: "As margens são deliberadamente largas: rejeitar por engano um troço real é pior do que deixar passar um caso marginal.",
    },
  ],

  fluxos: [
    {
      titulo: "Níveis de progressão",
      passos: [
        { rotulo: "Monami" },
        { rotulo: "Kota" },
        { rotulo: "Mau" },
        { rotulo: "Duro" },
        { rotulo: "Extremamente duro" },
        { rotulo: "Casca grossa" },
      ],
    },
    {
      titulo: "Do GPS aos pontos",
      passos: [
        { rotulo: "Pontos de GPS", detalhe: "Registados durante a actividade" },
        { rotulo: "Filtro em tempo real", detalhe: "Descarta precisão fraca, saltos e localização simulada" },
        { rotulo: "Verificação final", detalhe: "Oito motivos de sinalização" },
        { rotulo: "Pontos", detalhe: "Actividades sinalizadas não recebem pontos pela distância" },
      ],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Treino",
      itens: [
        "Registo com GPS, mapa em tempo real e mapas offline",
        "Funciona em segundo plano, com pausa automática sem sinal de GPS",
        "Parciais por quilómetro e resumo exportável como imagem",
      ],
    },
    {
      titulo: "Gamificação",
      itens: [
        "Pontos por distância, tempo activo, consistência e desafios",
        "Bónus de 50 % em actividades patrocinadas",
        "Desafios, conquistas e ranking",
      ],
    },
    {
      titulo: "Comunidade e Fezada",
      itens: [
        "Amigos, Matangas (clubes), eventos e pesquisa global",
        "Carteira de pontos e loja de recompensas de parceiros",
      ],
    },
    {
      titulo: "Subscrição e conta",
      itens: [
        "Planos mensal, trimestral e anual",
        "Multicaixa Express, referência e transferência, com idempotência",
        "Tema claro e escuro e modo demonstração sem backend",
      ],
    },
  ],

  decisoesTecnicas: [
    "React Native CLI sem Expo, para controlo total dos módulos nativos (GPS, serviço em primeiro plano, mapas)",
    "MapLibre com OpenFreeMap: mapas reais sem chave de API nem custos",
    "Camada de serviços desacoplada, com um módulo Axios por área da API e dados demo com a mesma interface",
    "Regras de pontuação em funções puras, preparadas para serem geridas pela API",
    "Anti-fraude no telemóvel para feedback imediato; a validação definitiva fica prevista para o backend",
  ],

  desafios: [
    "Gravar GPS de forma fiável em segundo plano, sobrevivendo ao bloqueio do ecrã e à troca de separador",
    "Equilibrar anti-fraude e experiência, sem penalizar quem treina de forma legítima",
    "Pagamentos sem cartão, com fluxos assíncronos, expiração e nova tentativa",
  ],

  proximosPassos: [
    "Ligar todos os ecrãs à API real",
    "Repetir a verificação anti-fraude no backend",
    "Login com Google e Apple e notificações push",
    "Publicação na Google Play e na App Store",
  ],
};
