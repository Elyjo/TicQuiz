import "./global.css";
import Shell from "@/components/Shell";
import ResponsiveNav from "@/components/ResponsiveNav";

export const metadata = {
  title: "TicQuiz",
  description: "Application de révision destinée aux étudiants",
  icons: {
    icon: "/logobf.png",
    apple: "/logobf.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full bg-[#020617] text-white">
        <Shell>
          {children}
        </Shell>

        {/* NAVIGATION UNIFIÉE */}
        <ResponsiveNav />
      </body>
    </html>
  );
}