"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowRight, GraduationCap, Lightbulb, Zap, Crown } from "lucide-react";

const VALID_DEPTS = ["d2a", "srt"];

export default function LevelScreen({ dept: deptProp }) {
  const router = useRouter();
  const params = useParams();

  const dept = deptProp ?? params?.dept;

  useEffect(() => {
    if (!VALID_DEPTS.includes(dept)) {
      router.replace("/");
    }
  }, [dept, router]);

  const handleSelect = (level) => {
    if (!dept) return;
    router.push(`/department/${dept}/${level}`);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] flex justify-center">
      {/* STARS */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* PLANET */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500/25 via-rose-500/10 to-orange-400/10 blur-3xl opacity-70" />

      {/* LIGHTS */}
      <div className="absolute top-[20%] left-[-100px] w-[220px] h-[220px] rounded-full bg-pink-600/20 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-100px] w-[220px] h-[220px] rounded-full bg-orange-500/15 blur-[120px]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CONTENT */}
      <section className="relative z-20 w-full max-w-sm min-h-screen px-5 py-8 flex flex-col items-center justify-center">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-pink-500 blur-[70px] opacity-60" />

            <div className="relative w-24 h-24 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-30" />
              <GraduationCap size={42} className="text-pink-300" />
            </div>
          </div>

          <h1 className="mt-6 text-2xl font-black tracking-tight text-white">
            Quel est votre{" "}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
              niveau
            </span>
            ?
          </h1>

          <p className="mt-3 text-slate-300/70 text-sm leading-6">
            Sélectionnez votre année universitaire pour continuer votre
            parcours.
          </p>
        </div>

        {/* LEVELS */}
        <div className="mt-10 flex flex-col gap-4 w-full">
          {/* L1 */}
          <button
            onClick={() => handleSelect("l1")}
            className="relative overflow-hidden rounded-[34px] border border-pink-400/20 bg-pink-500/10 backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition shadow-[0_0_40px_rgba(236,72,153,0.15)]"
          >
            <div className="absolute top-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-pink-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-pink-400/20 bg-pink-500/10 backdrop-blur-xl flex items-center justify-center">
                <Lightbulb size={28} className="text-pink-300" />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">L1</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Première année Licence
                </p>
              </div>
            </div>

            <div className="relative z-10 w-12 h-12 rounded-full bg-pink-500/15 border border-pink-400/20 flex items-center justify-center backdrop-blur-xl">
              <ArrowRight className="text-pink-300" />
            </div>
          </button>

          {/* L2 */}
          <button
            onClick={() => handleSelect("l1")}
            className="relative overflow-hidden rounded-[34px] border border-pink-400/20 bg-pink-500/10 backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition shadow-[0_0_40px_rgba(236,72,153,0.15)]"
          >
            <div className="absolute top-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-pink-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-pink-400/20 bg-pink-500/10 backdrop-blur-xl flex items-center justify-center">
                <Zap size={28} className="text-pink-300" />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">L1</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Première année Licence
                </p>
              </div>
            </div>

            <div className="relative z-10 w-12 h-12 rounded-full bg-pink-500/15 border border-pink-400/20 flex items-center justify-center backdrop-blur-xl">
              <ArrowRight className="text-pink-300" />
            </div>
          </button>

          {/* L3 */}
          <button
            onClick={() => handleSelect("l3")}
            className="relative overflow-hidden rounded-[34px] border border-rose-400/20 bg-rose-500/10 backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition shadow-[0_0_40px_rgba(244,114,182,0.15)]"
          >
            <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-rose-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-rose-400/20 bg-rose-500/10 backdrop-blur-xl flex items-center justify-center">
                <Crown size={28} className="text-rose-300" />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">L2</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Deuxième année Licence
                </p>
              </div>
            </div>

            <div className="relative z-10 w-12 h-12 rounded-full bg-rose-500/15 border border-rose-400/20 flex items-center justify-center backdrop-blur-xl">
              <ArrowRight className="text-rose-300" />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
