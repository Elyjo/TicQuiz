"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, RefreshCw, TrendingUp, Info } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import PwaInstallBanner from "@/components/PwaInstallBanner";

export default function UsernamePage() {
  const router = useRouter();

  const [pseudo, setPseudo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    const cleanPseudo = pseudo.trim();

    if (cleanPseudo.length < 5) {
      setError("Le pseudo doit contenir au moins 5 caractères");
      return;
    }

    setLoading(true);
    setError("");

    // 1. vérifier si existe déjà
    const { data: existing, error: selectError } = await supabase
      .from("users")
      .select("username")
      .eq("username", cleanPseudo)
      .maybeSingle();

    if (selectError) {
      setError("Erreur serveur");
      setLoading(false);
      return;
    }

    // 2. si existe → on continue directement
    if (existing) {
      localStorage.setItem("ticquiz_user", cleanPseudo);
      localStorage.setItem("hasStartedApp", "true");
      router.push("/department");
      return;
    }

    // 3. sinon on crée
    const { error: insertError } = await supabase
      .from("users")
      .insert([{ username: cleanPseudo }]);

    if (insertError) {
      setError("Pseudo déjà utilisé");
      setLoading(false);
      return;
    }

    // 4. save local
    localStorage.setItem("ticquiz_user", cleanPseudo);
    localStorage.setItem("hasStartedApp", "true");

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

  const isValid = pseudo.trim().length >= 5;

  return (
    <main className="relative min-h-screen bg-[#020617] overflow-hidden text-white flex flex-col items-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute top-[-200px] w-[500px] h-[500px] rounded-full bg-violet-500/30 blur-3xl" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-3xl" />

      <PwaInstallBanner />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center mt-28 px-6 text-center w-full max-w-sm">
        <div className="relative">
          <Image
            src="/logobf.png"
            alt="TicQuiz Logo"
            width={128}
            height={128}
            priority
            className="w-32 h-32 object-contain"
          />
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
              ${
                error
                  ? "border-red-500/60"
                  : "border-white/10 focus:border-violet-400/50"
              }
            `}
          />

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
          disabled={!isValid || loading}
          className={`mt-10 w-full px-6 py-4 rounded-2xl font-semibold transition
            ${
              isValid && !loading
                ? "bg-violet-600 hover:bg-violet-700"
                : "bg-violet-600/30 cursor-not-allowed"
            }
          `}
        >
          {loading ? "Création..." : "Commencer"}
        </button>
      </section>
    </main>
  );
}
