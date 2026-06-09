"use client";
import Footer from "./components/Footer";
import Header from "@/app/components/Header";
import { RawArticle } from "@/types/article";
import LeadStory from "./components/LeadStory";
import ArticleRow from "./components/ArticleRow";
import LeadStorySkeleton from "./components/LeadStorySkeleton";
import ArticleRowSkeleton from "./components/ArticleRowSkeleton";
import EditorialPicks from "./components/EditorialPicks";
import { useEffect, useState, useMemo } from "react";

 const random_num = Math.floor(Math.random()*10);

export default function HomePage() {
  const [selected, setSelected] = useState("world");
  const [articles, setArticles] = useState<RawArticle[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      const res = await fetch("/api/articles/all", {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_SECRET!,
        },
      });
      const data = await res.json();
      if (data.success) setArticles(data.articles);
      setLoading(false);
    }
    fetchArticles();
  }, []);
  const filtered = useMemo(() => {
    if (selected === "world") return articles;
    return articles.filter(a => a.category === selected);
  }, [articles, selected]);
  const lead = filtered[random_num];
  const secondary = filtered.slice(1, 4);

  return (
    <div >
      <Header />
      <main className="grow nyt-container">
        {loading ? (
          <>
            <section className="grid lg:grid-cols-3 gap-8 mt-6">
              <div className="lg:col-span-2">
                <LeadStorySkeleton />
              </div>
              <aside className="space-y-0 border-l border-gray-200 pl-6">
                <h3 className="text-sm font-semibold uppercase text-gray-600 mb-4">Latest</h3>
                {[...Array(3)].map((_, i) => (
                  <ArticleRowSkeleton key={i} />
                ))}
              </aside>
            </section>
            <section className="mt-12">
              <div className="border-t-2 border-gray-200 pt-8">
                <h2 className="nyt-h2 capitalize mb-6 font-serif text-2xl">
                  {selected === "world" ? "Latest News" : selected}
                </h2>
                <div className="grid md:grid-cols-2 gap-x-8">
                  {[...Array(6)].map((_, i) => (
                    <ArticleRowSkeleton key={i} />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="grid lg:grid-cols-3 gap-10 mt-8">

              <div className="lg:col-span-2">
                {lead && <LeadStory {...lead} />}
              </div>

              <aside className="space-y-0 border-l border-gray-300 pl-8">
                <h3 className="text-xs font-bold uppercase text-gray-500 mb-6 tracking-widest">Latest Articles</h3>
                {secondary.map(a => (
                  <ArticleRow key={a.url} {...a} />
                ))}
              </aside>
            </section>

            <section className="mt-16">
              <div className="border-t-2 border-gray-300 pt-10">
                <h2 className="nyt-h2 capitalize mb-8 font-serif text-2xl">
                  {selected === "world" ? "Latest News" : selected}
                </h2>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
                  {filtered.slice(4, 10).map(a => (
                    <ArticleRow key={a.url} {...a} />
                  ))}
                </div>
              </div>
            </section>

            {/* Editor's Picks Section */}
            {selected === "world" && (
              <EditorialPicks
                articles={filtered.slice(0, 20)}
                title="Editor's Picks"
                subtitle="Our top stories this week"
              />
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}