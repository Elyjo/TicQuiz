import { quizRegistry } from "@/data/quizzes/registry";



export function getQuiz({ dept, level, semester, subject, chapter }) {
  if (!dept || !level || !semester || !subject || !chapter) {
    console.log("Missing keys", { dept, level, semester, subject, chapter });
    return null;
  }

  return quizRegistry?.[dept]?.[level]?.[semester]?.[subject]?.[chapter] || null;
}