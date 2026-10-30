import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akintunde Adedoyin Afolabi | Senior Frontend Engineer",
  description:
    "Senior frontend engineer who ships production-grade web and mobile products for fintech, healthcare, and logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
