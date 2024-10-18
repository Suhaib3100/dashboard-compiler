"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { Annoyed, SendHorizontal } from "lucide-react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const MessageFooter = () => {
  const [message, setMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.style.height = "auto"; // Reset the height to auto to adjust
    e.target.style.height = `${e.target.scrollHeight - 15}px`;
  };

  const handleSelectEmoji = (emoji: any) => {
    setMessage(message + emoji.native);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
  };
  return (
    <>
      <div
        className="w-full flex items-end gap-4 lg:px-4"
        style={{
          boxSizing: "border-box",
        }}
      >
        <div className="flex-none flex gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        size="icon"
                        className="bg-transparent rounded-full hover:bg-default-50"
                      >
                        <span className="h-6 w-6 rounded-full bg-primary ">
                          <Icon
                            icon="mdi:plus"
                            className="text-2xl text-primary-foreground "
                          />
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="start"
                      className="bg-default-800 py-2"
                    >
                      <p className="text-xs  text-primary-foreground ">
                        Open More Actions
                      </p>
                      <TooltipArrow className="fill-default-800" />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[196px] p-2.5 rounded-xl"
              align="start"
              side="top"
            >
              <DropdownMenuItem className="py-2 px-2 rounded-xl">
                <div className="flex items-center gap-1">
                  <Icon
                    icon="material-symbols:mic"
                    className="text-xl text-primary"
                  />
                  <span className="text-sm font-medium text-default-900">
                    Send a voice clip
                  </span>
                </div>
              </DropdownMenuItem>
              {message.length > 0 && (
                <>
                  <DropdownMenuItem className="py-2 px-2 rounded-xl">
                    <Label htmlFor="attachement" className="flex items-center">
                      <Icon
                        icon="tabler:file-filled"
                        className="text-xl text-primary "
                      />
                      <Input type="file" className="hidden" id="attachement" />
                      <span className="text-sm font-medium text-defualt-900 inline-block ml-1">
                        Attach a file
                      </span>
                    </Label>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2 px-2 rounded-xl">
                    <div className="flex items-center gap-1">
                      <Icon
                        icon="fluent:sticker-12-filled"
                        className="text-xl text-primary"
                      />
                      <span className="text-sm font-medium text-defualt-900 inline-block ml-1">
                        Choose a sticker
                      </span>
                    </div>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          {message.length < 1 && (
            <>
              <div className="hidden lg:block">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Label htmlFor="attachement">
                        <span className="h-10 w-10 rounded-full hover:bg-default-50 flex justify-center items-center ">
                          <Icon
                            icon="tabler:file-filled"
                            className="text-2xl text-primary/80 "
                          />
                        </span>
                        <Input
                          type="file"
                          className="hidden"
                          id="attachement"
                        />
                      </Label>
                    </TooltipTrigger>
                    <TooltipContent
                      className="bg-default-800 py-2"
                      align="start"
                    >
                      <p className="text-xs  text-primary-foreground ">
                        Attach a file
                      </p>
                      <TooltipArrow className="fill-default-800" />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="hidden lg:block">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        size="icon"
                        className="bg-transparent rounded-full hover:bg-default-50 cursor-pointer"
                      >
                        <Icon
                          icon="fluent:sticker-12-filled"
                          className="text-2xl text-primary/80"
                        />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      align="start"
                      className="bg-default-800 py-2"
                    >
                      <p className="text-xs  text-primary-foreground ">
                        Choose a sticker
                      </p>
                      <TooltipArrow className="fill-default-800" />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </>
          )}
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="flex  gap-1 relative">
              <textarea
                value={message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="bg-default-200 rounded-xl break-words px-3 flex-1 h-10 pt-2 p-1 outline-none border focus:border-primary "
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                style={{
                  minHeight: "40px",
                  maxHeight: "120px",
                  overflowY: "auto",
                  resize: "none",
                }}
              />

              <Popover>
                <PopoverTrigger asChild>
                  <span className=" absolute ltr:right-12 rtl:left-12 bottom-1 h-8 w-8 rounded-full bg-default-200 ">
                    <Annoyed className="w-6 h-6 text-primary" />
                  </span>
                </PopoverTrigger>
                <PopoverContent side="top" align="end">
                  <Picker
                    data={data}
                    onEmojiSelect={handleSelectEmoji}
                    theme="light"
                  />
                </PopoverContent>
              </Popover>
              <Button
                type="submit"
                className="rounded-full bg-default-100 hover:bg-default-100 h-[42px] w-[42px] p-0 self-end"
              >
                <SendHorizontal className="w-5 h-8 text-primary rtl:rotate-180" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageFooter;
