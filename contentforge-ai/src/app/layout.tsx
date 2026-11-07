import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ContentForge AI — Turn One Video Into 50 Viral Shorts",
  description:
    "ContentForge AI uses AI to find your most viral moments, auto-reframe them to 9:16, burn in captions, and export ready-to-post shorts in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
