import type { Projecto } from "@/tipos";

/**
 * RZN App: aplicação móvel de desporto e comunidade.
 */
export const rznApp: Projecto = {
  slug: "rzn-app",
  nome: "RZN App",
  resumo:
    "Aplicação móvel que transforma corridas, pedaladas e caminhadas em pontos, níveis, desafios e recompensas de parceiros locais.",
  descricao: [
    "A RZN App é para quem corre, pedala ou caminha. O utilizador regista as actividades com GPS, ganha pontos, sobe de nível, participa em desafios, junta-se a grupos de treino e troca pontos por recompensas de marcas parceiras.",
    "Foi pensada para Angola: a linguagem, os níveis (de Monami a Casca grossa), os grupos de treino (as Matangas) e os pagamentos (Multicaixa Express, referência e transferência) reflectem o dia-a-dia local.",
  ],
  papel: "Desenvolvedor mobile e de interface (React Native)",
  tecnologias: ["React Native", "JavaScript", "React Navigation", "MapLibre", "Axios", "Jest"],
  estado: "em-desenvolvimento",
  imagem: "/imagens/projectos/rzn-app-capa.jpg",
  destaque: true,
  // Ligações opcionais (só aparecem os botões que tiverem valor; apague o "//" para activar):
  // url: "https://endereco-do-projecto-online",
  // urlCodigo: "https://github.com/utilizador/repositorio",

  numeros: [
    { valor: "~17 600", rotulo: "Linhas de JavaScript" },
    { valor: "~45", rotulo: "Ecrãs" },
    { valor: "~50", rotulo: "Componentes reutilizáveis" },
    { valor: "6", rotulo: "Níveis de progressão" },
  ],

  objectivo:
    "Incentivar o exercício regular com gamificação e comunidade, ligando quem treina às marcas que o apoiam.",
  solucao:
    "Uma app com cinco separadores que cobre o ciclo do treino à recompensa: comunidade, explorar, actividade com mapa e GPS, pontos e recompensas, e perfil.",
  problema: [
    "Manter a motivação para treinar sozinho é difícil, e as apps conhecidas não usam a língua nem os pagamentos locais.",
    "Em apps com pontos e rankings, a fraude (GPS falso, trajectos inventados) retira valor à competição.",
  ],

  graficos: [
    {
      tipo: "barras",
      titulo: "Limite de velocidade do anti-fraude",
      unidade: "km/h",
      dados: [
        { rotulo: "Ciclismo", valor: 80 },
        { rotulo: "Corrida", valor: 30 },
        { rotulo: "Caminhada", valor: 15 },
      ],
      nota: "Margens largas de propósito: rejeitar um troço real por engano é pior do que deixar passar um caso marginal.",
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
  ],

  gruposFuncionalidades: [
    {
      titulo: "Treino",
      itens: ["Registo com GPS e mapa em tempo real, também em segundo plano", "Parciais por quilómetro e resumo exportável como imagem"],
    },
    {
      titulo: "Pontos e comunidade",
      itens: ["Pontos por distância, tempo e consistência, com desafios e ranking", "Amigos, grupos de treino e loja de recompensas"],
    },
    {
      titulo: "Conta",
      itens: ["Planos mensal, trimestral e anual", "Pagamento por Multicaixa Express, referência ou transferência"],
    },
  ],

  decisoesTecnicas: [
    "React Native sem Expo, para controlo total do GPS, do serviço em segundo plano e dos mapas",
    "MapLibre com OpenFreeMap: mapas reais sem chave de API nem custos",
    "Anti-fraude no telemóvel para feedback imediato; a validação definitiva fica prevista para o backend",
  ],

  proximosPassos: [
    "Ligar todos os ecrãs à API real e repetir o anti-fraude no backend",
    "Login com Google e Apple e notificações push",
    "Publicação na Google Play e na App Store",
  ],
};
