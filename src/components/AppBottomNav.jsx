"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";

export default function AppBottomNav() {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/",
    "/login",
    "/department",
    "/levels",
    "/subjects",
    "/quiz",
    "/result",
  ];

  const hideNav = hiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (hideNav) return null;

  return <BottomNav />;
}