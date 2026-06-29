"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Zap,
  Crown,
  ArrowLeft,
} from "lucide-react";
import { useEffect } from "react";

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

    let userPath = {
      dept: null,
      level: null,
      semester: null,
    };

    try {
      const existing = localStorage.getItem("userPath");

      if (existing) {
        userPath = JSON.parse(existing);
      }
    } catch {
      console.warn("Invalid userPath");
    }

    userPath.dept = dept;
    userPath.level = level;

    localStorage.setItem("userPath", JSON.stringify(userPath));

    router.push(`/department/${dept}/${level}`);
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

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500/30 via-rose-500/10 to-orange-400/10 blur-3xl opacity-70" />

      <div className="absolute top-[20%] left-[-100px] w-[220px] h-[220px] rounded-full bg-pink-600/20 blur-[120px]" />

      <div className="absolute bottom-[10%] right-[-100px] w-[220px] h-[220px] rounded-full bg-orange-500/15 blur-[120px]" />

      {/* CONTENT */}
      <section className="relative z-20 w-full max-w-sm min-h-screen px-5 py-8 flex flex-col items-center justify-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative">
            <div className="relative w-24 h-24 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center">
              <GraduationCap size={42} className="text-pink-300" />
            </div>
          </div>

          <h1 className="mt-6 text-2xl font-black text-white">
            Quel est ton{" "}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
              niveau
            </span>
            ?
          </h1>

          <p className="mt-3 text-slate-300/70 text-sm leading-6">
            Sélectionne ton année universitaire pour continuer ton
            parcours.
          </p>
        </motion.div>

        {/* LEVELS */}
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
          {/* L1 */}
          <motion.button
            onClick={() => handleSelect("l1")}
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
            className="relative overflow-hidden rounded-[34px] border border-pink-400/20 bg-pink-500/10 backdrop-blur-3xl p-5 flex items-center justify-between shadow-[0_0_40px_rgba(236,72,153,0.15)]"
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

            <div className="w-12 h-12 rounded-full bg-pink-500/15 border border-pink-400/20 flex items-center justify-center backdrop-blur-xl">
              <ArrowRight className="text-pink-300" />
            </div>
          </motion.button>

          {/* L2 */}
          <motion.button
            onClick={() => handleSelect("l2")}
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
            className="relative overflow-hidden rounded-[34px] border border-pink-400/20 bg-pink-500/10 backdrop-blur-3xl p-5 flex items-center justify-between shadow-[0_0_40px_rgba(236,72,153,0.15)]"
          >
            <div className="absolute top-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-pink-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-pink-400/20 bg-pink-500/10 backdrop-blur-xl flex items-center justify-center">
                <Zap size={28} className="text-pink-300" />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">L2</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Deuxième année Licence
                </p>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-pink-500/15 border border-pink-400/20 flex items-center justify-center backdrop-blur-xl">
              <ArrowRight className="text-pink-300" />
            </div>
          </motion.button>

          {/* L3 */}
          <motion.button
            onClick={() => handleSelect("l3")}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden rounded-[34px] border border-rose-400/20 bg-rose-500/10 backdrop-blur-3xl p-5 flex items-center justify-between shadow-[0_0_40px_rgba(244,114,182,0.15)]"
          >
            <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-rose-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20" />

            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-16 rounded-2xl border border-rose-400/20 bg-rose-500/10 backdrop-blur-xl flex items-center justify-center">
                <Crown size={28} className="text-rose-300" />
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">L3</h3>
                <p className="text-slate-300/70 text-sm mt-1">
                  Troisième année Licence
                </p>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-rose-500/15 border border-rose-400/20 flex items-center justify-center backdrop-blur-xl">
              <ArrowRight className="text-rose-300" />
            </div>
          </motion.button>
        </motion.div>
      </section>
    </motion.main>
  );
}
