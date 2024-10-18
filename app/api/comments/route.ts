import { NextResponse, NextRequest } from "next/server";
import { comments } from "./data";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
  //const delayedResponse = await delayResponse(demoData, 2000);
  return NextResponse.json(comments, { status: 200 });
}

export async function POST(request: NextRequest, response: NextResponse) {
  const newItem = await request.json();
  newItem.id = comments.length + 1;
  comments.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}
