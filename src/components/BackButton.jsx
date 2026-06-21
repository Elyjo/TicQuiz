"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ fallback = "/" }) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Retour"
      className="
        fixed top-4 left-4
        sm:top-5 sm:left-5

        md:hidden

        z-50

        w-10 h-10 sm:w-11 sm:h-11

        rounded-full
        bg-white/5
        border border-white/10
        backdrop-blur-xl

        flex items-center justify-center

        active:scale-95
        hover:bg-white/10

        transition
      "
    >
      <ArrowLeft size={18} className="text-white/80" />
    </button>
  );
}