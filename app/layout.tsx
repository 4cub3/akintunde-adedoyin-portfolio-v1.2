import type { Metadata } from "next";
import {TASA_Orbiter, Inter} from "next/font/google";
import "./globals.css";

const tasaOrbiter = TASA_Orbiter({
  variable:"--font-tasa-sans",
  subsets:["latin"],
  adjustFontFallback: false,
})
const inter = Inter({
  variable:"--font-inter-sans",
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Akintunde Adedoyin Afolabi portfolio",
  description: "Hi! I am Afolabi, a frontend/mobile engineer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tasaOrbiter.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
