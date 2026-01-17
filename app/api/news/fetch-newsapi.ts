export async function GET(request: Request) {
  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    return new Response("Missing API key", { status: 500 });
  };

  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.set("language", "en");
  url.searchParams.set("pageSize", "30");
  // optional: filter by category or country:
  // url.searchParams.set("category", "sports")

  url.searchParams.set("apiKey", apiKey);

  const res = await fetch(url.toString());
  const json = await res.json();

  return Response.json(json.articles);
};