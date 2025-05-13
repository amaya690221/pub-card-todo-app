// /app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideMenu from "./components/SideMenu/SideMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "カード型TODOアプリ",
  description: "Next.js + MondoDBによるカード型TODOアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50`}
      >
        <div className="flex flex-col sm:flex-row h-svh mx-auto max-w-[1400px]">
          <SideMenu />
          <main className=" flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
