"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Code2, RadioTower, Computer } from "lucide-react";

export default function DepartmentScreen() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] flex justify-center">
      {/* STARS */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* BIG PLANET */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/40 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      {/* PLANET CORE */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-violet-400 via-indigo-500 to-cyan-400 opacity-20 blur-2xl" />

      {/* LIGHT LEFT */}
      <div className="absolute top-[20%] left-[-100px] w-[250px] h-[250px] rounded-full bg-violet-600/30 blur-[120px]" />

      {/* LIGHT RIGHT */}
      <div className="absolute bottom-[10%] right-[-100px] w-[250px] h-[250px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* MOBILE */}
      <section className="relative z-20 w-full max-w-sm min-h-screen px-5 py-8">
        {/* HERO */}
        <div className="flex flex-col items-center mt-20">
          {/* LOGO */}
          <div className="relative top-10">
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-violet-500 blur-[70px] opacity-70" />

            {/* glass */}
            <div className="relative w-24 h-24 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.45)] overflow-hidden">
              {/* reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-30" />

              <Computer size={42} className="text-violet-300" />
            </div>
          </div>

          {/* TITLE */}
          <h1 className="mt-20 text-2xl font-black tracking-tight text-white">
            Quelle est votre{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              spécialité ?
            </span>
          </h1>
        </div>

        {/* D2A CARD */}
        <button
          onClick={() => router.push("/department/d2a")}
          className="relative mt-16 w-full overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between shadow-[0_0_40px_rgba(139,92,246,0.18)] active:scale-[0.98] transition"
        >
          {/* CARD GLOW */}
          <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-violet-500/20 blur-3xl" />

          {/* reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

          <div className="relative z-10 flex gap-4">
            <div className="w-16 h-16 rounded-2xl border border-violet-400/20 bg-violet-500/10 backdrop-blur-xl flex items-center justify-center">
              <Code2 size={30} className="text-violet-300" />
            </div>

            <div className="text-left">
              <h3 className="text-3xl font-bold text-white">D2A</h3>

              <p className="text-slate-300/70 text-sm mt-1 leading-5">
                Développement &
                <br />
                Administration d'Applis
              </p>
            </div>
          </div>

          <div className="relative z-10 w-12 h-12 rounded-full bg-violet-500/20 border border-violet-400/20 flex items-center justify-center backdrop-blur-xl">
            <ArrowRight className="text-violet-300" />
          </div>
        </button>

        {/* SRT CARD */}
        <button
          onClick={() => router.push("/department/srt")}
          className="relative mt-5 w-full overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between shadow-[0_0_40px_rgba(34,211,238,0.15)] active:scale-[0.98] transition"
        >
          {/* glow */}
          <div className="absolute bottom-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-cyan-500/20 blur-3xl" />

          {/* reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

          <div className="relative z-10 flex gap-4">
            <div className="w-16 h-16 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center">
              <RadioTower size={30} className="text-cyan-300" />
            </div>

            <div className="text-left">
              <h3 className="text-3xl font-bold text-white">SRT</h3>

              <p className="text-slate-300/70 text-sm mt-1 leading-5">
                Systèmes Réseaux &
                <br />
                Télécommunications
              </p>
            </div>
          </div>

          <div className="relative z-10 w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center backdrop-blur-xl">
            <ArrowRight className="text-cyan-300" />
          </div>
        </button>
      </section>
    </main>
  );
}
