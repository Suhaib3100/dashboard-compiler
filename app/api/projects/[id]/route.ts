import { NextResponse, NextRequest } from "next/server";
import { projects } from "../data";

export async function GET(request: NextRequest, response: any) {
  const id = response.params.id;

  const item = projects.find((item) => item.id === id);

  if (item) {
    return NextResponse.json(item, { status: 200 });
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}

export async function PUT(request: NextRequest, response: any) {
  const payloadItem = await request.json();

  const index = projects.findIndex(
    (item) => item.id === payloadItem.id
  );
  console.log(payloadItem, "ami api theke");
  if (index !== -1) {
    // Update the item in the array
    projects[index] = payloadItem;

    return NextResponse.json(
      { message: "Item updated successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}

export async function DELETE(request:NextRequest, response: any) {
  const id = response.params.id;

  const index = projects.findIndex((item) => item.id === id);

  if (index !== -1) {
    // Remove the item from the array
    projects.splice(index, 1);
    return NextResponse.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}
