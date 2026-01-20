import Parser from "rss-parser";
import { RawArticle } from "@/types/article";

const parser = new Parser();
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

export default async function fetchRssArticles(): Promise<RawArticle[]> {
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
};