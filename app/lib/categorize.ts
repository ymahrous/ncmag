import { Category } from "@prisma/client";
import { RawArticle } from "@/types/article";

export function categorize(article: RawArticle): Category {
  const text = `${article.title} ${article.description ?? ""}`.toLowerCase();

  if (article.category) {
    if (article.category.includes("politic")) return Category.politics;
    if (article.category.includes("business")) return Category.business;
    if (article.category.includes("tech")) return Category.technology;
    if (article.category.includes("sport")) return Category.sports;
    if (article.category.includes("world")) return Category.world;
    if (article.category.includes("palestine")) return Category.palestine;
  }

  if (/world|international|global|united nations/.test(text)) return Category.world;
  if (/election|government|policy|parliament|president/.test(text)) return Category.politics;
  if (/palestine|gaza|west bank|international|global|united nations/.test(text)) return Category.palestine;
  if (/market|stocks|economy|finance|crypto|bank/.test(text)) return Category.business;
  if (/ai|software|startup|technology|cyber|iphone/.test(text)) return Category.technology;
  if (/football|soccer|nba|fifa|tennis|cricket/.test(text)) return Category.sports;

  return Category.world;
};