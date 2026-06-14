"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function LeaderboardPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden bg-[#020617] flex items-center justify-center px-5"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-sm w-full"
      >
        {/* Icon */}
        <div className="w-20 h-20 mx-auto rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center mb-6">
          <Trophy className="text-violet-300" size={32} />
        </div>

        {/* Title */}
        <h1 className="mt-1 text-3xl font-black text-white">
          Leaderboard
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-slate-400">
          Classement des meilleurs étudiants
        </p>

        {/* Badge */}
        <div className="mt-12 inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
          🚧 Bientôt disponible
        </div>

        {/* Hint */}
        <p className="mt-6 text-slate-500 text-sm">
          Les classements seront basés sur tes scores et ta régularité.
        </p>
      </motion.div>
    </motion.main>
  );
}