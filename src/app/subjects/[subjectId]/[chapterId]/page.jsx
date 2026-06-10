"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";
import { quizRegistry } from "@/data/quizzes/registry";

export default function QuizPage() {
  const params = useParams();

  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selected, setSelected] = useState(null);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // console.log("params =", params);

    const subjectQuiz = quizRegistry?.[params.subjectId];

    // console.log("subjectQuiz =", subjectQuiz);

    const chapter = subjectQuiz?.[params.chapterId];

    // console.log("chapter =", chapter);

    if (chapter?.questions) {
      setQuestions(chapter.questions);
    }
  }, [params.subjectId, params.chapterId]);
  if (!questions.length) {
    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center">
        <p className="text-slate-400"></p>
      </main>
    );
  }

  const question = questions[currentQuestion];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const validateAnswer = () => {
    if (selected === null) return;

    if (selected === question.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 >= questions.length) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelected(null);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center px-5">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-4xl font-black text-white">Quiz terminé</h1>

          <p className="mt-6 text-violet-300 text-5xl font-black">
            {percentage}%
          </p>

          <p className="mt-4 text-slate-400">
            {score} / {questions.length} bonnes réponses
          </p>
        </div>
      </main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <section className="relative z-20 max-w-sm mx-auto px-5 py-8">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-400 text-sm">Question</p>

            <h2 className="text-white font-black text-xl">
              {currentQuestion + 1} / {questions.length}
            </h2>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Score</p>

            <h2 className="text-violet-300 font-bold">{score}</h2>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="h-3 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.4,
            }}
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          />
        </div>

        {/* QUESTION */}
        <motion.div
          key={question.id}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-10"
        >
          <h1 className="text-2xl font-black text-white leading-snug">
            {question.question}
          </h1>
        </motion.div>

        {/* OPTIONS */}
        <div className="mt-12 flex flex-col gap-4">
          {question.options.map((option, index) => {
            const isSelected = selected === index;

            return (
              <motion.button
                key={index}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setSelected(index)}
                className={`p-5 rounded-[28px] border text-left transition-all
                  ${
                    isSelected
                      ? "border-violet-400 bg-violet-500/10"
                      : "border-white/10 bg-white/[0.08]"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{option}</span>

                  {isSelected && (
                    <CheckCircle2 size={20} className="text-violet-300" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* VALIDATE */}
        <button
          onClick={validateAnswer}
          disabled={selected === null}
          className="mt-10 w-full h-14 rounded-2xl bg-violet-600 text-white font-bold disabled:opacity-40"
        >
          Valider ma réponse
        </button>
      </section>
    </motion.main>
  );
}
