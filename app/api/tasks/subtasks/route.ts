import { NextResponse, NextRequest } from "next/server";
import { subTasks } from "../data";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest, response:any) {
  //const delayedResponse = await delayResponse(demoData, 2000);
  return NextResponse.json(subTasks, { status: 200 });
}

export async function POST(request: NextRequest, response: any) {
  const newItem = await request.json();
  newItem.id = subTasks.length + 1;
  subTasks.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}
