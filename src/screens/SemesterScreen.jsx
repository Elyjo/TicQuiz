"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Hourglass,
  ArrowLeft,
} from "lucide-react";

const VALID_DEPTS = ["d2a", "srt"];
const VALID_LEVELS = ["l1", "l2", "l3"];

export default function SemesterScreen() {
  const router = useRouter();
  const params = useParams();

  const dept = params?.dept;
  const level = params?.level;

  useEffect(() => {
    if (!VALID_DEPTS.includes(dept) || !VALID_LEVELS.includes(level)) {
      router.replace("/");
    }
  }, [dept, level, router]);

  const handleSelect = (semester) => {
    const existing = localStorage.getItem("userPath");

    const userPath = existing
      ? JSON.parse(existing)
      : {
          dept: null,
          level: null,
          semester: null,
        };

    userPath.dept = dept;
    userPath.level = level;

    userPath.semester = semester === "s1" ? "semester1" : "semester2";

    localStorage.setItem("userPath", JSON.stringify(userPath));

    router.push("/subjects");
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden bg-[#020617] flex justify-center"
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 z-50 w-11 h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center"
      >
        <ArrowLeft size={18} className="text-white/80" />
      </button>

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500/30 via-amber-500/10 to-yellow-400/10 blur-3xl opacity-80" />

      {/* CONTENT */}
      <section className="relative z-20 w-full max-w-sm min-h-screen px-5 py-8 flex flex-col items-center justify-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative w-20 h-20 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center">
            <CalendarDays size={36} className="text-orange-300" />
          </div>

          <h1 className="mt-6 text-2xl font-black text-white">
            Indiquer votre{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              semestre
            </span>
          </h1>

          <p className="mt-3 text-slate-300/70 text-sm leading-6">
            Choisissez votre semestre pour continuer votre parcours.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4,
              },
            },
          }}
          className="mt-10 flex flex-col gap-4 w-full"
        >
          {/* S1 */}
          <motion.button
            onClick={() => handleSelect("s1")}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden rounded-[34px] border border-yellow-400/20 bg-yellow-500/10 backdrop-blur-3xl p-5 flex items-center justify-between"
          >
            <div className="absolute bottom-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-yellow-500/20 blur-3xl" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-yellow-400/20 bg-yellow-500/10 backdrop-blur-xl flex items-center justify-center">
                <Hourglass size={28} className="text-yellow-300" />
              </div>

              <div className="text-left">
                <h3 className="text-3xl font-bold text-white">Semestre 1</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Premier semestre académique
                </p>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-400/20 flex items-center justify-center">
              <ArrowRight className="text-yellow-300" />
            </div>
          </motion.button>

          {/* S2 */}
          <motion.button
            onClick={() => handleSelect("s2")}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden rounded-[34px] border border-orange-400/20 bg-orange-500/10 backdrop-blur-3xl p-5 flex items-center justify-between"
          >
            <div className="absolute top-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-orange-400/20 bg-orange-500/10 backdrop-blur-xl flex items-center justify-center">
                <Clock size={28} className="text-orange-300" />
              </div>

              <div className="text-left">
                <h3 className="text-3xl font-bold text-white">Semestre 2</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Second semestre académique
                </p>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-400/20 flex items-center justify-center">
              <ArrowRight className="text-orange-300" />
            </div>
          </motion.button>
        </motion.div>
      </section>
    </motion.main>
  );
}
