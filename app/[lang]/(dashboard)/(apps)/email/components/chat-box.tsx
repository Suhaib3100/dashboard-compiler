"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ChevronDown, SendHorizontal } from "lucide-react";

import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ChatBox = ({ onClose }: { onClose: () => void }) => {
  const [minimize, setMinimize] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e: any) => {
    setMessage(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight - 15}px`;
  };

  return (
    <Card className="fixed z-[9999] bottom-0 ltr:right-4 rtl:left-4 w-[200px] md:[250px] lg:w-[360px]  rounded-t-md rounded-b-none dark:border dark:border-default-200 dark:border-t-0">
      <CardHeader className={cn("bg-primary  rounded-t-md flex-row items-center py-2", {
        "mb-0": minimize
      })}>
        <div className="flex-1 flex  items-center gap-3">
          <div className="relative inline-block">
            <Avatar className="h-9 w-9 ring-1 ring-secondary">
              <AvatarImage src={avatar1.src} />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <Badge
              color="success"
              className=" h-2 w-2  p-0  items-center justify-center absolute ltr:left-[calc(100%-8px)] rtl:right-[calc(100%-8px)] top-[calc(100%-8px)]"
            ></Badge>
          </div>
          <div className="text-base font-medium text-primary-foreground relative truncate w-[50px] md:w-fit">
            Jenifer Jenny
            <ChevronDown className="h-3.5 w-3.5 text-primary-foreground absolute rtl:-left-4 ltr:-right-4 top-1" />
          </div>
        </div>

        <Button type="button" size="icon">
          <Icon icon="heroicons:phone" className="w-5 h-5" />
        </Button>
        <Button type="button" size="icon">
          <Icon icon="heroicons:video-camera" className="w-5 h-5" />
        </Button>
        <Button type="button" size="icon" onClick={() => setMinimize(!minimize)}>
          <Icon icon="heroicons:minus" className="w-5 h-5" />
        </Button>
        <Button type="button" size="icon" onClick={onClose}>
          <Icon icon="heroicons:x-mark" className="w-5 h-5" />
        </Button>
      </CardHeader>
      <CardContent
        className={cn("px-0", {
          "hidden": minimize
        })}
      >
        {/* chat list */}
        <div className="h-[200px] lg:h-[346px]">
          <ScrollArea className="h-full">
            {/* left */}
            <div className="block md:px-6 px-4 ">
              <div className="flex gap-x-2 items-start group  mb-4">
                <div className="flex-none self-end -translate-y-5">
                  <div className="h-8 w-8 rounded-full">
                    <Image
                      src={avatar1}
                      alt="/images/avatar/avatar-1.jpg"
                      className="block w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-col   gap-1">
                    <div className="flex items-center gap-1">
                      <div className="whitespace-pre-wrap break-all relative z-[1]">
                        <div className="bg-default-200  text-sm  py-2 px-3 rounded-2xl  flex-1  ">
                          Hello. How can I help You?
                        </div>
                      </div>
                      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                        <Button
                          type="button"
                          size="icon"
                          className="w-7 h-7 rounded-full bg-default-100 hover:bg-default-200 "
                        >
                          <Icon
                            icon="heroicons:ellipsis-vertical"
                            className="w-4 h-4 text-default-900"
                          />
                        </Button>
                      </div>
                    </div>
                    <span className="text-xs   text-default-500">01:45 PM</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="block md:px-6 px-4 ">
              <div className="flex gap-x-2 items-start justify-end group w-full  mb-4">
                <div className=" flex flex-col  gap-1">
                  <div className="flex items-center gap-1">
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                      <span
                        className="w-7 h-7 rounded-full bg-default-100 flex items-center justify-center"

                        id="radix-:r1a:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <Icon
                          icon="heroicons:ellipsis-vertical"
                          className="w-4 h-4 text-default-900"
                        />
                      </span>
                    </div>
                    <div className="whitespace-pre-wrap break-all">
                      <div className="bg-primary/70 text-primary-foreground  text-sm  py-2 px-3 rounded-2xl  flex-1  ">
                        Can I get details of my last transaction I made last
                        month?
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-end text-default-500">
                    01:46 PM
                  </span>
                </div>
                <div className="flex-none self-end -translate-y-5">
                  <div className="h-8 w-8 rounded-full ">
                    <Image
                      src={avatar2}
                      alt="/images/avatar/avatar-2.jpg"
                      className="block w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </CardContent>
      <CardFooter
        className={cn("px-0", {
          "hidden": minimize
        })}
      >
        <div
          className="w-full flex items-end gap-4 lg:px-4"
          style={{
            boxSizing: "border-box",
          }}
        >
          <div className="flex-1">
            <form>
              <div className="flex  gap-1 relative">
                <textarea
                  value={message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  className="bg-default-200 outline-none border hover:border-primary rounded-xl break-words px-3 flex-1 h-10 pt-2 p-1 "
                  style={{
                    minHeight: "40px",
                    maxHeight: "70px",
                    overflowY: "auto",
                    resize: "none",
                  }}
                />

                <Button
                  type="button"
                  className="rounded-full bg-default-100 hover:bg-default-100 h-[42px] w-[42px] p-0 self-end"
                >
                  <SendHorizontal className="w-5 h-8 text-primary rtl:rotate-180" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatBox;
