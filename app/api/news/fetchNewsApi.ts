import { RawArticle } from "@/types/article";
import { NewsApiArticle } from "@/app/lib/utils";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

export async function fetchNewsApiArticles(): Promise<RawArticle[]> {
  if (!NEWS_API_KEY) return [];

  const categories = ["politics", "business", "technology", "sports", "world", "palestine"];
  const articles: RawArticle[] = [];

  for (const category of categories) {
    try {
      const res = await fetch(
        `${NEWS_API_URL}?category=${category}&language=en&pageSize=10&apiKey=${NEWS_API_KEY}`
      )
      const data = await res.json()
      if (data.articles) {
        data.articles.forEach((item: NewsApiArticle) => {
          if (!item.url || !item.title) return;
          articles.push({
            title: item.title,
            description: item.description,
            content: item.content,
            url: item.url,
            source: item.source ?? "NewsAPI",
            category, // request category as default
            publishedAt: item.publishedAt,
            imageUrl: item.urlToImage || undefined
          })
        })
      }
    } catch (err) {
      console.error(`Failed to fetch NewsAPI ${category}:`, err);
    }
  }

  return articles;
}