// app/api/news/aggregate.ts
import Parser from "rss-parser";
import { prisma } from "@/app/lib/prisma";
import { RawArticle } from "@/types/article";
import { categorize } from "@/app/lib/categorize";
import { NextRequest, NextResponse } from "next/server";

const API_SECRET = process.env.ARTICLES_API_SECRET;

function normalizeSource(
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

function normalizeArticle(article: RawArticle) {
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

const rssFeeds: Record<string, { name: string; url: string }[]> = {
  politics: [
    { name: "Reuters Politics", url: "https://www.reuters.com/rssFeed/politicsNews" },
    { name: "BBC Politics", url: "https://feeds.bbci.co.uk/news/politics/rss.xml" }
  ],
  business: [
    { name: "Reuters Business", url: "https://www.reuters.com/rssFeed/businessNews" },
    { name: "CNBC Business", url: "https://www.cnbc.com/id/10001147/device/rss/rss.html" }
  ],
  technology: [
    { name: "TechCrunch", url: "https://techcrunch.com/feed/" },
    { name: "Wired", url: "https://www.wired.com/feed/rss" },
    { name: "The Verge", url: "https://www.theverge.com/rss/index.xml" }
  ],
  sports: [
    { name: "BBC Sport", url: "https://feeds.bbci.co.uk/sport/rss.xml" },
    { name: "ESPN", url: "https://www.espn.com/espn/rss/news" },
    { name: "BeIN Sports", url: "https://www.beinsports.com/en/rss/news.xml" }
  ],
  world: [
    { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
    { name: "Reuters World", url: "https://www.reuters.com/rssFeed/worldNews" },
    { name: "Al Jazeera English", url: "https://www.aljazeera.com/xml/rss/all.xml" }
  ],
}

// NewsAPI.org
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const parser = new Parser();

// RSS feeds
async function fetchRssArticles(): Promise<RawArticle[]> {
  const articles: RawArticle[] = [];

  for (const [category, feeds] of Object.entries(rssFeeds)) {
    for (const feed of feeds) {
      try {
        const rss = await parser.parseURL(feed.url);
        rss.items.forEach((item) => {
          if (!item.link || !item.title) return;
          articles.push({
            title: item.title,
            description: item.contentSnippet,
            content: item.content,
            url: item.link,
            source: feed.name,
            category,
            publishedAt: item.pubDate,
            imageUrl: (item.enclosure && item.enclosure.url) || undefined
          });
        })
      } catch (err) {
        console.error(`Failed to fetch RSS ${feed.name}:`, err);
      };
    };
  };

  return articles;
}

// NewsAPI articles
async function fetchNewsApiArticles(): Promise<RawArticle[]> {
  if (!NEWS_API_KEY) return [];

  const categories = ["politics", "business", "technology", "sports", "world"];
  const articles: RawArticle[] = [];

  for (const category of categories) {
    try {
      const res = await fetch(
        `${NEWS_API_URL}?category=${category}&language=en&pageSize=10&apiKey=${NEWS_API_KEY}`
      )
      const data = await res.json()
      if (data.articles) {
        data.articles.forEach((item: RawArticle) => {
          if (!item.url || !item.title) return;
          articles.push({
            title: item.title,
            description: item.description,
            content: item.content,
            url: item.url,
            source: item.source ?? "NewsAPI",
            category, // request category as default
            publishedAt: item.publishedAt,
            imageUrl: item.imageUrl
          })
        })
      }
    } catch (err) {
      console.error(`Failed to fetch NewsAPI ${category}:`, err);
    }
  }

  return articles;
}

// Combined route
export async function GET(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");
    if (!API_SECRET || apiKey !== API_SECRET) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

  try {
    // const rssArticles = await fetchRssArticles();
    const newsApiArticles = await fetchNewsApiArticles();
    const allArticles = [...newsApiArticles];

    // Save to DB + Deduplicate by URL
    let savedCount = 0;
    for (const raw of allArticles) {
      try {
        const data = normalizeArticle(raw);

        await prisma.article.upsert({
          where: { url: data.url },
          update: {},
          create: data,
        });

        savedCount++;
      } catch (err) {
        console.error("Failed article:", {
          url: raw.url,
          title: raw.title,
          error: err,
        });
      }
    }

    return new Response(
      JSON.stringify({ success: true, totalFetched: allArticles.length, savedCount }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Aggregate route failed:", err)
    return new Response(JSON.stringify({ success: false, error: err }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  };
};