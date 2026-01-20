import { categorize } from "./categorize";
import { NewsApiSource, RawArticle } from "@/types/article";

// normalize the source
export function normalizeSource(
  source: RawArticle["source"]
): string {
  if (typeof source === "string") {
    return source.trim()
  }

  if (source && typeof source === "object") {
    return source.name
  }

  return "Unknown"
}

// normalize the article
export function normalizeArticle(article: RawArticle) {
  return {
    title: article.title.trim(),
    description: article.description ?? null,
    content: article.content ?? null,
    url: article.url,
    source: normalizeSource(article.source),
    category: categorize(article),
    publishedAt: article.publishedAt
      ? new Date(article.publishedAt)
      : new Date(),
    imageUrl: article.imageUrl ?? null,
  }
}

// main type article from NewsAPI.org
export type NewsApiArticle = {
  title: string
    description?: string
    content?: string
    source?: string | NewsApiSource
    category?: string
    publishedAt?: string
    url: string
    urlToImage?: string
};