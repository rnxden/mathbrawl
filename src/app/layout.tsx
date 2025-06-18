import type { Metadata } from "next";
import { Noto_Sans_Math } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_Math({
  variable: "--font-noto-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Math Brawl - Fight with your head, not your hands.",
  description: "Fight with your head, not your hands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
