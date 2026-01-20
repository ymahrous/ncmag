"use client";
import Link from "next/link";
import CategoryTabs from "./CategoryTabs";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const categories = ["world", "politics", "business", "technology", "sports"];
  const selected = pathname?.split("/")[1] || "";

  return (
    <header className="border-b border-gray-200">
      <div className="hidden sm:flex justify-between text-xs text-gray-500 px-4 py-1 max-w-6xl mx-auto">
        <span>{new Date().toLocaleDateString()}</span>
        <span className="italic">B-ringing the news</span>
      </div>
      <div className="text-center py-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
          <Link href="/" className="hover:none">News Call Magazine</Link>
        </h1>
      </div>
      <div><CategoryTabs categories={categories} selected={selected} onSelect={(cat) => window.location.href = `/${cat}`} /></div>
    </header>
  );
};