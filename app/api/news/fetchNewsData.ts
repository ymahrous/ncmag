import { RawArticle, NewsDataResponse } from '@/types/article';

export async function fetchNewsData(category: string): Promise<RawArticle[]> {
  const apiKey = process.env.NEWSDATA_API_KEY;
  if (!apiKey) {
    console.error('NEWSDATA_API_KEY is not defined')
    return [];
  };

  try {
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}&language=en`;
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`NewsData API error: ${response.status}`);
    }

    const data: NewsDataResponse = await response.json()
    if (data.status !== 'success' || !data.results) {
      console.error('Invalid NewsData API response');
      return [];
    }

    const articles: RawArticle[] = data.results.map((article) => ({
      title: article.title,
      description: article.description || '',
      content: article.content || '',
      source: article.source_id || 'Unknown',
      category: article.category?.[0] || category,
      publishedAt: article.pubDate || new Date().toISOString(),
      url: article.link,
      imageUrl: article.image_url || ''
    }));

    return articles;
  } catch (error) {
    console.error('Error fetching from NewsData:', error);
    return [];
  };
};