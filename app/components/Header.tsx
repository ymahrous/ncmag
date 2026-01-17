"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="hidden sm:flex justify-between text-xs text-gray-500 px-4 py-1 max-w-6xl mx-auto">
        <span>{new Date().toLocaleDateString()}</span>
        <span className="italic">B-ringing the news</span>
      </div>
      <div className="text-center py-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight"><Link href="/" className="hover:none">NewsCast.</Link></h1>
      </div>
    </header>
  );
};