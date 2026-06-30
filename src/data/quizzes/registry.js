// src/data/quizzes/registry.js

import { Quiz as algorithmiqueQuiz } from "@/data/quizzes/d2a/l1/semester1/algorithmique/chapters";
import { Quiz as architectureQuiz } from "@/data/quizzes/d2a/l1/semester1/architecture/chapters";
import { Quiz as systemexploitationQuiz } from "@/data/quizzes/d2a/l1/semester1/systemexploitation/chapters";
import { Quiz as linuxQuiz } from "@/data/quizzes/d2a/l2/semester1/linux/chapters";
import { Quiz as reseauxQuiz } from "@/data/quizzes/d2a/l2/semester1/reseaux/chapters";
import { Quiz as langageCQuiz } from "@/data/quizzes/d2a/l2/semester1/langageC/chapters";
import { Quiz as javascriptQuiz } from "@/data/quizzes/d2a/l2/semester1/javascript/chapters";
import { Quiz as meriseQuiz } from "@/data/quizzes/d2a/l2/semester1/merise/chapters";
import { Quiz as umlQuiz } from "@/data/quizzes/d2a/l3/semester1/uml/chapters";
import { Quiz as javaAvanceQuiz } from "@/data/quizzes/d2a/l3/semester1/javaAvance/chapters";
import { Quiz as xmlQuiz } from "@/data/quizzes/d2a/l3/semester1/xml/chapters";
import { Quiz as jspServletQuiz } from "@/data/quizzes/d2a/l3/semester1/jspServlet/chapters";
import { Quiz as iotQuiz } from "@/data/quizzes/srt/l2/semester1/iot/chapters"; 
import { Quiz as reseauxSansFilQuiz } from "@/data/quizzes/srt/l2/semester1/reseauxSansFil/chapters";
import { Quiz as routageQuiz } from "@/data/quizzes/srt/l3/semester1/routage/chapters";
import { Quiz as reseauxEtendusQuiz } from "@/data/quizzes/srt/l3/semester1/reseauxEtendus/chapters";
import { Quiz as securiteQuiz } from "@/data/quizzes/srt/l3/semester1/securite/chapters";
import { Quiz as webServicesQuiz } from "@/data/quizzes/srt/l3/semester1/webServices/chapters";
import { Quiz as htmlCssQuiz } from "@/data/quizzes/d2a/l1/semester2/htmlCss/chapters";
import { Quiz as algorithmique2Quiz } from "@/data/quizzes/d2a/l1/semester2/algorithmique2/chapters";
import { Quiz as reseaux2Quiz } from "@/data/quizzes/d2a/l1/semester2/reseaux1/chapters";
import { Quiz as comptabiliteQuiz } from "@/data/quizzes/d2a/l1/semester2/comptabilite/chapters";
import { Quiz as electriciteQuiz } from "@/data/quizzes/srt/l1/semester2/electricite/chapters";
import { Quiz as traitementSignalQuiz } from "@/data/quizzes/srt/l1/semester2/traitementSignal/chapters";
import { Quiz as adminWindowsQuiz } from "@/data/quizzes/d2a/l2/semester2/adminWindows/chapters";
import { Quiz as phpQuiz } from "@/data/quizzes/d2a/l2/semester2/php/chapters";
import { Quiz as javaPOOQuiz } from "@/data/quizzes/d2a/l2/semester2/javaPOO/chapters";
import { Quiz as adminLinuxQuiz } from "@/data/quizzes/d2a/l2/semester2/adminLinux/chapters";
import { Quiz as basesDonneesQuiz } from "@/data/quizzes/d2a/l2/semester2/basesDonnees/chapters";
import { Quiz as javaQuiz} from "@/data/quizzes/d2a/l3/semester2/java/chapters";


export const quizRegistry = {
  algorithmique: algorithmiqueQuiz,
  architecture: architectureQuiz,
  systemexploitation: systemexploitationQuiz,
  linux: linuxQuiz,
  reseaux: reseauxQuiz,
  langageC: langageCQuiz,
  javascript: javascriptQuiz,
  merise: meriseQuiz,
  uml: umlQuiz,
  javaAvance: javaAvanceQuiz,
  xml: xmlQuiz,
  jspServlet: jspServletQuiz,
  iot:iotQuiz,
  reseauxSansFil: reseauxSansFilQuiz,
  routage: routageQuiz,
  reseauxEtendus: reseauxEtendusQuiz,
  securite: securiteQuiz,
  webServices: webServicesQuiz,
  htmlCss: htmlCssQuiz,
  algorithmique2: algorithmique2Quiz,
  reseaux1: reseaux2Quiz,
  comptabilite: comptabiliteQuiz,
  electricite: electriciteQuiz,
  traitementSignal: traitementSignalQuiz,
  adminWindows: adminWindowsQuiz,
  php: phpQuiz,
  javaPOO: javaPOOQuiz,
  adminLinux: adminLinuxQuiz,
  basesDonnees: basesDonneesQuiz,
  java: javaQuiz

};