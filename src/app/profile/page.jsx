"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  RefreshCw,
  Info,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [path, setPath] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("userPath");

    if (!saved) {
      router.replace("/department");
      return;
    }

    try {
      setPath(JSON.parse(saved));
    } catch {
      router.replace("/department");
    }
  }, [router]);

  const handleChangePath = () => {
    localStorage.removeItem("userPath");
    router.replace("/department");
  };

  const handleResetStats = () => {
    const confirmed = window.confirm(
      "Voulez-vous vraiment réinitialiser toutes vos statistiques ?",
    );

    if (!confirmed) return;

    localStorage.removeItem("quizScores");

    alert("Statistiques réinitialisées.");
  };

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
        {/* Student Card */}
        <motion.div className="mt-10 p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
              <User size={34} className="text-violet-300" />
            </div>

            <h2 className="mt-6 text-xl font-bold text-white">
              {path?.name || "Étudiant"}
            </h2>

            {path && (
              <p className="mt-2 text-slate-400">
                {path.dept?.toUpperCase()} • {path.level?.toUpperCase()} •{" "}
                {path.semester === "semester1" ? "Semestre 1" : "Semestre 2"}
              </p>
            )}
          </div>
        </motion.div>

        {/* Settings */}
        <motion.div
          className="mt-24"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="mt-10 flex flex-col gap-4">
            <motion.button
              variants={item}
              onClick={handleChangePath}
              className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-cyan-300" />

                <div className="text-left">
                  <p className="text-white font-medium">
                    Modifier mon parcours
                  </p>

                  <p className="text-xs text-slate-400">
                    Département, niveau et semestre
                  </p>
                </div>
              </div>

              <ChevronRight size={18} className="text-slate-500" />
            </motion.button>

            <motion.button
              variants={item}
              onClick={handleResetStats}
              className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="flex items-center gap-3">
                <RefreshCw size={20} className="text-red-300" />

                <div className="text-left">
                  <p className="text-white font-medium">
                    Réinitialiser mes statistiques
                  </p>

                  <p className="text-xs text-slate-400">
                    Supprimer tous les résultats
                  </p>
                </div>
              </div>

              <ChevronRight size={18} className="text-slate-500" />
            </motion.button>

            <motion.div
              variants={item}
              className="mt-24 p-5 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="flex items-center gap-3">
                <Info size={20} className="text-violet-300" />

                <div>
                  <p className="text-white font-medium">Tic Quiz</p>

                  <p className="text-xs text-slate-400 mt-1">Version 1.0.0</p>

                  <p className="text-xs text-slate-500 mt-2">
                    Application de révision destinée aux étudiants.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
