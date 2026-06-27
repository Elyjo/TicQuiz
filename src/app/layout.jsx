import "./global.css";
import Shell from "@/components/Shell";
import ResponsiveNav from "@/components/ResponsiveNav";
import PwaInstallBanner from "@/components/PwaInstallBanner";

export const metadata = {
  title: "TicQuiz",
  description: "Application de révision destinée aux étudiants",
  manifest: "/manifest.json",
  icons: {
    icon: "/tic-logo.png",
    apple: "/tic-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full bg-[#020617] text-white">
        <PwaInstallBanner />
        <Shell>{children}</Shell>
        <ResponsiveNav />
      </body>
    </html>
  );
}
