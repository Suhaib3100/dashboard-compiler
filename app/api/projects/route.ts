import { NextResponse, NextRequest } from "next/server";
import { projects } from "./data";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(projects, { status: 200 });
}

export async function POST(request: NextRequest, response: NextResponse) {
  const newItem = await request.json();

  // Assign a new ID to the item (assuming there's no unique ID generation yet)
  newItem.id = projects.length + 1;

  // Add the new item to the array
  projects.push(newItem);
  console.log(newItem, "ami new item");

  return NextResponse.json(newItem, { status: 201 });
}
