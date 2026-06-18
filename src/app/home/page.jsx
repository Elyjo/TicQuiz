"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Brain,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { decodeData } from "@/utils/secureStorage";

export default function HomePage() {
  const router = useRouter();
  const [path, setPath] = useState(null);
  const [stats, setStats] = useState({
    quizzes: 0,
    questions: 0,
    percentage: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem("userPath");

    if (!saved) {
      router.replace("/department");
      return;
    }

    let parsed;

    try {
      parsed = JSON.parse(saved);
    } catch (e) {
      router.replace("/department");
      return;
    }

    if (!parsed.dept || !parsed.level || !parsed.semester) {
      router.replace("/department");
      return;
    }

    setPath(parsed);
  }, [router]);

  useEffect(() => {
    const saved = localStorage.getItem("quizScores");

    if (!saved) return;

    try {
      const parsed = decodeData(saved);

      if (!parsed) return;

      let quizzes = 0;
      let questions = 0;
      let totalScore = 0;
      let totalQuestions = 0;

      Object.values(parsed).forEach((subject) => {
        Object.values(subject).forEach((chapter) => {
          quizzes += 1;
          questions += chapter.total || 0;

          totalScore += chapter.score || 0;
          totalQuestions += chapter.total || 0;
        });
      });

      const percentage =
        totalQuestions > 0
          ? Math.round((totalScore / totalQuestions) * 100)
          : 0;

      setStats({
        quizzes,
        questions,
        percentage,
      });
    } catch (e) {
      console.error("quizScores corrupted");
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden bg-[#020617] pb-32"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      <section className="relative z-20 max-w-sm mx-auto px-5 py-8">
        {/* Carte principale */}
        <div className="mt-10 p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
              <GraduationCap className="text-violet-300" />
            </div>

            <div>
              <h2 className="text-white font-bold text-lg">
                Continuer mes révisions
              </h2>

              <p className="text-slate-400 text-sm">
                Accède à tes matières et progresse chaque jour.
              </p>
            </div>
          </div>

          <button
            onClick={() => router.push("/subjects")}
            className="mt-6 w-full rounded-2xl bg-violet-500/20 border border-violet-400/20 py-3 text-white font-semibold flex items-center justify-center gap-2"
          >
            Commencer
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-10">
          <h2 className="text-white font-bold text-lg mb-4">Progression</h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Quiz */}
            <motion.div variants={item} className="p-5">
              <BookOpen className="text-cyan-300 mb-3" />
              <h3 className="text-white text-2xl font-black">
                {stats.quizzes}
              </h3>
              <p className="text-slate-400 text-sm">Quiz terminés</p>
            </motion.div>

            {/* Questions */}
            <motion.div variants={item} className="p-5">
              <Brain className="text-violet-300 mb-3" />
              <h3 className="text-white text-2xl font-black">
                {stats.questions}
              </h3>
              <p className="text-slate-400 text-sm">Questions</p>
            </motion.div>

            {/* Percentage */}
            <motion.div variants={item} className="p-5">
              <TrendingUp className="text-emerald-300 mb-3" />
              <h3 className="text-white text-2xl font-black">
                {stats.percentage}%
              </h3>
              <p className="text-slate-400 text-sm">Taux de réussite</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
