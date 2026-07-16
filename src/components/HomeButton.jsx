"use client";

import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/home")}
      className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center"
    >
      <Home size={18} className="text-white/80" />
    </button>
  );
}
