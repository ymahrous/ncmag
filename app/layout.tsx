import "./globals.css";
import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";

export const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "NewsCast.",
  description: "B-ringing the news",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (<html lang="en"><body className={`${serif.variable} ${sans.variable} antialiased`}>{children}</body></html>);
};