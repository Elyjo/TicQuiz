import "./global.css";
import Shell from "@/components/Shell";
import ResponsiveNav from "@/components/ResponsiveNav";

export const metadata = {
  title: "TicQuiz",
  description: "Application de révision destinée aux étudiants",
  manifest: "/manifest.json",
  icons: {
    icon: "/tic-logo.png",
    apple: "/tic-logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 0.8,
  maximumScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full bg-[#020617] text-white">
        
        <Shell>{children}</Shell>
        <ResponsiveNav />
      </body>
    </html>
  );
}
