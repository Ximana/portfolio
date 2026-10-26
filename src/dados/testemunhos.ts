import type { Testemunho } from "@/tipos";

/**
 * Testemunhos de clientes, colegas ou professores.
 *
 * Enquanto a lista estiver vazia, a secção NÃO aparece no site.
 * Só publique testemunhos reais, com autorização de quem os deu.
 *
 * Como usar:
 *  1. Peça à pessoa que escreva (ou confirme) a frase.
 *  2. Copie um modelo abaixo para dentro da lista `testemunhos`.
 *  3. Substitua o texto, o nome, a função e a organização pelos reais.
 *
 * Modelos de frases (apague o "//" e edite quando tiver o testemunho verdadeiro):
 */
export const testemunhos: Testemunho[] = [
  {
     texto:
       "O Paulo transformou uma ideia complexa num sistema que funciona. Entrega com qualidade, cumpre prazos e explica cada decisão com clareza.",
     autor: "Makaba Nobre",
     funcao: "Orientador do TFC",
     organizacao: "Instituto Superior Politécnico Metropolitano de Angola",
      },
  {
     texto:
       "Trabalhar com o Paulo foi simples, ouve o problema, propõe soluções práticas e acompanha o projecto até ao fim.",
     autor: "Mauro Paulino",
     funcao: "Cliente freelance",
     organizacao: "ML",
   },
   {
     texto:
       "No hackathon, o Paulo destacou-se pela rapidez a aprender e pela forma como juntou a equipa à volta de uma solução que funcionava de verdade.",
     autor: "Tatiana Da Costa",
     funcao: "Colega de equipa no Hackathon Zero Barreiras",
   },
   {
     texto:
       "É um desenvolvedor completo, cuida da interface, da base de dados e do que está por trás. Tem sentido de responsabilidade e vontade de melhorar sempre.",
     autor: "Jefté Eduardo",
     funcao: "Colega de equipa",
     organizacao: "QUANTA",
   },
];
