"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RawArticle } from "@/types/article";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};

export default function ArticlePage() {
  const pathname = usePathname(); // e.g., /article/some-title
  const slug = pathname?.split("/").pop() ?? "";
  const [article, setArticle] = useState<RawArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      try {
        const res = await fetch("/api/articles/all", {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET!,
          },
        });
        const data = await res.json();
        if (data.success) {
          const found = data.articles.find((a: RawArticle) => slugify(a.title) === slug);
          setArticle(found ?? null);
        }
      } catch (err) {
        console.error("Failed to fetch article:", err);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [slug]);

  if (loading)
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow max-w-4xl mx-auto px-4 py-12 text-center text-gray-500">
          Loading article...
        </main>
        <Footer />
      </div>
    );

  if (!article)
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow max-w-4xl mx-auto px-4 py-12 text-center text-gray-500">
          Article not found.
        </main>
        <Footer />
      </div>
    );

  // Remove NewsAPI truncation
  const cleanContent = article.description || "No preview available.";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-4">{article.title}</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 mb-6">
          <span>{article.source?.toString()}</span>
          <span>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ""}</span>
        </div>
        {article.imageUrl && (<img src={article.imageUrl} alt={article.title} className="w-full h-auto mb-6 rounded shadow-sm" />)}
        <p className="mb-6 text-gray-700 leading-relaxed">{cleanContent}</p>

        {/* Original article link */}
        <Link href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Source Article</Link>
      </main>
      <Footer />
    </div>
  );
};