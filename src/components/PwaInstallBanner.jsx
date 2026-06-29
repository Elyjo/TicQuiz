"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PwaInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const pathname = usePathname();
  const [showInstallModal, setShowInstallModal] = useState(false);

  const hiddenRoutes = [
    "/",
    "/department",
    "/levels",
    "/subjects",
    "/home",
    "/stats",
    "/profile",
    "/leaderboard",
  ];

  const hideBanner = hiddenRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  if (hideBanner) return null;

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowInstallModal(true);
      return;
    }

    if (isAndroid && !deferredPrompt) {
      setShowInstallModal(true);
      return;
    }

    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;

    if (result.outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  return (
    <div
      onClick={handleInstallClick}
      className="fixed top-0 left-0 right-0 z-[9999] h-10 bg-violet-600 text-white overflow-hidden cursor-pointer border-b border-violet-400/30"
    >
      <div className="flex items-center h-full whitespace-nowrap animate-marquee">
        <span className="mx-8 font-medium">
          📱 Ajouter TicQuiz à l'écran d'accueil
        </span>

        <span className="mx-8 font-medium">
          ⚡ Ouvrir TicQuiz comme une application
        </span>

        <span className="mx-8 font-medium">
          📚 Réviser vos cours plus rapidement
        </span>

        <span className="mx-8 font-medium">
          📱 Ajouter TicQuiz à l'écran d'écran d'accueil
        </span>

        <span className="mx-8 font-medium">
          ⚡ Ouvrir TicQuiz comme une application
        </span>

        <span className="mx-8 font-medium">
          📚 Réviser vos cours plus rapidement
        </span>
      </div>
      {showInstallModal && (
        <div
          className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center px-5"
          onClick={() => setShowInstallModal(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#35136d38] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-white">
              Ajouter TicQuiz à l'écran d'accueil
            </h2>

            <div className="mt-5 text-slate-300 text-sm leading-7">
              {isIOS ? (
                <>
                  <p>1️⃣ Touchez le bouton Partager ⬆️</p>
                  <p>2️⃣ Sélectionnez "Ajouter à l'écran d'accueil"</p>
                  <p>3️⃣ Touchez "Créer un raccourci"</p>
                  <p>4️⃣ Touchez "Ajouter"</p>
                </>
              ) : ( 
                <>
                  <p>1️⃣ Ouvrez le menu Chrome ⋮</p>
                  <p>2️⃣ Sélectionnez "Ajouter à l'écran d'accueil"</p>
                  <p>3️⃣ Choisissez "Créer un raccourci"</p>
                  <p>4️⃣ Touchez "Ajouter"</p>
                </>
              )}
            </div>

            <button
              onClick={(e) => {
                setShowInstallModal(false);
                e.stopPropagation();
              }}
              className="mt-6 w-full h-12 rounded-2xl bg-violet-600 text-white font-semibold cursor-pointer"
            >
              Compris
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
