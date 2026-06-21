"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Splash() {
  const router = useRouter();

  const title = "TicQuiz";
  const subtitle = "Conçu avec passion par Elyjo";

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/username");
    }, 4800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#020617] flex items-center justify-center">
      {/* Texture */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Glow Violet */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full bg-violet-500/25 blur-3xl" />

      {/* Glow Cyan */}
      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Glow Central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-fuchsia-500/15 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center -translate-y-16">
        {/* Logo + Glow */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-40 h-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative w-32 h-32"
          >
            <img
              src="/logobf.png"
              alt="TicQuiz Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>


        {/* Subtitle */}
        <p className="mt-6 text-slate-400 text-sm flex">
          {subtitle.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.5 + index * 0.1,
                duration: 0.5,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </p>

        {/* Loader */}
        <div className="mt-10 w-32 h-1 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.2,
              ease: "linear",
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}
