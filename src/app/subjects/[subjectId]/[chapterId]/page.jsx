"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";
import { quizRegistry } from "@/data/quizzes/registry";
import { useRouter } from "next/navigation";
import { encodeData } from "@/utils/secureStorage";

window.onerror = function () {
  return true;
};

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showInstall, setShowInstall] = useState(true);

  const isStandalone =
    typeof window !== "undefined" &&
    window.matchMedia("(display-mode: standalone)").matches;

  const shouldShowInstall = !isStandalone && (isIOS || deferredPrompt);

  if (typeof window === "undefined") return null;

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    if (isIOS) {
      alert(
        "🚀 Installer TicQuiz sur iPhone\n\n1️⃣ Ouvrez TicQuiz dans Safari.\n\n2️⃣ Touchez l'icône Partager (⬆️ dans un carré).\n\n3️⃣ Sélectionnez 'Ajouter à l'écran d'accueil'.\n\n4️⃣ Touchez 'Ajouter'.\n\n📚 Vous pourrez ensuite lancer TicQuiz comme une application normale depuis votre écran d'accueil.",
      );
      return;
    }

    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      setDeferredPrompt(null);
      setShowInstall(false);
    }
  };

  // ❌ GUARD SUPPRIMÉ (plus de redirect home)
  useEffect(() => {
    if (!params?.subjectId || !params?.chapterId) return;

    const saved = localStorage.getItem("userPath");

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);

      // juste lecture, PAS de redirect
      if (!parsed?.dept || !parsed?.level || !parsed?.semester) {
        return;
      }
    } catch (e) {
      return;
    }
  }, [params]);

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (!finished) return;

    window.history.pushState(null, "", window.location.href);

    const blockBack = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", blockBack);

    return () => {
      window.removeEventListener("popstate", blockBack);
    };
  }, [finished]);

  useEffect(() => {
    const subjectId = params?.subjectId;
    const chapterId = params?.chapterId;

    if (!subjectId || !chapterId) return;

    const subjectQuiz = quizRegistry?.[subjectId];
    const chapter = subjectQuiz?.[chapterId];

    if (chapter?.questions) {
      setQuestions(chapter.questions);
    }
  }, [params]);

  const subjectId = params?.subjectId;
  const chapterId = params?.chapterId;

  useEffect(() => {
    if (!finished || !questions.length || !subjectId || !chapterId) return;

    const percentage = Math.round((score / questions.length) * 100);

    let savedScores = {};

    try {
      const raw = localStorage.getItem("quizScores");

      if (raw) {
        savedScores = JSON.parse(raw);
      }
    } catch (e) {
      localStorage.removeItem("quizScores");
      savedScores = {};
    }

    savedScores[subjectId] = {
      ...(savedScores[subjectId] || {}),
      [chapterId]: {
        score,
        total: questions.length,
        percentage,
        time: seconds,
        completedAt: Date.now(),
      },
    };

    localStorage.setItem("quizScores", encodeData(savedScores));
  }, [finished, score, questions, seconds, subjectId, chapterId]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (finished) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [finished]);

  if (!questions.length) {
    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center">
        <p className="text-slate-400"></p>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const validateAnswer = () => {
    if (selected === null) return;

    if (selected === question.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 >= questions.length) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelected(null);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    const getMessage = () => {
      if (percentage >= 90) return "Performance exceptionnelle 🚀";
      if (percentage >= 75) return "Excellent travail ⭐";
      if (percentage >= 50) return "Bon progrès 💪";
      if (percentage >= 25) return "Continue tes efforts 📚";
      return "Ne lâche rien, tu vas progresser 🌱";
    };

    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        {shouldShowInstall && (
          <div
            onClick={installApp}
            className="fixed top-0 left-0 right-0 z-[9999] h-10 bg-violet-600 text-white overflow-hidden cursor-pointer border-b border-violet-400/30"
          >
            <div className="flex items-center h-full whitespace-nowrap animate-marquee">
              <span className="mx-8 font-medium">
                🚀 Installer TicQuiz maintenant
              </span>
              <span className="mx-8 font-medium">
                📚 Réviser hors connexion
              </span>
              <span className="mx-8 font-medium">
                ⚡ App rapide et gratuite
              </span>
            </div>
          </div>
        )}

        {/* RESTE DU DESIGN INCHANGÉ */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <section className="relative z-20 min-h-screen flex items-center justify-center px-5">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm rounded-[34px] bg-none p-8"
          >
            <h1 className="mt-8 text-center text-3xl font-black text-white">
              Quiz terminé
            </h1>

            <p className="mt-3 text-center text-slate-400">
              {score} / {questions.length} bonnes réponses
            </p>

            <p className="mt-6 text-center text-white font-medium">
              {getMessage()}
            </p>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Questions</span>
                <span className="text-white font-semibold">
                  {questions.length}
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-slate-400">Bonnes réponses</span>
                <span className="text-violet-300 font-semibold">{score}</span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-slate-400">Taux de réussite</span>
                <span className="text-white font-semibold">{percentage}%</span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-slate-400">Temps</span>
                <span className="text-white font-semibold">{formatTime()}</span>
              </div>
            </div>

            <button
              onClick={restartQuiz}
              className="mt-12 w-full h-14 rounded-2xl bg-violet-600 text-white font-bold"
            >
              Rejouer le quiz
            </button>

            <button
              onClick={() => router.replace(`/subjects/${params.subjectId}`)}
              className="mt-12 w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-medium"
            >
              Retour aux chapitres
            </button>
          </motion.div>
        </section>
      </motion.main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      {/* DESIGN INCHANGÉ */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <section className="relative z-20 max-w-sm mx-auto px-5 py-8">
        {/* RESTE IDENTIQUE */}
        <div>
          <p className="text-slate-400 text-sm">Temps</p>
          <h2 className="text-violet-300 font-bold">{formatTime()}</h2>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-400 text-sm">Question</p>
            <h2 className="text-white font-black text-xl">
              {currentQuestion + 1} / {questions.length}
            </h2>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Score</p>
            <h2 className="text-violet-300 font-bold">{score}</h2>
          </div>
        </div>

        <div className="h-3 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          />
        </div>

        <motion.div key={question.id} className="mt-10">
          <h1 className="text-2xl font-black text-white leading-snug">
            {question.question}
          </h1>
        </motion.div>

        <div className="mt-12 flex flex-col gap-4">
          {question.options.map((option, index) => {
            const isSelected = selected === index;

            return (
              <motion.button
                key={index}
                onClick={() => setSelected(index)}
                className={`p-5 rounded-[28px] border text-left transition-all
    ${
      isSelected
        ? "border-violet-400 bg-violet-500/10"
        : "border-white/10 bg-white/[0.08]"
    }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{option}</span>

                  {isSelected && (
                    <CheckCircle2
                      size={20}
                      className="text-violet-300 flex-shrink-0"
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        <button
          onClick={validateAnswer}
          disabled={selected === null}
          className="mt-10 w-full h-14 rounded-2xl bg-violet-600 text-white font-bold disabled:opacity-40"
        >
          Valider ma réponse
        </button>
      </section>
    </motion.main>
  );
}
