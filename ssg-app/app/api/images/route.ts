// /app/api/images/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");
  
  if (!filename) {
    return NextResponse.json({ error: "Filename required" }, { status: 400 });
  }
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/${filename}`;
  
  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) {
    return new NextResponse("Image not found", { status: 404 });
  }
  
  const contentType = imageResponse.headers.get("content-type") || "image/jpeg";
  const buffer = await imageResponse.arrayBuffer();
  
  return new NextResponse(Buffer.from(buffer), {
    status: 200,
    headers: {
      "Content-Type": contentType,
    },
  });
}
