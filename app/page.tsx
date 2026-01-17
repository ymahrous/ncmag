"use client";
import Footer from "./components/Footer";
import Header from "@/app/components/Header";
import { RawArticle } from "@/types/article";
import LeadStory from "./components/LeadStory";
import ArticleRow from "./components/ArticleRow";
import { useEffect, useState, useMemo } from "react";

export default function HomePage() {
  const [selected, setSelected] = useState("world");
  const [articles, setArticles] = useState<RawArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      const res = await fetch("/api/articles/all");
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

  const lead = filtered[0];
  const secondary = filtered.slice(1, 4);

  return (
    <div >
      <Header />
      <main className="grow nyt-container">
        {loading ? (<p className="text-center py-12 text-gray-500">Loading…</p>): (
          <>
            {/* TOP GRID */}
            <section className="grid lg:grid-cols-3 gap-8 mt-6">
              {/* LEAD */}
              <div className="lg:col-span-2">
                {lead && <LeadStory {...lead} />}
              </div>
              {/* SECONDARY */}
              <aside className="space-y-4">
                {secondary.map(a => (
                  <ArticleRow key={a.url} {...a} />
                ))}
              </aside>
            </section>
            {/* CATEGORY FEED */}
            <div className="nyt-divider" />
            <section>
              <h2 className="nyt-h2 capitalize mb-4">
                {selected === "world" ? "Latest News" : selected}
              </h2>
              <div className="grid md:grid-cols-2 gap-x-8">
                {filtered.slice(4, 10).map(a => (
                  <ArticleRow key={a.url} {...a} />
                ))}
              </div>
            </section>
            {/* FIXED SECTIONS */}
            {/* <SectionBlock title="Politics" articles={articles.filter(a => a.category === "politics")} />
            <SectionBlock title="Business" articles={articles.filter(a => a.category === "business")} />
            <SectionBlock title="Technology" articles={articles.filter(a => a.category === "technology")} />
            <SectionBlock title="Sports" articles={articles.filter(a => a.category === "sports")} /> */}
          </>
        )}

      </main>
      <Footer />
    </div>
  );
}