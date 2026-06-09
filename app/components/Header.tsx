"use client";
import Link from "next/link";
import CategoryTabs from "./CategoryTabs";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const categories = ["world", "politics", "business", "technology", "sports"];
  const selected = pathname?.split("/")[1] || "";

  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Masthead Info */}
      <div className="hidden sm:flex justify-between items-center text-xs text-gray-500 px-4 py-2 max-w-6xl mx-auto font-medium border-b border-gray-100">
        <div className="flex items-center gap-4">
          <span>Independent News Aggregation</span>
          <span>•</span>
          <span>Curated News Worldwide</span>
        </div>
        <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
      </div>

      {/* Main Header */}
      <div className="text-center py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl font-bold tracking-tight mb-2">
            <Link href="/" className="hover:none">News Call Magazine</Link>
          </h1>
          <p className="text-sm text-gray-600 italic">Bringing the news with integrity and clarity</p>
        </div>
      </div>

      {/* Navigation */}
      <div><CategoryTabs categories={categories} selected={selected} onSelect={(cat) => window.location.href = `/${cat}`} /></div>
    </header>
  );
};