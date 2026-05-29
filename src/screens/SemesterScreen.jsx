"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const VALID_DEPTS = ["d2a", "srt"];
const VALID_LEVELS = ["l1", "l2", "l3"];

export default function SemesterScreen({ dept: deptProp, level: levelProp }) {
  const router = useRouter();
  const params = useParams();

  const dept = deptProp ?? params?.dept;
  const level = levelProp ?? params?.level;

  useEffect(() => {
    if (!VALID_DEPTS.includes(dept) || !VALID_LEVELS.includes(level)) {
      router.replace("/");
    }
  }, [dept, level, router]);

  const handleSelect = (semester) => {
    router.push(`/department/${dept}/${level}/${semester}`);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] flex justify-center">
      {/* STARS */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* BIG PLANET */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500/40 via-amber-500/10 to-yellow-400/10 blur-3xl opacity-80" />

      {/* PLANET CORE */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400 opacity-20 blur-2xl" />

      {/* LIGHT LEFT */}
      <div className="absolute top-[20%] left-[-100px] w-[250px] h-[250px] rounded-full bg-orange-600/30 blur-[120px]" />

      {/* LIGHT RIGHT */}
      <div className="absolute bottom-[10%] right-[-100px] w-[250px] h-[250px] rounded-full bg-yellow-500/20 blur-[120px]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CONTENT */}
      <section className="relative z-20 w-full max-w-sm min-h-screen px-5 py-8 flex flex-col items-center justify-center">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          {/* ICON */}
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-orange-500 blur-[70px] opacity-70" />

            {/* glass */}
            <div className="relative w-20 h-20 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center overflow-hidden">
              {/* reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-30" />

              <CalendarDays size={36} className="text-orange-300" />
            </div>
          </div>

          {/* TITLE */}
          <h1 className="mt-6 text-2xl font-black tracking-tight text-white">
            Indiquez votre{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              semestre
            </span>
          </h1>

        </div>

        {/* SEMESTERS */}
        <div className="mt-10 flex flex-col gap-5 w-full">
          {/* S1 */}
          <button
            onClick={() => handleSelect("s1")}
            className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition shadow-[0_0_40px_rgba(249,115,22,0.18)]"
          >
            {/* glow */}
            <div className="absolute top-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-orange-500/20 blur-3xl" />

            {/* reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

            <div className="relative z-10 flex gap-4">
              {/* icon box */}
              <div className="w-16 h-16 rounded-2xl border border-orange-400/20 bg-orange-500/10 backdrop-blur-xl flex items-center justify-center">
                <ArrowUp size={28} className="text-orange-300" />
              </div>

              {/* text */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">
                  Semestre 1
                </h3>

                <p className="text-slate-300/70 text-sm mt-1">
                  Premier semestre académique
                </p>
              </div>
            </div>

            {/* arrow */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-orange-500/20 border border-orange-400/20 flex items-center justify-center backdrop-blur-xl">
              <ArrowRight className="text-orange-300" />
            </div>
          </button>

          {/* S2 */}
          <button
            onClick={() => handleSelect("s2")}
            className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition shadow-[0_0_40px_rgba(249,115,22,0.18)]"
          >
            {/* glow */}
            <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-yellow-500/20 blur-3xl" />

            {/* reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

            <div className="relative z-10 flex gap-4">
              {/* icon box */}
              <div className="w-16 h-16 rounded-2xl border border-orange-400/20 bg-orange-500/10 backdrop-blur-xl flex items-center justify-center">
                <ArrowDown size={28} className="text-orange-300" />
              </div>

              {/* text */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">
                  Semestre 2
                </h3>

                <p className="text-slate-300/70 text-sm mt-1">
                  Deuxième semestre académique
                </p>
              </div>
            </div>

            {/* arrow */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-orange-500/20 border border-orange-400/20 flex items-center justify-center backdrop-blur-xl">
              <ArrowRight className="text-orange-300" />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}