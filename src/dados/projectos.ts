import type { Projecto } from "@/tipos";
import { pulmovision } from "@/dados/detalhes/pulmovision";
import { hadoopSaudeAngola } from "@/dados/detalhes/hadoop-saude-angola";
import { okuyeva } from "@/dados/detalhes/okuyeva";
import { medinova } from "@/dados/detalhes/medinova";
import { quantaLearn } from "@/dados/detalhes/quanta-learn";
import { rznApp } from "@/dados/detalhes/rzn-app";
import { musa } from "@/dados/detalhes/musa";

/**
 * Lista de projectos (a ordem define a ordem no site).
 * Os projectos mais detalhados vivem em ficheiros próprios, em src/dados/detalhes/.
 */
export const projectos: Projecto[] = [
  pulmovision,
  quantaLearn,
  medinova,
  rznApp,
  musa,
  okuyeva,
  hadoopSaudeAngola,
];
