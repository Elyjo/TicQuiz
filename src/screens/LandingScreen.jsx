"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, RefreshCw, TrendingUp, Info } from "lucide-react";

export default function LandingScreen() {
  const router = useRouter();

  const [pseudo, setPseudo] = useState("");
  const [error, setError] = useState("");

  const handleStart = () => {
    const cleanPseudo = pseudo.trim();

    if (!cleanPseudo) {
      setError("Veuillez entrer votre pseudo");
      return;
    }

    if (cleanPseudo.length < 5) {
      setError("Le pseudo doit contenir au moins 5 caractères");
      return;
    }

    localStorage.setItem("ticquiz_user", cleanPseudo);
    router.push("/department");
  };

  const handleChange = (e) => {
    setPseudo(e.target.value);

    if (error) setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleStart();
    }
  };

  const isValid = pseudo.trim().length >= 5 && pseudo.trim().length <= 10;

  return (
    <main className="relative min-h-screen bg-[#020617] overflow-hidden text-white flex flex-col items-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute -top-50 w-125 h-125 rounded-full bg-violet-500/30 blur-3xl" />
      <div className="absolute -bottom-50 -right-25 w-100 h-100 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center mt-28 px-6 text-center w-full max-w-sm">
        {/* ICON */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-violet-500 blur-[70px] opacity-0" />

          <div className="relative w-32 h-32 rounded-[28px] bg-white/0 backdrop-blur-3xl flex items-center justify-center">
            <img src="/logobf.png" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="mt-12 flex flex-row items-center gap-2 text-slate-300/70 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-violet-300" />
            <span>Apprendre</span>
          </div>

          <div className="flex items-center gap-2">
            <RefreshCw size={20} className="text-cyan-300" />
            <span>Réviser</span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-fuchsia-300" />
            <span>Progresser</span>
          </div>
        </div>
        {/* INPUT */}
        <div className="mt-10 w-full">
          <input
            value={pseudo}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Entrez votre pseudo"
            maxLength={10}
            className={`w-full px-5 py-4 rounded-2xl bg-white/5 border backdrop-blur-xl outline-none transition
              ${error ? "border-red-500/60" : "border-white/10 focus:border-violet-400/50"}
            `}
          />

          {/* ERROR MESSAGE */}
          {error && (
            <p className="text-red-400 text-xs mt-2 text-left">{error}</p>
          )}

          <p className="text-xs text-right text-slate-400 mt-1">
            {pseudo.length}/10 caractères
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleStart}
          disabled={!isValid}
          className={`mt-10 w-full px-6 py-4 rounded-2xl font-semibold transition
    ${
      isValid
        ? "bg-violet-600 hover:bg-violet-700"
        : "bg-violet-600/30 cursor-not-allowed"
    }
  `}
        >
          Commencer
        </button>

        {/* INFO */}
        <div className="mt-56 flex items-start gap-2 text-left bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
          <Info className="text-cyan-300 mt-0.5" size={30} />

          <p className="text-xs text-slate-300/70 leading-5">
            Ceci est un prototype. Vos données sont stockées uniquement en local
            sur votre appareil.
          </p>
        </div>
      </section>
    </main>
  );
}
