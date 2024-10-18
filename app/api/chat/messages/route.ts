import { NextResponse, NextRequest } from "next/server";
import { chats } from "../data";

export async function POST(request: NextRequest, response: NextResponse) {
  const obj = await request.json();

  let activeChat = chats.find((item) => item.id === parseInt(obj.contact.id));

  const newMessageData = {
    message: obj.message,
    time: new Date(),
    senderId: 11,
    replayMetadata: obj.replayMetadata,
  };
  if (!activeChat) {
    activeChat = {
      id: obj.contact.id,
      userId: obj.contact.id,
      unseenMsgs: 0,
      chat: [newMessageData],
    };
    chats.push(activeChat);
  } else {
    activeChat.chat.push(newMessageData);
  }

  return NextResponse.json(
    {
      chat: activeChat,
      contact: obj.contact,
      newMessageData,
      id: obj.contact.id,
    },
    { status: 201 }
  );
}
