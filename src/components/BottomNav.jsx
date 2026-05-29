"use client";

import Link from "next/link";
import { Home, Trophy, BarChart2, User } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="w-full max-w-md mx-auto px-6 py-3 bg-transparent fixed bottom-4 left-0 right-0 z-40">
      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-3 flex items-center justify-between border border-white/10 shadow-lg">
        <Link href="/" className="flex-1 text-center py-2">
          <Home className="mx-auto text-violet-300" />
        </Link>
        <Link href="/leaderboard" className="flex-1 text-center py-2">
          <Trophy className="mx-auto text-amber-400" />
        </Link>
        <Link href="/stats" className="flex-1 text-center py-2">
          <BarChart2 className="mx-auto text-cyan-300" />
        </Link>
        <Link href="/profile" className="flex-1 text-center py-2">
          <User className="mx-auto text-pink-300" />
        </Link>
      </div>
    </nav>
  );
}
