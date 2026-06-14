"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, BarChart2, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <nav className="w-full max-w-md mx-auto px-6 py-3 fixed bottom-4 left-0 right-0 z-40">
      <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-3 flex items-center justify-between border border-white/10 shadow-lg">
        {/* HOME */}
        <Link href="/home" className="flex-1 text-center py-2">
          <Home
            className={`mx-auto transition-colors ${
              isActive("/home") ? "text-violet-300" : "text-white/50"
            }`}
          />
        </Link>

        {/* LEADERBOARD */}
        <Link href="/leaderboard" className="flex-1 text-center py-2">
          <Trophy
            className={`mx-auto transition-colors ${
              isActive("/leaderboard") ? "text-amber-400" : "text-white/50"
            }`}
          />
        </Link>

        {/* STATS */}
        <Link href="/stats" className="flex-1 text-center py-2">
          <BarChart2
            className={`mx-auto transition-colors ${
              isActive("/stats") ? "text-cyan-300" : "text-white/50"
            }`}
          />
        </Link>

        {/* PROFILE */}
        <Link href="/profile" className="flex-1 text-center py-2">
          <User
            className={`mx-auto transition-colors ${
              isActive("/profile") ? "text-pink-300" : "text-white/50"
            }`}
          />
        </Link>
      </div>
    </nav>
  );
}
