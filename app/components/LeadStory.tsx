import Link from "next/link";
import { RawArticle } from "@/types/article";
import { getImageUrl } from "@/lib/images";
import ArticleBadge from "./ArticleBadge";
import SourceCredibility from "./SourceCredibility";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getArticleBadges(article: RawArticle): string[] {
  const badges: string[] = [];

  if (article.publishedAt) {
    const hours = (Date.now() - new Date(article.publishedAt).getTime()) / (1000 * 60 * 60);
    if (hours < 4) badges.push("breaking");
  }

  // if (Math.random() > 0.7) badges.push("verified");
  // if (Math.random() > 0.8) badges.push("trending");

  return badges;
}

export default function LeadStory({title, description, url, source, imageUrl, publishedAt, category}: RawArticle) {
  const slug = slugify(title);
  const displayImageUrl = getImageUrl(imageUrl);
  const badges = getArticleBadges({title, description, url, source, imageUrl, publishedAt, category});
  const wordCount = (description || "").split(" ").length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <article
      className="article-item grid md:grid-cols-1 gap-8 pb-10 mb-10 border-b-2 border-gray-200 -mx-3 px-3 py-4 cursor-pointer"
    >
      <>
        <img src={displayImageUrl} alt={title} className="w-full h-72 object-cover rounded-md bg-gray-100 hover:brightness-95 transition-all duration-300" />
        <div>
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {category && <ArticleBadge type="breaking" label={category.toUpperCase()} />}
            {badges.map((badge) => (
              <ArticleBadge key={badge} type={badge as any} />
            ))}
          </div>

          <Link href={`/article/${slug}`} className="cursor-pointer transition hover:underline block">
            <h1 className="text-5xl font-serif font-bold leading-tight mt-4 mb-4">{title}</h1>
          </Link>
          {description && <p className="mt-5 text-lg text-gray-700 leading-relaxed">{description}</p>}

          {/* Metadata */}
          <div className="mt-8 space-y-3 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <SourceCredibility source={source?.toString()} />
                <span className="text-gray-600 font-medium">{source?.toString()}</span>
              </div>
              {readingTime > 0 && (
                <span className="text-gray-600">
                  {readingTime} min read
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500">
              <span>Published: {publishedAt ? new Date(publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Unknown'}</span>
            </div>
          </div>
        </div>
      </>
    </article>
  );
};