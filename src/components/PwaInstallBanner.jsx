"use client";

import { useEffect, useState } from "react";

export default function PwaInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      alert(
        "🚀 Installer TicQuiz sur iPhone\n\n1️⃣ Ouvrez TicQuiz dans Safari.\n\n2️⃣ Touchez l'icône Partager (⬆️ dans un carré).\n\n3️⃣ Sélectionnez 'Ajouter à l'écran d'accueil'.\n\n4️⃣ Touchez 'Ajouter'.\n\n📚 Vous pourrez ensuite lancer TicQuiz comme une application normale depuis votre écran d'accueil.",
      );
      return;
    }

    if (!deferredPrompt) {
      alert("Installation non disponible pour le moment.");
      return;
    }

    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;

    if (result.outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  // On n'affiche rien si l'installation n'est pas possible
  if (!deferredPrompt && !isIOS) return null;

  return (
    <div
      onClick={handleInstallClick}
      className="fixed top-0 left-0 right-0 z-[9999] h-10 bg-violet-600 text-white overflow-hidden cursor-pointer border-b border-violet-400/30"
    >
      <div className="flex items-center h-full whitespace-nowrap animate-marquee">
        <span className="mx-8 font-medium">
          🚀 Cliquez ici pour installer TicQuiz sur votre appareil
        </span>

        <span className="mx-8 font-medium">
          📚 Révisez même hors connexion avec TicQuiz
        </span>

        <span className="mx-8 font-medium">
          ⚡ Installation rapide en un clic
        </span>

        <span className="mx-8 font-medium">
          🚀 Cliquez ici pour installer TicQuiz sur votre appareil
        </span>

        <span className="mx-8 font-medium">
          📚 Révisez même hors connexion avec TicQuiz
        </span>

        <span className="mx-8 font-medium">
          ⚡ Installation rapide en un clic
        </span>
      </div>
    </div>
  );
}
