// src/data/quizzes/registry.js

import { Quiz as algorithmiqueQuiz } from "@/data/quizzes/d2a/l1/semester1/algorithmique/chapters";
import { Quiz as architectureQuiz } from "@/data/quizzes/d2a/l1/semester1/architecture/chapters";
import { Quiz as systemexploitationQuiz } from "@/data/quizzes/d2a/l1/semester1/systemexploitation/chapters";
import { Quiz as linuxQuiz } from "@/data/quizzes/d2a/l2/semester1/linux/chapters";
import { Quiz as reseauxQuiz } from "@/data/quizzes/d2a/l2/semester1/reseaux/chapters";

export const quizRegistry = {
  algorithmique: algorithmiqueQuiz,
  architecture: architectureQuiz,
  systemexploitation: systemexploitationQuiz,
  linux: linuxQuiz,
  reseaux: reseauxQuiz,
};