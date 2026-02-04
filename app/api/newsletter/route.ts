import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const API_SECRET = process.env.ARTICLES_API_SECRET;

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-api-key");
    if (!API_SECRET || apiKey !== API_SECRET) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const existing = await prisma.newsletter.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "Email already subscribed" },
        { status: 400 }
      );
    }

    const record = await prisma.newsletter.create({ data: { email } });
    return NextResponse.json({ success: true, email: record.email });
  } catch (err) {
    console.error("Newsletter signup error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-api-key");
    if (!API_SECRET || apiKey !== API_SECRET) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const existing = await prisma.newsletter.findUnique({ where: { email } });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Email not found" },
        { status: 404 }
      );
    }

    await prisma.newsletter.delete({ where: { email } });
    return NextResponse.json({ 
      success: true, 
      message: "Unsubscribed",
      email 
    });
  } catch (err) {
    console.error("Newsletter unsubscribe error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}