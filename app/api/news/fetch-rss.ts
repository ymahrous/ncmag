import Parser from "rss-parser";

const parser = new Parser();
const RSS_FEEDS = [
  { name: "Reuters Politics", url: "https://www.reuters.com/rssFeed/politicsNews" },
  { name: "BBC Politics", url: "https://feeds.bbci.co.uk/news/politics/rss.xml" },
  { name: "Reuters Business", url: "https://www.reuters.com/rssFeed/businessNews" },
  { name: "TechCrunch", url: "https://techcrunch.com/feed/" },
  { name: "BBC Sport", url: "https://feeds.bbci.co.uk/sport/rss.xml" }
  // add others...
]

export async function GET() {
  const results = [];

  for (const feed of RSS_FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url)
      parsed.items.forEach(item => {
        results.push({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          source: feed.name
        })
      })
    } catch (err) {
      console.error(`Failed to fetch ${feed.name}:`, err)
    };
  };
};