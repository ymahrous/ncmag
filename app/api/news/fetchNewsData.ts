import { RawArticle, NewsDataArticle, NewsDataResponse } from '@/types/article';

const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY;
const NEWSDATA_API_URL = "https://newsdata.io/api/1/news";

export async function fetchNewsDataArticles(): Promise<RawArticle[]> {
  if (!NEWSDATA_API_KEY) return [];

  const categories = ["politics", "business", "technology", "sports", "world", "palestine"];
  const articles: RawArticle[] = [];

  for (const category of categories) {
    try {
      const res = await fetch(`${NEWSDATA_API_URL}?apikey=${NEWSDATA_API_KEY}&category=${category}&language=en&size=10`);
      const data: NewsDataResponse = await res.json();

      if (data.status === 'success' && data.results) {
        data.results.forEach((item: NewsDataArticle) => {
          if (!item.link || !item.title) return;

          articles.push({
            title: item.title,
            description: item.description,
            content: item.content,
            url: item.link,
            source: item.source_id || "NewsData",
            category,
            publishedAt: item.pubDate,
            imageUrl: item.image_url || undefined
          })
        })
      }
    } catch (err) {
      console.error(`Failed to fetch NewsData ${category}:`, err);
    };
  };

  return articles;
};