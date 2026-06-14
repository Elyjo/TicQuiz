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

export default function HomePage() {
  const router = useRouter();
  const [path, setPath] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("userPath");

    if (saved) {
      setPath(JSON.parse(saved));
    }
  }, []);

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
        {/* Header */}
        <div>

          <h1 className="mt-2 text-3xl font-black text-white">Bonjour 👋</h1>

          {path && (
            <p className="mt-3 text-slate-400">
              {path.dept?.toUpperCase()} • {path.level?.toUpperCase()} •{" "}
              {path.semester === "semester1" ? "Semestre 1" : "Semestre 2"}
            </p>
          )}
        </div>

        {/* Carte principale */}
        <div className="mt-12 p-6">
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

          <div className="flex flex-col gap-12">
            <div className="p-5">
              <BookOpen className="text-cyan-300 mb-3" />
              <h3 className="text-white text-2xl font-black">0</h3>
              <p className="text-slate-400 text-sm">Quiz terminés</p>
            </div>

            <div className="p-5">
              <Brain className="text-violet-300 mb-3" />
              <h3 className="text-white text-2xl font-black">0</h3>
              <p className="text-slate-400 text-sm">Questions</p>
            </div>

            <div className="col-span-2 p-5">
              <TrendingUp className="text-emerald-300 mb-3" />

              <h3 className="text-white text-2xl font-black">0%</h3>

              <p className="text-slate-400 text-sm">Taux de réussite</p>
            </div>
          </div>
        </div>

        {/* Citation */}
        <div className="mt-1 p-5 text-center">
          <p className="text-slate-300 italic">
            "Chaque quiz terminé est un pas vers la réussite."
          </p>
        </div>
      </section>
    </motion.main>
  );
}
