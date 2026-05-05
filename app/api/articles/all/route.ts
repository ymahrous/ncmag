import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const API_SECRET = process.env.ARTICLES_API_SECRET;

export async function GET(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");
  if (!API_SECRET || apiKey !== API_SECRET) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const url = new URL(req.url);
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1"));
    const limit = Math.min(50, parseInt(url.searchParams.get("limit") || "50"));
    const skip = (page - 1) * limit;

    const articles = await prisma.article.findMany({
      orderBy: { publishedAt: "desc" },
      select: {
        id: true,
        title: true,
        description: true,
        url: true,
        source: true,
        category: true,
        publishedAt: true,
        imageUrl: true
      },
      skip,
      take: limit,
    });

    return NextResponse.json({ 
      success: true, 
      total: articles.length, 
      page,
      limit,
      articles 
    });
  } catch (err) {
    console.error("Fetch all articles error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch articles" },
      { status: 500 }
    );
  };
};