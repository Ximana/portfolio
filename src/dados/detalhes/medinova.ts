import type { Projecto } from "@/tipos";

/**
 * MediNova: sistema integrado de gestão hospitalar (HIS) em Django.
 */
export const medinova: Projecto = {
  slug: "medinova",
  nome: "MediNova",
  resumo:
    "Sistema integrado de gestão hospitalar que liga a recepção, a clínica, os meios de diagnóstico, a farmácia, a facturação e os recursos humanos numa única plataforma web.",
  descricao: [
    "O MediNova é um sistema de gestão hospitalar (HIS) desenvolvido em Django para hospitais e clínicas em Angola. Cobre o percurso completo do paciente, da marcação e da urgência até à alta, e a gestão do hospital por trás disso: stock, compras, equipas, qualidade e finanças.",
    "A ideia central é que cada acto clínico gera automaticamente o seu reflexo administrativo: um exame pedido, um medicamento dispensado ou uma diária de internamento entram sozinhos na factura do paciente, o que reduz trabalho duplicado e erros de registo.",
  ],
  papel: "Desenvolvedor full-stack: arquitectura, modelação de dados, regras de negócio e interface de todos os módulos",
  tecnologias: ["Django", "Python", "MySQL", "Bootstrap 5", "JavaScript", "ReportLab", "nginx", "systemd"],
  estado: "em-desenvolvimento",
  destaque: true,

  numeros: [
    { valor: "20", rotulo: "Módulos" },
    { valor: "~170", rotulo: "Modelos de dados" },
    { valor: "77 mil+", rotulo: "Linhas de código Python" },
    { valor: "1 100+", rotulo: "Testes automatizados" },
  ],

  objectivo:
    "Digitalizar a operação de um hospital de ponta a ponta, com segurança clínica, rastreabilidade e controlo financeiro, e com as regras locais (IRT, INSS e Lei Geral do Trabalho no processamento salarial).",
  solucao:
    "Uma aplicação web modular, com menu e redireccionamento pós-login adaptados ao perfil de cada utilizador (32 perfis de acesso), e módulos que comunicam entre si por serviços e sinais.",
  problema: [
    "O registo do paciente fica espalhado por papel, folhas de cálculo e sistemas isolados, o que gera erros e filas.",
    "Actos prestados e nunca facturados (ou o contrário) causam perdas financeiras e conflitos.",
    "Medicamentos controlados, sangue e resultados críticos exigem rastreabilidade e dupla verificação.",
  ],

  tabelas: [
    {
      titulo: "Módulos por área",
      colunas: ["Área", "Módulos"],
      linhas: [
        ["Porta de entrada", "Pacientes, Agendamentos, Urgência"],
        ["Clínica", "Ambulatório, Internamento, Cirurgia, Procedimentos"],
        ["Diagnóstico", "Laboratório, Radiologia, Banco de Sangue"],
        ["Medicamentos e material", "Farmácia, Suprimentos"],
        ["Gestão", "Financeiro, Recursos Humanos, Infraestrutura, Qualidade"],
        ["Base", "Core, Utilizadores, Endereço"],
      ],
    },
  ],

  fluxos: [
    {
      titulo: "Do acto clínico à factura",
      passos: [
        { rotulo: "Acto clínico", detalhe: "Consulta, exame, medicamento, cirurgia, diária ou transfusão" },
        { rotulo: "Sinais e serviços", detalhe: "O módulo de origem notifica a facturação" },
        { rotulo: "Item na factura", detalhe: "Criado uma só vez por acto (idempotente)" },
        { rotulo: "Divisão do valor", detalhe: "Seguradora e paciente, conforme a apólice" },
      ],
    },
    {
      titulo: "Arquitectura",
      passos: [
        { rotulo: "Navegador", detalhe: "Bootstrap 5 e templates Django" },
        { rotulo: "nginx / Apache", detalhe: "Servidor web (WSGI)" },
        { rotulo: "Django", detalhe: "20 apps de domínio, serviços e sinais" },
        { rotulo: "MySQL", detalhe: "97 migrações; tarefas agendadas com cron ou systemd" },
      ],
    },
  ],

  gruposFuncionalidades: [
    {
      titulo: "Segurança clínica",
      itens: [
        "Escalas de alerta precoce (NEWS2 e PEWS) calculadas a partir dos sinais vitais",
        "Validação farmacêutica: alergias, interacções, duplicações e dose máxima",
        "Dupla checagem em medicamentos e transfusões, e livro de controlados",
      ],
    },
    {
      titulo: "Facturação automática",
      itens: [
        "Todos os actos clínicos geram itens na factura, uma só vez",
        "Política de pagamento prévio configurável, que nunca bloqueia urgência nem internamento",
        "Fecho de caixa e relatório financeiro com exportação em CSV",
      ],
    },
    {
      titulo: "Operação e gestão",
      itens: [
        "Agenda unificada entre marcação e registo clínico",
        "Alertas de RH: cédulas, contratos e cobertura de turnos",
        "Processamento salarial com INSS e IRT",
      ],
    },
    {
      titulo: "Segurança da informação",
      itens: [
        "Controlo de acesso por perfil e registo de auditoria com IP",
        "Bloqueio de 15 minutos após 5 tentativas de login falhadas",
        "Configuração de produção com cookies seguros, HTTPS e HSTS",
      ],
    },
  ],

  decisoesTecnicas: [
    "Uma app Django independente por domínio hospitalar, com modelos, vistas, testes e templates próprios",
    "Serviços e sinais: uma falha de facturação nunca impede o registo clínico e fica no log",
    "Concorrência tratada na base de dados (select_for_update), para que dois utilizadores não ocupem o mesmo leito",
    "Registo central de módulos como fonte única para o menu e o redireccionamento por perfil",
    "Mais de 1 100 testes, incluindo testes de integração entre módulos",
  ],

  desafios: [
    "Ligar módulos sem os acoplar, com facturação idempotente e tolerante a falhas",
    "Evitar leitos ou bolsas de sangue atribuídos duas vezes em simultâneo",
    "Manter coerência de modelos, formulários e permissões em 20 módulos",
  ],
  limitacoes: [
    "Testes executados sobretudo em SQLite; o MySQL de produção ainda não foi testado em todos os módulos",
    "Exige auditoria de segurança e validação com utilizadores reais antes de uma implantação",
  ],

  proximosPassos: [
    "Piloto num hospital ou clínica, com formação e feedback",
    "Portal do paciente para marcações, resultados e facturas",
    "Integração com equipamentos de diagnóstico (LIS/PACS) e gateways de pagamento",
    "API REST e aplicação móvel para a equipa clínica",
  ],
};
