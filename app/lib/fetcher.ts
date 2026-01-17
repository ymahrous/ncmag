export async function fetchArticles() {
  const res = await fetch(
    `http://localhost:3000/api/news`,
    {
      headers: {
        "x-api-key": process.env.ARTICLES_API_SECRET || "",
      },
      cache: "no-store", // fetch fresh each time
    }
  );

  if (!res.ok) throw new Error("Failed to fetch articles");

  return res.json();
}