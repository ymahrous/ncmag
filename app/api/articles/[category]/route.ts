import { Category } from "@prisma/client";
import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 20;
const API_SECRET = process.env.ARTICLES_API_SECRET;

export async function GET(req: NextRequest, context: {params: Promise<{ category: string }>}) {
  const apiKey = req.headers.get("x-api-key");
  if (!API_SECRET || apiKey !== API_SECRET) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { category } = await context.params;
    // Validate category
    if (!Object.values(Category).includes(category as Category)) {
      return NextResponse.json(
        { success: false, error: "Invalid category" },
        { status: 400 }
      );
    }

    const { searchParams } = new URL(req.url);
    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const skip = (page - 1) * PAGE_SIZE;

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where: { category: category as Category },
        orderBy: { publishedAt: "desc" },
        skip,
        take: PAGE_SIZE,
        select: {
          id: true,
          title: true,
          description: true,
          url: true,
          source: true,
          imageUrl: true,
          publishedAt: true,
        },
      }),
      prisma.article.count({
        where: { category: category as Category },
      }),
    ]);

    return NextResponse.json({
      success: true,
      category,
      page,
      pageSize: PAGE_SIZE,
      total,
      totalPages: Math.ceil(total / PAGE_SIZE),
      articles,
    });
  } catch (error) {
    console.error("Articles API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}