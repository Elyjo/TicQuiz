"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { d2a } from "@/data/curriculum/d2a";

export default function SubjectPage() {
  const params = useParams();
  const router = useRouter();

  const [chapters, setChapters] = useState([]);
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("userPath");
    if (!saved) return;

    const path = JSON.parse(saved);

    const subjects =
      d2a?.[path.level]?.[path.semester] || [];

    const subject = subjects.find(
      (s) => s.id === params.subjectId
    );

    if (!subject) {
      router.push("/subjects");
      return;
    }

    setSubjectName(subject.name);

    // 🔥 DIRECT CHAPTERS (PLUS DE REGISTRY)
    setChapters(subject.chapters || []);
  }, [params.subjectId]);

  return (
    <motion.main className="min-h-screen bg-[#020617]">
      <section className="max-w-sm mx-auto px-5 py-10">

        <h1 className="text-2xl font-black text-white text-center">
          {subjectName}
        </h1>

        <div className="mt-10 flex flex-col gap-4">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() =>
                router.push(
                  `/subjects/${params.subjectId}/${chapter.id}`
                )
              }
              className="p-5 rounded-2xl bg-white/10 border border-white/10 flex justify-between items-center"
            >
              <div>
                <p className="text-white font-bold">
                  {chapter.title}
                </p>

                <p className="text-slate-400 text-sm">
                  {chapter.quiz?.questions?.length || 0} questions
                </p>
              </div>

              <ArrowRight className="text-white/70" />
            </button>
          ))}
        </div>

      </section>
    </motion.main>
  );
}