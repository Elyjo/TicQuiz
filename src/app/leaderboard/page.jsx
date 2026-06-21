"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function LeaderboardPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden bg-[#020617] pb-32"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      <section className="relative z-20 max-w-md md:max-w-2xl mx-auto px-5 py-10">
        {/* HEADER */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
            <Trophy className="text-violet-300" size={32} />
          </div>

          <h1 className="mt-6 text-3xl font-black text-white">Leaderboard</h1>

          <p className="mt-3 text-slate-400 text-sm">
            Classement des meilleurs étudiants
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
          <div className="text-lg font-semibold text-white">
            🚧 Bientôt disponible
          </div>

          <p className="mt-3 text-slate-400 text-sm">
            Les classements seront basés sur tes scores et ta régularité.
          </p>
        </div>
      </section>
    </motion.main>
  );
}
