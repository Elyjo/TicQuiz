"use client";

import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function ResponsiveNav() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile ? <BottomNav /> : <Sidebar />;
}