import type { Projecto } from "@/tipos";

/**
 * Rikoa SGH: Sistema de Gestão Hospitalar em Django.
 */
export const rikoaSgh: Projecto = {
  slug: "rikoa-sgh",
  nome: "Rikoa SGH",
  resumo:
    "Sistema de gestão hospitalar que junta recepção, clínica, diagnóstico, farmácia, facturação e recursos humanos numa só plataforma web.",
  descricao: [
    "O Rikoa SGH é um sistema de gestão hospitalar desenvolvido em Django para hospitais e clínicas em Angola. Acompanha o paciente da marcação ou da urgência até à alta e cobre a gestão do hospital: stock, compras, equipas, qualidade e finanças.",
    "A ideia central é que cada acto clínico gera automaticamente o seu registo administrativo. Um exame, um medicamento ou uma diária de internamento entram sozinhos na factura, o que evita trabalho duplicado e erros.",
  ],
  papel: "Desenvolvedor full-stack: arquitectura, dados, regras de negócio e interface",
  tecnologias: ["Django", "Python", "MySQL", "Bootstrap 5", "JavaScript", "ReportLab", "nginx"],
  estado: "em-desenvolvimento",
  imagem: "/imagens/projectos/rikoa-sgh-capa.jpg",
  destaque: true,
  // Ligações opcionais (só aparecem os botões que tiverem valor; apague o "//" para activar):
  // url: "https://endereco-do-projecto-online",
  // urlCodigo: "https://github.com/utilizador/repositorio",

  numeros: [
    { valor: "20", rotulo: "Módulos" },
    { valor: "~170", rotulo: "Modelos de dados" },
    { valor: "32", rotulo: "Perfis de acesso" },
    { valor: "1 100+", rotulo: "Testes automatizados" },
  ],

  objectivo:
    "Digitalizar a operação de um hospital de ponta a ponta, com segurança clínica, rastreabilidade e controlo financeiro.",
  solucao:
    "Uma aplicação web modular, em que o menu e o acesso se adaptam ao perfil de cada utilizador e os módulos comunicam entre si.",
  problema: [
    "O registo do paciente fica espalhado por papel, folhas de cálculo e sistemas isolados.",
    "Actos prestados e nunca facturados (ou o contrário) causam perdas financeiras.",
  ],

  fluxos: [
    {
      titulo: "Do acto clínico à factura",
      passos: [
        { rotulo: "Acto clínico", detalhe: "Consulta, exame, medicamento, cirurgia ou internamento" },
        { rotulo: "Facturação", detalhe: "O módulo de origem notifica-a automaticamente" },
        { rotulo: "Item na factura", detalhe: "Criado uma só vez por acto" },
        { rotulo: "Divisão do valor", detalhe: "Seguradora e paciente, conforme a apólice" },
      ],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Clínica",
      itens: [
        "Pacientes, agenda, urgência, internamento e cirurgia",
        "Laboratório, radiologia e banco de sangue",
        "Alertas de risco (NEWS2 e PEWS) a partir dos sinais vitais",
      ],
    },
    {
      titulo: "Farmácia e facturação",
      itens: [
        "Validação de alergias, interacções e dose máxima",
        "Dupla verificação em medicamentos controlados e transfusões",
        "Facturação automática, fecho de caixa e relatórios em CSV",
      ],
    },
    {
      titulo: "Gestão e segurança",
      itens: [
        "Recursos humanos e processamento salarial com INSS e IRT",
        "Acesso por perfil e registo de auditoria",
        "Bloqueio temporário após tentativas de login falhadas",
      ],
    },
  ],

  decisoesTecnicas: [
    "Uma app Django por domínio hospitalar, cada uma com testes próprios",
    "Uma falha de facturação nunca impede o registo clínico",
    "Concorrência tratada na base de dados, para dois utilizadores não ocuparem o mesmo leito",
  ],

  limitacoes: [
    "Ainda sem piloto num hospital real nem auditoria de segurança",
    "Testes executados sobretudo em SQLite; falta validar o MySQL de produção em todos os módulos",
  ],

  proximosPassos: [
    "Piloto num hospital ou clínica",
    "Portal do paciente para marcações, resultados e facturas",
    "API REST e aplicação móvel para a equipa clínica",
  ],
};
