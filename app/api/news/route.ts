import { prisma } from "@/app/lib/prisma";
import { normalizeArticle } from "@/app/lib/utils";
import { fetchNewsApiArticles } from "./fetchNewsApi";
import { NextRequest, NextResponse } from "next/server";

const API_SECRET = process.env.ARTICLES_API_SECRET;

// main route
export async function GET(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");
    if (!API_SECRET || apiKey !== API_SECRET) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

  try {
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
      } catch (error) {
        console.error("Unable to retreive article: ", { error });
      }
    }

    return new Response(
      JSON.stringify({ success: true, totalFetched: allArticles.length, savedCount }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("News route failed:", error)
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  };
};