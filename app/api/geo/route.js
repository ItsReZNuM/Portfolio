import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Check edge headers provided by Vercel, Cloudflare, etc.
    const country =
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("cf-ipcountry") ||
      request.headers.get("x-country-code") ||
      null;

    return NextResponse.json({ country });
  } catch {
    return NextResponse.json({ country: null });
  }
}
