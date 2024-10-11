import { sanityFetch } from "@/sanity/lib/fetch";
import { EDITORIALS } from "@/sanity/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  const editorials = await sanityFetch({
    query: EDITORIALS,
  });
  return NextResponse.json(editorials, { status: 200 });
}
