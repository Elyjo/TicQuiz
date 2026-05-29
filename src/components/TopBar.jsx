"use client";

import Link from "next/link";
import { User, Settings, Menu } from "lucide-react";

export default function TopBar() {
  return (
    <header className="w-full bg-transparent px-4 py-3 flex items-center justify-between z-30">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/6 backdrop-blur-md flex items-center justify-center border border-white/10">
          <Menu className="text-violet-300" />
        </div>
        <div className="text-white font-semibold">TIC QUIZ</div>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/profile" className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center border border-white/10">
          <User className="text-cyan-300" />
        </Link>
        <Link href="/settings" className="w-10 h-10 rounded-lg bg-white/6 flex items-center justify-center border border-white/10">
          <Settings className="text-violet-300" />
        </Link>
      </div>
    </header>
  );
}
