"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, BarChart2, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0
        md:hidden
        z-40
        px-4 pb-3 pt-2
      "
    >
      <div
        className="
          max-w-md mx-auto

          md:bg-white/5
          backdrop-blur-8xl
          md:border md:border-white/10

          rounded-3xl

          px-3 py-2

          flex items-center justify-between

          shadow-lg
        "
      >
        {/* HOME */}
        <Link
          href="/home"
          className={`flex-1 py-2 rounded-2xl transition flex items-center justify-center ${
            isActive("/home")
              ? "bg-violet-500/15"
              : "hover:bg-white/5"
          }`}
        >
          <Home
            size={22}
            className={`transition-colors ${
              isActive("/home") ? "text-violet-300" : "text-white/50"
            }`}
          />
        </Link>

        {/* LEADERBOARD */}
       <Link
          href="/leaderboard"
          className={`flex-1 py-2 rounded-2xl transition flex items-center justify-center ${
            isActive("/leaderboard")
              ? "bg-amber-400/10"
              : "hover:bg-white/5"
          }`}
        >
          <Trophy
            size={22}
            className={`transition-colors ${
              isActive("/leaderboard") ? "text-amber-400" : "text-white/50"
            }`}
          />
        </Link>

        {/* STATS */}
        <Link
          href="/stats"
          className={`flex-1 py-2 rounded-2xl transition flex items-center justify-center ${
            isActive("/stats")
              ? "bg-cyan-400/10"
              : "hover:bg-white/5"
          }`}
        >
          <BarChart2
            size={22}
            className={`transition-colors ${
              isActive("/stats") ? "text-cyan-300" : "text-white/50"
            }`}
          />
        </Link>

        {/* PROFILE */}
          <Link
            href="/profile"
            className={`flex-1 py-2 rounded-2xl transition flex items-center justify-center ${
              isActive("/profile")
                ? "bg-pink-400/10"
                : "hover:bg-white/5"
            }`}
          >
            <User
              size={22}
              className={`transition-colors ${
                isActive("/profile") ? "text-pink-300" : "text-white/50"
              }`}
            />
          </Link>
      </div>
    </nav>
  );
}