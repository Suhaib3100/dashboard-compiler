import { NextResponse, NextRequest } from "next/server";
import { tasks } from "../data";

export async function PUT(request: NextRequest, response: any) {
  const payloadItem = await request.json();

  const index = tasks.findIndex((item) => item.id === payloadItem.id);

  if (index !== -1) {
    // Update the item in the array
    tasks[index] = payloadItem;
    //tasks[index] = { ...tasks[index], ...payloadItem };

    return NextResponse.json(
      { message: "Item updated successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}

export async function DELETE(request: NextRequest, response: any) {
  const id = response.params.id;

  const index = tasks.findIndex((item) => item.id === id)

  if (index !== -1) {
    // Remove the item from the array
    tasks.splice(index, 1);
    return NextResponse.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}
