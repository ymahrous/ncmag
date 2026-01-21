import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const CRON_SECRET = process.env.CRON_SECRET;
    const API_SECRET = process.env.ARTICLES_API_SECRET;
    const auth = req.headers.get("authorization");
    
    if(!API_SECRET) return;
    if (!CRON_SECRET || auth !== `Bearer ${CRON_SECRET}`) {
        return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    try {
        await fetch("https://ncmag.vercel.app/api/news", {method: "GET", headers: {"x-api-key": API_SECRET}, cache: "no-store"});
    } catch (error) {
        console.error("Cron job error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
};