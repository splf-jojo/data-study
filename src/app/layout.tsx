// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";

// Глобальная тема Prism (VSCode Light+) — импортим здесь, чтобы Next не ругался на global CSS

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "im2col — визуально",
  description:
    "Страница с современным бело-серым UI и подсветкой кода как в VSCode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${fira.variable}`}>
      <body className="bg-gray-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
