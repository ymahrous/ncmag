import Link from "next/link";
import { RawArticle } from "@/types/article";
import ArticleRow from "./ArticleRow";

interface EditorialPicksProps {
  articles: RawArticle[];
  title?: string;
  subtitle?: string;
}

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function EditorialPicks({
  articles,
  title = "Editor's Picks",
  subtitle = "Carefully curated stories we think you should read"
}: EditorialPicksProps) {
  if (articles.length === 0) return null;

  return (
    <section className="border-t-2 border-gray-200 border-b-2 py-12 my-12">
      <div className="mb-10">
        <div className="inline-block bg-black text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
          ✓ Curated
        </div>
        <h2 className="text-3xl font-serif font-bold mb-2">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>

      <div className="space-y-0">
        {articles.slice(0, 3).map((article, index) => (
          <div key={article.url} className="flex gap-4 items-center py-4 border-b border-gray-200 last:border-b-0">
            {/* Number */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="font-serif font-bold text-lg text-gray-700">{index + 1}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <Link href={`/article/${slugify(article.title)}`} className="group">
                <h3 className="font-serif font-bold text-lg leading-snug hover:underline transition">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                {article.description}
              </p>
              <div className="text-xs text-gray-500 mt-2">
                {article.source?.toString()} • {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
