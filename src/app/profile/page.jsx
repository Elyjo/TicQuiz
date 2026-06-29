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
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const saved = localStorage.getItem("userPath");

    if (!saved) {
      router.replace("/department");
      return;
    }

    try {
      const savedPath = JSON.parse(saved);

      queueMicrotask(() => {
        if (!cancelled) {
          setPath(savedPath);
        }
      });
    } catch {
      router.replace("/department");
    }

    return () => {
      cancelled = true;
    };
  }, [router]);

  const handleChangePath = () => {
    localStorage.removeItem("userPath");
    router.replace("/department");
  };

  const handleResetStats = () => {
    setShowConfirm(true);
  };

  const confirmReset = () => {
    localStorage.removeItem("quizScores");
    setShowConfirm(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
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
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      <section className="relative z-20 max-w-md md:max-w-2xl mx-auto px-5 py-10">
        {/* PROFILE CARD */}
        <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
            <User size={34} className="text-violet-300" />
          </div>

          <h2 className="mt-6 text-xl font-bold text-white">
            {path?.name || "Étudiant"}
          </h2>

          {path && (
            <p className="mt-2 text-slate-400 text-sm">
              {path.dept?.toUpperCase()} • {path.level?.toUpperCase()} •{" "}
              {path.semester === "semester1" ? "Semestre 1" : "Semestre 2"}
            </p>
          )}
        </div>

        {/* SETTINGS */}
        <div className="mt-12 grid gap-4">
          {/* CHANGE PATH */}
          <button
            onClick={handleChangePath}
            className="
            flex items-center justify-between
            p-5 md:p-6
            rounded-2xl
            border border-white/10
            bg-white/5
            hover:bg-white/10
            transition
          "
          >
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-cyan-300" />
              <div className="text-left">
                <p className="text-white font-medium">Modifier mon parcours</p>
                <p className="text-xs text-slate-400">
                  Département, niveau et semestre
                </p>
              </div>
            </div>

            <ChevronRight size={18} className="text-slate-500" />
          </button>

          {/* RESET STATS */}
          <button
            onClick={handleResetStats}
            className="
            flex items-center justify-between
            p-5 md:p-6
            rounded-2xl
            border border-white/10
            bg-white/5
            hover:bg-white/10
            transition
          "
          >
            <div className="flex items-center gap-3">
              <RefreshCw size={20} className="text-red-300" />
              <div className="text-left">
                <p className="text-white font-medium">
                  Réinitialiser mes statistiques
                </p>
                <p className="text-xs text-slate-400">
                  Supprimer tous tes résultats
                </p>
              </div>
            </div>

            <ChevronRight size={18} className="text-slate-500" />
          </button>

          {/* INFO CARD */}
          <div className="mt-40 md:mt-68 p-5 md:p-6 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-violet-300 mt-1" />

              <div>
                <p className="text-white font-medium">Tic Quiz</p>
                <p className="text-xs text-slate-400 mt-1">Version 1.0.0</p>
                <p className="text-xs text-slate-500 mt-2">
                  Application de révision destinée aux étudiants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIRM MODAL */}
      {showConfirm && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={() => setShowConfirm(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md p-6 rounded-2xl bg-[#35136d38] border border-white/10"
          >
            <h2 className="text-lg font-bold text-white">Confirmation</h2>

            <p className="text-sm text-slate-400 mt-4">
              Veux-tu vraiment réinitialiser toutes tes statistiques ?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition"
              >
                Annuler
              </button>

              <button
                onClick={confirmReset}
                className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 transition"
              >
                Confirmer
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* SUCCESS TOAST */}
      {showSuccess && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-3 rounded-2xl shadow-lg z-50 whitespace-nowrap"
        >
          Statistiques réinitialisées ✔
        </motion.div>
      )}
    </motion.main>
  );
}
