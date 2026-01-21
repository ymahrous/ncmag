import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
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
  title: "News Call Magazine",
  description: "B-ringing the news",
  openGraph: {
    title: "News Call Magazine",
    description: "B-ringing the news",
    url: "https://ncmag.vercel.app",
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return(
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
};