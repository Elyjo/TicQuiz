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

  // PATH CHECK
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("userPath");

    if (!saved) {
      router.replace("/department");
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      if (!parsed?.dept || !parsed?.level || !parsed?.semester) {
        router.replace("/department");
        return;
      }

      setPath(parsed);
    } catch (e) {
      router.replace("/department");
    }
  }, []);

  // STATS LOAD
  useEffect(() => {
    if (typeof window === "undefined") return;

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

      setStats({
        quizzes,
        questions,
        percentage:
          totalQuestions > 0
            ? Math.round((totalScore / totalQuestions) * 100)
            : 0,
      });
    } catch (e) {
      console.error("quizScores corrupted");
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      <section className="relative z-20 max-w-md md:max-w-2xl mx-auto px-5 py-8 md:py-12">
        
        {/* MAIN CARD */}
        <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="px-3 py-3 rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
              <GraduationCap className="text-violet-300" size={24} />
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

        {/* STATS */}
        <div className="mt-10">
          <h2 className="text-white font-bold text-lg mb-4">
            Progression
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            
            {/* QUIZZES */}
            <motion.div variants={item} className="p-5 md:p-6 rounded-3xl bg-white/5 border border-white/10">
              <BookOpen className="text-cyan-300 mb-3" />
              <h3 className="text-white text-2xl font-black">
                {stats.quizzes}
              </h3>
              <p className="text-slate-400 text-sm">Quiz terminés</p>
            </motion.div>

            {/* QUESTIONS */}
            <motion.div variants={item} className="p-5 md:p-6 rounded-3xl bg-white/5 border border-white/10">
              <Brain className="text-violet-300 mb-3" />
              <h3 className="text-white text-2xl font-black">
                {stats.questions}
              </h3>
              <p className="text-slate-400 text-sm">Questions</p>
            </motion.div>

            {/* PERCENTAGE */}
            <motion.div variants={item} className="p-5 md:p-6 rounded-3xl bg-white/5 border border-white/10">
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