import type { Projecto } from "@/tipos";
import { pulmovision } from "@/dados/detalhes/pulmovision";
import { hadoopSaudeAngola } from "@/dados/detalhes/hadoop-saude-angola";
import { okuyeva } from "@/dados/detalhes/okuyeva";
import { rikoaSgh } from "@/dados/detalhes/rikoa-sgh";
import { agendaQuanta } from "@/dados/detalhes/agenda-quanta";
import { quantaLearn } from "@/dados/detalhes/quanta-learn";
import { meteo } from "@/dados/detalhes/meteo";
import { rznApp } from "@/dados/detalhes/rzn-app";
import { musa } from "@/dados/detalhes/musa";

/**
 * Lista de projectos (a ordem define a ordem no site).
 * Os projectos mais detalhados vivem em ficheiros próprios, em src/dados/detalhes/.
 */
export const projectos: Projecto[] = [
  pulmovision,
  quantaLearn,
  agendaQuanta,
  rikoaSgh,
  rznApp,
  meteo,
  musa,
  okuyeva,
  hadoopSaudeAngola,
];
