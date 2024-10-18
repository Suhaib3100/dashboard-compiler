"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

import { postCommentAction } from "@/action/project-action";
import avatar from "@/public/images/avatar/avatar-7.jpg";
import { SendHorizontal } from "lucide-react";
import { type Task as TaskType } from "@/app/api/tasks/data";
const CommentFooter = ({ taskId }: {
  taskId?: TaskType["id"];
}) => {
  const [message, setMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.style.height = "auto"; // Reset the height to auto to adjust
    e.target.style.height = `${e.target.scrollHeight - 15}px`;
  };

  const handleSelectEmoji = (emoji: any) => {
    setMessage(message + emoji.native);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      name: "CodeShaper",
      avatar: avatar,
      text: message,
      date: formatDate(new Date()),
      subTaskId: taskId,
    };

    try {
      await postCommentAction(newMessage as any);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full flex items-end gap-4 px-4">
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="flex  gap-1 relative">
              <textarea
                value={message}
                placeholder="Type your message..."
                className="bg-default-100 rounded-xl break-words px-3 flex-1 h-10 pt-2 p-1 "
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e as any);
                  }
                }}
                style={{
                  minHeight: "40px",
                  maxHeight: "120px",
                  overflowY: "auto",
                  resize: "none",
                }}
              />

              <Button
                type="submit"
                className="rounded-full bg-default-100 hover:bg-default-100 h-[42px] w-[42px] p-0 self-end"
              >
                <SendHorizontal className="w-5 h-8 text-primary" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentFooter;
