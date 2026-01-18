"use client";

import { usePathname } from "next/navigation";
import { RawArticle } from "@/types/article";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
    .replace(/(^-|-$)/g, ""); // remove leading/trailing -
}

export default function ArticlePage() {
  const pathname = usePathname(); // e.g., /article/some-title
  const slug = pathname?.split("/").pop() ?? "";
  const [article, setArticle] = useState<RawArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      try {
        const res = await fetch("/api/articles/all");
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
        {/* Article header */}
        <h1 className="text-4xl font-serif font-bold mb-4">{article.title}</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 mb-6">
          <span>{article.source?.toString()}</span>
          <span>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ""}</span>
        </div>

        {/* Article image */}
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto mb-6 rounded shadow-sm"
          />
        )}

        {/* Article content */}
        <p className="mb-6 text-gray-700 leading-relaxed">{cleanContent}</p>

        {/* Original article link */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Read Original Article
        </a>
      </main>
      <Footer />
    </div>
  );
};