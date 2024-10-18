import { NextResponse, NextRequest } from "next/server";
import { chats, contacts } from "../../data";

export async function GET(request: NextRequest, response: any) {
  const id = response.params.id;

  // Find the item with the given ID
  const chat = chats.find((item) => item.id === parseInt(id));
  const contact = contacts.find((item) => item.id === parseInt(id));

  const combinedData = { chat, contact };

  if (combinedData.chat && combinedData.contact) {
    return NextResponse.json(combinedData, { status: 200 });
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}

export async function DELETE(request: NextRequest, response: any) {
  const { selectedChatId, index } = await request.json();

  const chatIndex = chats.findIndex(
    (chat) => chat.id === parseInt(selectedChatId)
  );

  if (chatIndex !== -1) {
    const chat = chats[chatIndex];
    if (index >= 0 && index < chat.chat.length) {
      // Remove the message from the chat based on the received index
      chat.chat.splice(index, 1);
      return NextResponse.json(
        { message: "Message deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid message index" },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json({ message: "Chat not found" }, { status: 404 });
  }
}
