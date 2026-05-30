"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { d2a } from "@/data/curriculum/d2a";
import BackButton from "@/components/BackButton";

const colorClasses = {
  violet: {
    icon: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-400/20",
    glow: "bg-violet-500/20",
  },
  cyan: {
    icon: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/20",
    glow: "bg-cyan-500/20",
  },
  blue: {
    icon: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-400/20",
    glow: "bg-blue-500/20",
  },
  emerald: {
    icon: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/20",
    glow: "bg-emerald-500/20",
  },
  orange: {
    icon: "text-orange-300",
    bg: "bg-orange-500/10",
    border: "border-orange-400/20",
    glow: "bg-orange-500/20",
  },
  yellow: {
    icon: "text-yellow-300",
    bg: "bg-yellow-500/10",
    border: "border-yellow-400/20",
    glow: "bg-yellow-500/20",
  },
  pink: {
    icon: "text-pink-300",
    bg: "bg-pink-500/10",
    border: "border-pink-400/20",
    glow: "bg-pink-500/20",
  },
  red: {
    icon: "text-red-300",
    bg: "bg-red-500/10",
    border: "border-red-400/20",
    glow: "bg-red-500/20",
  },
  indigo: {
    icon: "text-indigo-300",
    bg: "bg-indigo-500/10",
    border: "border-indigo-400/20",
    glow: "bg-indigo-500/20",
  },
};

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);
  const [path, setPath] = useState(null);

  useEffect(() => {
    const savedPath = JSON.parse(localStorage.getItem("userPath"));

    if (!savedPath) return;

    setPath(savedPath);

    if (savedPath.dept === "d2a") {
      setSubjects(d2a[savedPath.level][savedPath.semester]);
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617]">
      <BackButton />

      {/* Background */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <section className="relative z-20 px-5 py-8 max-w-sm mx-auto">
        {/* Header */}
        <div className="mt-24 text-center">
          <h1 className="text-3xl font-black text-white">Matières</h1>

          <p className="mt-3 text-slate-400 text-sm">
            {path?.level?.toUpperCase()} •{" "}
            {path?.semester === "semester1" ? "Semestre 1" : "Semestre 2"}
          </p>
        </div>

        {/* Subjects */}
        <div className="mt-12 flex flex-col gap-4">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            const colors = colorClasses[subject.color] || colorClasses.violet;

            return (
              <button
                key={subject.id}
                className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between active:scale-[0.98] transition"
              >
                <div
                  className={`absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full blur-3xl ${colors.glow}`}
                />

                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.bg} ${colors.border} border`}
                  >
                    <Icon size={26} className={colors.icon} />
                  </div>

                  <div className="text-left">
                    <h3 className="text-white font-bold text-lg">
                      {subject.name}
                    </h3>

                    <p className="text-slate-400 text-sm">
                      {subject.credits} crédits
                    </p>
                  </div>
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border relative z-10 ${colors.bg} ${colors.border}`}
                >
                  <ArrowRight size={18} className={colors.icon} />
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
