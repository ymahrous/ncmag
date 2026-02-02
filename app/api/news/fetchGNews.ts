import { RawArticle, GNewsResponse } from '@/types/article';
// GNewsSource, GNewsArticle,

export async function fetchGNews(category: string): Promise<RawArticle[]> {
  const apiKey = process.env.GNEWS_API_KEY;
  if (!apiKey) {
    console.error('GNEWS_API_KEY is not defined');
    return [];
  }

  try {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${apiKey}`;
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }

    const data: GNewsResponse = await response.json();

    if (!data.articles) {
      console.error('Invalid GNews API response')
      return [];
    };

    const articles: RawArticle[] = data.articles.map((article) => ({
      title: article.title,
      description: article.description || '',
      content: article.content || '',
      source: article.source.name,
      category: category,
      publishedAt: article.publishedAt,
      url: article.url,
      imageUrl: article.image || ''
    }));

    return articles;
  } catch (error) {
    console.error('Error fetching from GNews:', error);
    return [];
  };
};