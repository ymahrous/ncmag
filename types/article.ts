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