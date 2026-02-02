export interface NewsDataArticle {
  title: string
  description?: string
  content?: string
  link: string
  image_url?: string
  source_id?: string
  pubDate?: string
  category?: string[]
}

export interface NewsDataResponse {
  status: string
  totalResults: number
  results: NewsDataArticle[]
}

export interface GNewsSource {
  name: string
  url: string
}

export interface GNewsArticle {
  title: string
  description: string
  content: string
  url: string
  image?: string
  publishedAt: string
  source: GNewsSource
}

export interface GNewsResponse {
  totalArticles: number
  articles: GNewsArticle[]
}

export interface NewsApiSource {
  id?: string | null
  name: string
}

export interface RawArticle {
  title: string
  description?: string
  content?: string
  source?: string | NewsApiSource
  category?: string
  publishedAt?: string
  url: string
  imageUrl?: string
}