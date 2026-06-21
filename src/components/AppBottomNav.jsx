"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";

export default function AppBottomNav() {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/",
    "/username",
    "/department",
    "/login",
    "/levels",
    "/subjects",
  ];

  const hideNav = hiddenRoutes.some((route) =>
    pathname === route || pathname.startsWith(route + "/")
  );

  if (hideNav) return null;

  return <BottomNav />;
}