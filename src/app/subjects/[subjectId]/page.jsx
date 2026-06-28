"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";

const colorClasses = {
  violet: {
    icon: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-400/20",
  },
};

export default function SubjectPage() {
  const params = useParams();
  const router = useRouter();

  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(true);

  const colors = colorClasses.violet;

  useEffect(() => {
    let parsed = null;

    const saved = localStorage.getItem("userPath");

    if (saved) {
      try {
        parsed = JSON.parse(saved);
      } catch (e) {
        parsed = null;
      }
    }

    // ❌ PLUS DE REDIRECTION FORCÉE
    // 👉 fallback UI au lieu de router.replace

    const loadChapters = async () => {
      try {
        if (
          !parsed?.dept ||
          !parsed?.level ||
          !parsed?.semester ||
          !params?.subjectId
        ) {
          setAvailable(false);
          setLoading(false);
          return;
        }

        const module = await import(
          `@/data/quizzes/${parsed.dept}/${parsed.level}/${parsed.semester}/${params.subjectId}/chapters`
        );

        setChapters(Object.values(module.Quiz || {}));
        setAvailable(true);
      } catch (err) {
        setAvailable(false);
      } finally {
        setLoading(false);
      }
    };

    loadChapters();
  }, [params?.subjectId]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.45,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

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

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80 pointer-events-none" />

      <section className="relative z-20 px-5 py-8 max-w-sm mx-auto">
        <div className="mt-2 text-center">
          <h1 className="text-3xl font-black text-white">Chapitres</h1>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="mt-24 text-center">
            <p className="text-slate-400">Chargement...</p>
          </div>
        )}

        {/* CHAPITRES DISPONIBLES */}
        {!loading && available && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-col gap-4"
          >
            {chapters.map((chapter) => (
              <motion.button
                key={chapter.id}
                variants={item}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  router.push(`/subjects/${params.subjectId}/${chapter.id}`)
                }
                className="relative w-full overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.08] backdrop-blur-3xl p-5 flex items-center justify-between"
              >
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white">
                    {chapter.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {chapter.questions?.length || 0} questions
                  </p>
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border ${colors.bg} ${colors.border}`}
                >
                  <ArrowRight size={18} className={colors.icon} />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* CHAPITRES NON DISPONIBLES */}
        {!loading && !available && (
          <div className="mt-24">
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
                <BookOpen size={28} className="text-violet-300" />
              </div>

              <h2 className="mt-10 text-xl font-bold text-white">
                Contenu bientôt disponible
              </h2>

              <p className="mt-3 text-slate-400 text-sm">
                Les quiz de cette matière arrivent prochainement.
              </p>
            </div>
          </div>
        )}
      </section>
    </motion.main>
  );
}
