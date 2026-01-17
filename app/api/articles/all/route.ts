import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// const API_SECRET = process.env.ARTICLES_API_SECRET;

export async function GET(req: NextRequest) {
  // const apiKey = req.headers.get("x-api-key");
  // if (!API_SECRET || apiKey !== API_SECRET) {
  //   return NextResponse.json(
  //     { success: false, error: "Unauthorized" },
  //     { status: 401 }
  //   );
  // }

  try {
    // Fetch all articles ordered by publishedAt descending
    const articles = await prisma.article.findMany({
      orderBy: { publishedAt: "desc" },
      select: {
        title: true,
        description: true,
        content: true,
        url: true,
        source: true,
        category: true,
        publishedAt: true,
        imageUrl: true || false
      },
    });

    return NextResponse.json({ success: true, total: articles.length, articles });
  } catch (err) {
    console.error("Fetch all articles error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}