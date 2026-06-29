"use client";

import { usePathname } from "next/navigation";
import AppBottomNav from "@/components/AppBottomNav";
import Sidebar from "@/components/Sidebar";

export default function ResponsiveNav() {
  const pathname = usePathname();

  const hiddenRoutes = ["/", "/username", "/department", "/login", "/levels"];

  const hideNav = hiddenRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  if (hideNav) return null;

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden">
        <AppBottomNav />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
    </>
  );
}
