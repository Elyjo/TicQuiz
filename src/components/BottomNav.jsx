"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, BarChart2, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-md mx-auto px-6 py-3 fixed bottom-4 left-0 right-0 z-40">
      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-3 flex items-center justify-between border border-white/10 shadow-lg">
        <Link href="/" className="flex-1 text-center py-2">
          <Home
            className={`mx-auto ${
              pathname === "/" ? "text-violet-300" : "text-white/50"
            }`}
          />
        </Link>

        <Link href="/leaderboard" className="flex-1 text-center py-2">
          <Trophy
            className={`mx-auto ${
              pathname === "/leaderboard"
                ? "text-amber-400"
                : "text-white/50"
            }`}
          />
        </Link>

        <Link href="/stats" className="flex-1 text-center py-2">
          <BarChart2
            className={`mx-auto ${
              pathname === "/stats"
                ? "text-cyan-300"
                : "text-white/50"
            }`}
          />
        </Link>

        <Link href="/profile" className="flex-1 text-center py-2">
          <User
            className={`mx-auto ${
              pathname === "/profile"
                ? "text-pink-300"
                : "text-white/50"
            }`}
          />
        </Link>
      </div>
    </nav>
  );
}