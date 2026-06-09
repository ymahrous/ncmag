"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { RawArticle } from "@/types/article";
import LeadStory from "@/app/components/LeadStory";
import LeadStorySkeleton from "@/app/components/LeadStorySkeleton";
import ArticleRow from "@/app/components/ArticleRow";
import ArticleRowSkeleton from "@/app/components/ArticleRowSkeleton";

export default function CategoryPage() {
  const params = useParams();
  const category = params.slug;
  const [articles, setArticles] = useState<RawArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const res = await fetch("/api/articles/all", {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_SECRET!,
          },
        });
        const data = await res.json();
        if (data.success) {
          const normalized = data.articles.filter((a: RawArticle) => a.category?.toLowerCase() === category).map((a: RawArticle) => ({...a, source: typeof a.source === "string"? a.source: a.source?.name ?? "Unknown", category: a.category ?? "Uncategorized"}));
          setArticles(normalized);
        } else {
          setArticles([]);
        }
      } catch (err) {
        console.error("Unable to fetch category articles:", err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [category]);

  const lead = articles[0];
  const secondary = articles.slice(1, 4);
  const remaining = articles.slice(4);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-6xl mx-auto px-4 py-16">
        {/* Category Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-serif font-bold capitalize mb-4">{category}</h1>
          <p className="text-lg text-gray-600">{articles.length} articles</p>
        </section>

        {loading ? (
          <>
            <section className="grid lg:grid-cols-3 gap-10 mb-16">
              <div className="lg:col-span-2">
                <LeadStorySkeleton />
              </div>
              <aside className="space-y-0 border-l border-gray-200 pl-8">
                <h3 className="text-xs font-bold uppercase text-gray-500 mb-6 tracking-widest">Latest</h3>
                {[...Array(3)].map((_, i) => (
                  <ArticleRowSkeleton key={i} />
                ))}
              </aside>
            </section>
            <section className="border-t-2 border-gray-200 pt-8">
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
                {[...Array(6)].map((_, i) => (
                  <ArticleRowSkeleton key={i} />
                ))}
              </div>
            </section>
          </>
        ) : articles.length === 0 ? (
          <section className="text-center py-16">
            <h2 className="text-2xl font-serif font-bold text-gray-700 mb-4">No articles found</h2>
            <p className="text-gray-600 mb-8">Sorry, we don't have any articles in the {category} category yet.</p>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </section>
        ) : (
          <>
            {/* Lead story */}
            <section className="grid lg:grid-cols-3 gap-10 mb-16">
              <div className="lg:col-span-2">
                {lead && <LeadStory {...lead} />}
              </div>

              {/* Secondary stories */}
              <aside className="space-y-0 border-l border-gray-300 pl-8">
                <h3 className="text-xs font-bold uppercase text-gray-500 mb-6 tracking-widest">Latest</h3>
                {secondary.map((a) => (
                  <ArticleRow key={a.url} {...a} />
                ))}
              </aside>
            </section>

            {/* Remaining articles */}
            {remaining.length > 0 && (
              <section className="border-t-2 border-gray-200 pt-12">
                <h2 className="text-2xl font-serif font-bold mb-8">More {category}</h2>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
                  {remaining.map((a) => (
                    <ArticleRow key={a.url} {...a} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}