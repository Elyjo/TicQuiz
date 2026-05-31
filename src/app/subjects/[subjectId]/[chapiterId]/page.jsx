"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getQuiz } from "@/lib/getQuiz";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();

  const [quiz, setQuiz] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("userPath");
    if (!saved) return;

    const path = JSON.parse(saved);

    const data = getQuiz({
      dept: path.dept,
      level: path.level,
      semester: path.semester,
      subject: params.subjectId,
      chapter: params.chapterId,
    });

    if (!data) {
      console.log("QUIZ NOT FOUND", {
        subject: params.subjectId,
        chapter: params.chapterId,
      });
      return;
    }

    setQuiz(data);
  }, [params.subjectId, params.chapterId]);

  if (!quiz) return null;

  const current = quiz.questions[index];

  const handleAnswer = (i) => {
    if (i === current.answer) {
      setScore((s) => s + 1);
    }

    if (index + 1 < quiz.questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#020617]">
        <h1 className="text-2xl font-bold">Quiz terminé 🎉</h1>
        <p className="mt-3 text-slate-300">
          Score : {score} / {quiz.questions.length}
        </p>

        <button
          onClick={() => router.push("/subjects")}
          className="mt-6 px-5 py-3 rounded-xl bg-white/10 border border-white/20"
        >
          Retour aux matières
        </button>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#020617] flex flex-col items-center justify-center px-5 text-white"
    >
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-6">{current.question}</h2>

        <div className="flex flex-col gap-3">
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="p-4 rounded-xl bg-white/10 border border-white/10 text-left hover:bg-white/20 transition"
            >
              {opt}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Question {index + 1} / {quiz.questions.length}
        </p>
      </motion.div>
    </motion.main>
  );
}
