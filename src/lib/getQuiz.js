import { quizRegistry } from "@/data/quizzes/registry";

export function getQuiz({ dept, level, semester, subject, chapter }) {
  return quizRegistry?.[dept]?.[level]?.[semester]?.[subject]?.[chapter] || null;
}