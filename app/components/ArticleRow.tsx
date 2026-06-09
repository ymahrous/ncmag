"use client";
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
  return badges;
}

export default function ArticleRow({
  title,
  description,
  url,
  source,
  imageUrl,
  publishedAt,
  category,
}: RawArticle) {
  const slug = slugify(title);
  const displayImageUrl = getImageUrl(imageUrl);
  const badges = getArticleBadges({title, description, url, source, imageUrl, publishedAt, category});
  const wordCount = (description || "").split(" ").length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div
      className="article-item flex gap-4 py-5 px-3 -mx-3 border-b transition cursor-pointer"
    >
      <div className="flex-1 min-w-0">
        {/* Badges */}
        <div className="flex flex-wrap gap-1 mb-2">
          {badges.map((badge) => (
            <ArticleBadge key={badge} type={badge as any} />
          ))}
        </div>

        <Link href={`/article/${slug}`} className="interactive-link block">
          <h3 className="font-serif text-lg font-semibold leading-snug mt-0 mb-2">
            {title}
          </h3>
        </Link>
        {description && (
          <p className="text-sm text-gray-600 mt-1 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {/* Metadata */}
        <div className="text-xs text-gray-500 mt-3 flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <SourceCredibility source={source?.toString()} />
          </div>
          <span>·</span>
          <span className="font-medium">{source?.toString()}</span>
          <span>·</span>
          <span>{publishedAt ? new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : ""}</span>
          {readingTime > 0 && (
            <>
              <span>·</span>
              <span>{readingTime}m</span>
            </>
          )}
        </div>
      </div>

      <img
        src={displayImageUrl}
        className="w-28 h-20 object-cover hidden sm:block rounded-md bg-gray-100 flex-shrink-0 hover:brightness-90 transition-all duration-300"
        alt={title}
      />
    </div>
  );
}