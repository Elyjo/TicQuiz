"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { getQuiz } from "@/lib/getQuiz";
import { quizRegistry } from "@/data/quizzes/registry";

export default function SubjectPage() {
  const params = useParams();
  const router = useRouter();

  const [chapters, setChapters] = useState([]);
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("userPath");
    if (!saved) return;

    const path = JSON.parse(saved);

    const subjectKey = params.subjectId;

    const subjectQuizzes =
      quizRegistry?.[path.dept]?.[path.level]?.[path.semester]?.[subjectKey] ||
      {};

    const loadedChapters = Object.entries(subjectQuizzes).map(
      ([chapterId, quiz]) => ({
        id: chapterId,
        title: quiz.title,
        questions: quiz.questions.length,
      }),
    );

    setChapters(loadedChapters);
    setSubjectName(subjectKey);
  }, [params.subjectId]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.main className="relative min-h-screen bg-[#020617] overflow-hidden">
      <section className="relative z-20 px-5 py-10 max-w-sm mx-auto">
        {/* HEADER */}
        <div className="text-center mt-10">
          <div className="w-20 h-20 mx-auto rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center">
            <BookOpen size={34} className="text-violet-300" />
          </div>

          <h1 className="mt-6 text-2xl font-black text-white">{subjectName}</h1>

          <p className="mt-2 text-slate-400 text-sm">Choisissez un chapitre</p>
        </div>

        {/* CHAPTERS */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col gap-4"
        >
          {chapters.map((chapter) => (
            <motion.button
              key={chapter.id}
              variants={item}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                router.push(`/subjects/${params.subjectId}/${chapter.id}`)
              }
              className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between"
            >
              <div className="text-left">
                <h3 className="text-lg font-bold text-white">
                  {chapter.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {chapter.questions} questions
                </p>
              </div>

              <ArrowRight className="text-white/70" />
            </motion.button>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}
