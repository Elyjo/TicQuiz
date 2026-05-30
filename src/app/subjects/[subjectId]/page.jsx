"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

import { getCourse } from "@/lib/getCourse";
import BackButton from "@/components/BackButton";

export default function SubjectPage() {
  const params = useParams();
  const router = useRouter();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = localStorage.getItem("userPath");
      if (!raw) return;

      const path = JSON.parse(raw);

      const data = getCourse(path, params.subjectId);

      setCourse(data || null);
    } catch (e) {
      console.log("Error loading course:", e);
      setCourse(null);
    }
  }, [params.subjectId]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.45,
        delayChildren: 0.7,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (!course) {
    return (
      <motion.main className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        Chargement...
      </motion.main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      <BackButton />

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/40 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80 pointer-events-none" />

      <section className="relative z-20 px-5 py-8 max-w-sm mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-24 text-center"
        >
          <div className="w-24 h-24 mx-auto rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-3xl flex items-center justify-center">
            <BookOpen size={42} className="text-violet-300" />
          </div>

          <h1 className="mt-10 text-3xl font-black text-white">
            {course.title}
          </h1>

          <p className="mt-3 text-slate-400 text-sm">
            Sélectionnez un chapitre
          </p>
        </motion.div>

        {/* CHAPTERS */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col gap-4"
        >
          {course.chapters?.map((chapter) => (
            <motion.button
              key={chapter.id}
              variants={item}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                router.push(
                  `/subjects/${params.subjectId}/${chapter.id}`
                )
              }
              className="
                relative overflow-hidden rounded-[30px]
                border border-white/15 bg-white/[0.08]
                backdrop-blur-3xl p-5 flex items-center justify-between
                transform-gpu will-change-transform
              "
            >
              <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 text-left">
                <h3 className="text-lg font-bold text-white">
                  {chapter.title}
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                  {chapter.questions} questions
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-violet-500/20 border border-violet-400/20 flex items-center justify-center">
                <ArrowRight size={18} className="text-violet-300" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}