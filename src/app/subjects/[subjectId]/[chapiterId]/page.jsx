"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function QuizPage() {
  const questions = [
    {
      id: 1,
      question: "Qu’est-ce qu’une donnée d’entrée ?",
      options: [
        "Une donnée produite",
        "Une donnée fournie",
        "Une donnée intermédiaire",
        "Une constante",
      ],
      answer: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);

  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

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
            <p className="text-slate-400 text-sm">
              Question
            </p>

            <h2 className="text-white font-black text-xl">
              {currentQuestion + 1} / {questions.length}
            </h2>
          </div>

          <div className="text-right">
            <p className="text-slate-400 text-sm">
              Temps
            </p>

            <h2 className="text-violet-300 font-bold">
              00:00
            </h2>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="mt-6 h-3 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          />
        </div>

        {/* QUESTION */}
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10"
        >
          <h1 className="text-2xl font-black text-white leading-snug">
            {question.question}
          </h1>
        </motion.div>

        {/* OPTIONS */}
        <div className="mt-8 flex flex-col gap-4">
          {question.options.map((option, index) => {
            const isSelected = selected === index;

            return (
              <motion.button
                whileTap={{ scale: 0.98 }}
                key={index}
                onClick={() => setSelected(index)}
                className={`p-5 rounded-[28px] border text-left transition-all
                ${
                  isSelected
                    ? "border-violet-400 bg-violet-500/10"
                    : "border-white/10 bg-white/[0.08]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">
                    {option}
                  </span>

                  {isSelected && (
                    <CheckCircle2
                      size={20}
                      className="text-violet-300"
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* BUTTON */}
        <button
          disabled={selected === null}
          className="mt-10 w-full h-14 rounded-2xl bg-violet-600 text-white font-bold disabled:opacity-40"
        >
          Valider ma réponse
        </button>

      </section>
    </motion.main>
  );
}