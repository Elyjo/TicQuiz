"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";
import { quizRegistry } from "@/data/quizzes/registry";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const params = useParams();

  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selected, setSelected] = useState(null);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const router = useRouter();

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

  const savedScores = JSON.parse(localStorage.getItem("quizScores")) || {};

  savedScores[params.subjectId] = {
    ...(savedScores[params.subjectId] || {}),

    [params.chapterId]: selected === question.answer ? score + 1 : score,
  };

  localStorage.setItem("quizScores", JSON.stringify(savedScores));

  const finalScore = selected === question.answer ? score + 1 : score;

  const percentage = Math.round((finalScore / questions.length) * 100);

  savedScores[params.subjectId] = {
    ...(savedScores[params.subjectId] || {}),

    [params.chapterId]: {
      score: finalScore,
      total: questions.length,
      percentage,
      completedAt: Date.now(),
    },
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    const getMessage = () => {
      if (percentage >= 80) return "Excellent travail 🚀";
      if (percentage >= 60) return "Très bon résultat 👏";
      if (percentage >= 40) return "Continue comme ça 💪";
      return "Encore un effort 📚";
    };

    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen overflow-hidden"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <section className="relative z-20 min-h-screen flex items-center justify-center px-5">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm rounded-[34px] bg-none p-8"
          >
            {/* SCORE CIRCLE */}
            <div className="flex justify-center">
            </div>

            {/* TITLE */}
            <h1 className="mt-8 text-center text-3xl font-black text-white">
              Quiz terminé
            </h1>

            <p className="mt-3 text-center text-slate-400">
              {score} / {questions.length} bonnes réponses
            </p>

            {/* MESSAGE */}
            <p className="mt-6 text-center text-white font-medium">
              {getMessage()}
            </p>

            {/* STATS */}
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Questions</span>

                <span className="text-white font-semibold">
                  {questions.length}
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-slate-400">Bonnes réponses</span>

                <span className="text-violet-300 font-semibold">{score}</span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-slate-400">Taux de réussite</span>

                <span className="text-white font-semibold">{percentage}%</span>
              </div>
            </div>

            {/* ACTIONS */}
            <button
              onClick={() => window.location.reload()}
              className="mt-12 w-full h-14 rounded-2xl bg-violet-600 text-white font-bold transition-all hover:bg-violet-500"
            >
              Rejouer le quiz
            </button>

            <button
              onClick={() => router.push(`/subjects/${params.subjectId}`)}
              className="mt-12 w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-medium"
            >
              Retour aux chapitres
            </button>
          </motion.div>
        </section>
      </motion.main>
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
        <div>
          <p className="text-slate-400 text-sm">Temps</p>

          <h2 className="text-violet-300 font-bold">{formatTime()}</h2>
        </div>

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
