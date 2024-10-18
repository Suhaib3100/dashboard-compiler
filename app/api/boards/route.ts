import { NextResponse,  NextRequest} from "next/server";
import { demoBoards } from "./data";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(demoBoards, { status: 200 });
}

export async function POST(request: NextRequest, response: NextResponse) {
  const newItem = await request.json();
  newItem.id = demoBoards.length + 1;
  demoBoards.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}

export async function PATCH(request: NextRequest, response: any) {
  const payloadItem = await request.json();
  const { activeBoardId, overBoardId } = payloadItem;

  const activeIndex = demoBoards.findIndex(
    (item) => item.id === activeBoardId
  );
  const overIndex = demoBoards.findIndex(
    (item) => item.id === overBoardId
  );
  if (activeIndex !== -1 && overIndex !== -1) {
    // // swap boards
    [demoBoards[activeIndex], demoBoards[overIndex]] = [
      demoBoards[overIndex],
      demoBoards[activeIndex],
    ];

    return NextResponse.json(
      { message: "Item updated successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}
