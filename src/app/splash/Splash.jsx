"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      
      <img
        src="/elyjo.png"
        alt="Elyjo splash"
        className="h-full w-full object-cover animate-zoomFade"
      />

    </div>
  );
}