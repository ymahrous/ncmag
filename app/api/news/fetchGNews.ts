import { RawArticle, GNewsArticle, GNewsResponse } from '@/types/article';

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const GNEWS_API_URL = "https://gnews.io/api/v4/top-headlines";

export async function fetchGNewsArticles(): Promise<RawArticle[]> {
  if (!GNEWS_API_KEY) return [];

  const categories = ["general", "business", "technology", "sports", "world", "palestine"];
  const articles: RawArticle[] = [];

  for (const category of categories) {
    try {
      const res = await fetch(`${GNEWS_API_URL}?category=${category}&lang=en&max=10&apikey=${GNEWS_API_KEY}`)
      const data: GNewsResponse = await res.json();

      if (data.articles) {
        data.articles.forEach((item: GNewsArticle) => {
          if (!item.url || !item.title) return;

          articles.push({
            title: item.title,
            description: item.description,
            content: item.content,
            url: item.url,
            source: item.source?.name || "GNews",
            category: category === "general" ? "world" : category,
            publishedAt: item.publishedAt,
            imageUrl: item.image || undefined
          })
        })
      }
    } catch (err) {
      console.error(`Failed to fetch GNews ${category}:`, err);
    }
  };

  return articles;
};