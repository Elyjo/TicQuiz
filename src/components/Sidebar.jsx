"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, BarChart2, User } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");


  return (
    <aside
      className="
        hidden md:flex
        fixed left-4 top-1/2 -translate-y-1/2
        z-40

        flex-col gap-4

        p-3

        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        rounded-3xl

        shadow-lg
      "
    >
      <Link
        href="/home"
        className={`flex-1 py-2 px-4 rounded-2xl transition flex items-center justify-center ${
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
    </aside>
  );
}