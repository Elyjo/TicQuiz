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
    router.push(`/department/${dept}/${level}`)
  };

  const isDarkViolet = dept === "d2a";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] flex justify-center">
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div
        className={`absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-80 ${
          isDarkViolet
            ? "bg-gradient-to-br from-violet-500/40 via-fuchsia-500/10 to-cyan-400/10"
            : "bg-gradient-to-br from-cyan-500/40 via-fuchsia-500/10 to-violet-400/10"
        }`}
      />
      <div
        className={`absolute top-[-120px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full opacity-20 blur-2xl ${
          isDarkViolet
            ? "bg-gradient-to-br from-violet-400 via-indigo-500 to-cyan-400"
            : "bg-gradient-to-br from-cyan-400 via-indigo-500 to-violet-400"
        }`}
      />
      <div
        className={`absolute top-[20%] left-[-100px] w-[220px] h-[220px] rounded-full blur-[120px] ${
          isDarkViolet ? "bg-violet-600/30" : "bg-cyan-600/30"
        }`}
      />
      <div className="absolute bottom-[10%] right-[-100px] w-[220px] h-[220px] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <section className="relative z-20 w-full max-w-sm min-h-screen px-5 py-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full blur-[70px] opacity-70 ${
                isDarkViolet ? "bg-violet-500" : "bg-cyan-500"
              }`}
            />
            <div className="relative w-24 h-24 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.45)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-30" />
              <GraduationCap
                size={42}
                className={isDarkViolet ? "text-violet-300" : "text-cyan-300"}
              />
            </div>
          </div>

          <h1 className="mt-6 text-2xl font-black tracking-tight text-white">
            Quel est votre{" "}
            <span
              className={`bg-clip-text text-transparent ${isDarkViolet ? "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400" : "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400"}`}
            >
              niveau ?
            </span>
          </h1>
        </div>

        <div className="mt-10 flex flex-col gap-4 w-full">
          <button
            onClick={() => handleSelect("l1")}
            className={`relative overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition ${isDarkViolet ? "shadow-[0_0_40px_rgba(139,92,246,0.18)]" : "shadow-[0_0_40px_rgba(34,211,238,0.15)]"}`}
          >
            <div
              className={`absolute top-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full blur-3xl ${isDarkViolet ? "bg-violet-500/20" : "bg-cyan-500/20"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />
            <div className="relative z-10 flex gap-4">
              <div
                className={`w-16 h-16 rounded-2xl backdrop-blur-xl flex items-center justify-center ${isDarkViolet ? "border border-violet-400/20 bg-violet-500/10" : "border border-cyan-400/20 bg-cyan-500/10"}`}
              >
                <Lightbulb
                  size={28}
                  className={isDarkViolet ? "text-violet-300" : "text-cyan-300"}
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">L1</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Première année Licence
                </p>
              </div>
            </div>
            <div
              className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl ${isDarkViolet ? "bg-violet-500/20 border border-violet-400/20" : "bg-cyan-500/20 border border-cyan-400/20"}`}
            >
              <ArrowRight
                className={isDarkViolet ? "text-violet-300" : "text-cyan-300"}
              />
            </div>
          </button>

          <button
            onClick={() => handleSelect("l2")}
            className={`relative overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition ${isDarkViolet ? "shadow-[0_0_40px_rgba(139,92,246,0.18)]" : "shadow-[0_0_40px_rgba(34,211,238,0.15)]"}`}
          >
            <div
              className={`absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full blur-3xl ${isDarkViolet ? "bg-violet-500/20" : "bg-cyan-500/20"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />
            <div className="relative z-10 flex gap-4">
              <div
                className={`w-16 h-16 rounded-2xl backdrop-blur-xl flex items-center justify-center ${isDarkViolet ? "border border-violet-400/20 bg-violet-500/10" : "border border-cyan-400/20 bg-cyan-500/10"}`}
              >
                <Zap
                  size={28}
                  className={isDarkViolet ? "text-violet-300" : "text-cyan-300"}
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">L2</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Deuxième année Licence
                </p>
              </div>
            </div>
            <div
              className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl ${isDarkViolet ? "bg-violet-500/20 border border-violet-400/20" : "bg-cyan-500/20 border border-cyan-400/20"}`}
            >
              <ArrowRight
                className={isDarkViolet ? "text-violet-300" : "text-cyan-300"}
              />
            </div>
          </button>

          <button
            onClick={() => handleSelect("l3")}
            className={`relative overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition ${isDarkViolet ? "shadow-[0_0_40px_rgba(139,92,246,0.18)]" : "shadow-[0_0_40px_rgba(34,211,238,0.15)]"}`}
          >
            <div
              className={`absolute bottom-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full blur-3xl ${isDarkViolet ? "bg-violet-500/20" : "bg-cyan-500/20"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />
            <div className="relative z-10 flex gap-4">
              <div
                className={`w-16 h-16 rounded-2xl backdrop-blur-xl flex items-center justify-center ${isDarkViolet ? "border border-violet-400/20 bg-violet-500/10" : "border border-cyan-400/20 bg-cyan-500/10"}`}
              >
                <Crown
                  size={28}
                  className={isDarkViolet ? "text-violet-300" : "text-cyan-300"}
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">L3</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Troisième année Licence
                </p>
              </div>
            </div>
            <div
              className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl ${isDarkViolet ? "bg-violet-500/20 border border-violet-400/20" : "bg-cyan-500/20 border border-cyan-400/20"}`}
            >
              <ArrowRight
                className={isDarkViolet ? "text-violet-300" : "text-cyan-300"}
              />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
