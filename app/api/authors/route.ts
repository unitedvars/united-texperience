import { sanityFetch } from "@/sanity/lib/fetch";
import { AUTHORS } from "@/sanity/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  const authors = await sanityFetch({
    query: AUTHORS,
  });
  return NextResponse.json(authors, { status: 200 });
}
