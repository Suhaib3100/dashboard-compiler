import { NextResponse } from "next/server";
import { categories } from "../data";
export async function GET(request, response) {
  return NextResponse.json({
    status: "success",
    message: "User created successfully",
    data: categories,
  });
}
