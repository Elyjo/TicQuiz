"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  Code2,
  RadioTower,
  Computer,
  ArrowLeft,
} from "lucide-react";

export default function DepartmentScreen() {
  const router = useRouter();

  const saveDepartment = (dept) => {
    const userPath = {
      dept,
      level: null,
      semester: null,
    };

    localStorage.setItem("userPath", JSON.stringify(userPath));

    router.push(`/department/${dept}`);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.45,
        delayChildren: 0.7,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden bg-[#020617] flex justify-center"
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 z-50 w-11 h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center active:scale-95 transition"
      >
        <ArrowLeft size={18} className="text-white/80" />
      </button>

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/40 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      {/* CONTENT */}
      <section className="relative z-20 w-full max-w-sm min-h-screen px-5 py-8 flex flex-col items-center justify-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative">
            <div className="relative w-24 h-24 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center">
              <Computer size={42} className="text-violet-300" />
            </div>
          </div>

          <h1 className="mt-16 text-2xl font-black text-white">
            Quelle est ta{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              spécialité
            </span>
            ?
          </h1>

          <p className="mt-3 text-slate-300/70 text-sm leading-6">
            Choisis ta filière afin d’accéder aux niveaux.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col gap-5 w-full"
        >
          {/* D2A */}
          <motion.button
            variants={item}
            whileTap={{ scale: 0.98 }}
            onClick={() => saveDepartment("d2a")}
            className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between"
          >
            <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-violet-400/20 bg-violet-500/10 backdrop-blur-xl flex items-center justify-center">
                <Code2 size={30} className="text-violet-300" />
              </div>

              <div className="text-left">
                <h3 className="text-3xl font-bold text-white">D2A</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Développement & Admin
                </p>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-400/20 flex items-center justify-center">
              <ArrowRight className="text-violet-300" />
            </div>
          </motion.button>

          {/* SRT */}
          <motion.button
            variants={item}
            whileTap={{ scale: 0.98 }}
            onClick={() => saveDepartment("srt")}
            className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between"
          >
            <div className="absolute bottom-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center">
                <RadioTower size={30} className="text-cyan-300" />
              </div>

              <div className="text-left">
                <h3 className="text-3xl font-bold text-white">SRT</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Réseaux & Télécoms
                </p>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center">
              <ArrowRight className="text-cyan-300" />
            </div>
          </motion.button>
        </motion.div>
      </section>
    </motion.main>
  );
}
