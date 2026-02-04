"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { RawArticle } from "@/types/article";
import LeadStory from "@/app/components/LeadStory";
import ArticleRow from "@/app/components/ArticleRow";
import SectionBlock from "@/app/components/SectionBlock";

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
  const secondary = articles.slice(1, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center py-12 text-gray-500">Loading articles...</p>
        ) : articles.length === 0 ? (
          <p className="text-center py-12 text-gray-500">
            No articles found for this category.
          </p>
        ) : (
          <>
            {/* Lead story */}
            {lead && <LeadStory {...lead} />}

            {/* Secondary stories */}
            <div className="grid md:grid-cols-2 gap-6 my-8">
              {secondary.map((a) => (
                <ArticleRow key={a.url} {...a} />
              ))}
            </div>

            {/* Remaining articles */}
            {articles.length > 3 && (<SectionBlock title={`More in ${category}`} articles={articles.slice(3, 10)} />)}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}