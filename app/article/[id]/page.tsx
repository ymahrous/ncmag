"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RawArticle } from "@/types/article";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";
import { getImageUrl } from "@/lib/images";
import ArticleBadge from "@/app/components/ArticleBadge";
import SourceCredibility from "@/app/components/SourceCredibility";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getArticleBadges(article: RawArticle): string[] {
  const badges: string[] = [];
  if (article.publishedAt) {
    const hours = (Date.now() - new Date(article.publishedAt).getTime()) / (1000 * 60 * 60);
    if (hours < 4) badges.push("breaking");
  }
  // badges.push("verified");
  return badges;
}

function ArticleLoadingSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-4xl mx-auto px-4 py-16">
        <div className="skeleton h-12 w-3/4 mb-4" />
        <div className="skeleton h-4 w-40 mb-8" />
        <div className="skeleton w-full h-96 rounded-lg mb-8" />
        <div className="space-y-3">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-3/4" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ArticlePage() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() ?? "";
  const [article, setArticle] = useState<RawArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<RawArticle[]>([]);
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

          if (found) {
            const related = data.articles
              .filter((a: RawArticle) =>
                a.category === found.category &&
                a.url !== found.url
              )
              .slice(0, 3);
            setRelatedArticles(related);
          }
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

  if (loading) return <ArticleLoadingSkeleton />;

  if (!article)
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-700 mb-4">Article not found</h2>
          <p className="text-gray-600 mb-6">Sorry, we could not find the article you are looking for.</p>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );

  const displayImageUrl = getImageUrl(article.imageUrl);
  const wordCount = (article.description || "").split(" ").length;
  const readingTime = Math.ceil(wordCount / 200);
  const badges = getArticleBadges(article);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-4xl mx-auto px-4 py-16">
        <article>
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.category && <ArticleBadge type="breaking" label={article.category.toUpperCase()} />}
            {badges.map((badge) => (
              <ArticleBadge key={badge} type={badge as any} />
            ))}
          </div>

          {/* Title */}
          <h1 className="text-5xl font-serif font-bold leading-tight mb-6">{article.title}</h1>

          {/* Article Metadata Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-8 border-b-2 border-gray-200 mb-10">
            <div className="flex items-center gap-3">
              <SourceCredibility source={article.source?.toString()} />
              <span className="font-medium text-gray-700">{article.source?.toString()}</span>
            </div>

            <span className="hidden sm:block text-gray-300">•</span>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>
                Published: <span className="font-medium">{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : "Unknown"}</span>
              </span>
              {readingTime > 0 && (
                <>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <img
            src={displayImageUrl}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg mb-12 bg-gray-100"
          />

          {/* Article Content */}
          <div className="prose prose-sm max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{article.description || "No preview available."}</p>
          </div>

          {/* Source Link */}
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mb-16 inline-block"
          >
            Read Full Article on {article.source?.toString()} →
          </Link>

          {/* Info Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-12">
            <h3 className="font-bold text-gray-900 mb-2">About this article</h3>
            <p className="text-sm text-gray-700">
              This article is aggregated from <strong>{article.source?.toString()}</strong>, a regularly updated news source.
              News Call Magazine provides curated content from various publishers worldwide.
            </p>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="border-t-2 border-gray-200 pt-12">
            <h2 className="text-2xl font-serif font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.url}
                  href={`/article/${slugify(rel.title)}`}
                  className="article-item p-4 border border-gray-200 rounded-lg"
                >
                  <img
                    src={getImageUrl(rel.imageUrl)}
                    alt={rel.title}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                  <h3 className="font-serif font-bold text-base leading-snug mb-2">{rel.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{rel.description}</p>
                  <div className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-200">
                    {rel.source?.toString()}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};
