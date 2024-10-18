import { NextResponse, NextRequest } from "next/server";
import { profileUser } from "../data";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(profileUser, { status: 200 });
}
