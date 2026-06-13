"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ fallback = "/" }) {
  const router = useRouter();

  const handleBack = () => {
    // si historique existe → back
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-6 left-6 z-50 w-11 h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center active:scale-95 transition"
      aria-label="Retour"
    >
      <ArrowLeft size={18} className="text-white/80" />
    </button>
  );
}