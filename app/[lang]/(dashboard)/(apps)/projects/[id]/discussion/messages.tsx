"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { formatTime } from "@/lib/utils";
import Image from "next/image";
import { type Message } from "./data"
const Messages = ({ messages }: { messages: Message[] }) => {
  return (
    <>
      {messages.map((item, index) => (
        <div key={index}>
          {item.userId === 1 ? (
            <div
              className="block md:px-6 px-4"
              key={`group-chat-wrapper-key-${index}`}
            >
              {/* send Text */}
              <div className="flex gap-x-2  items-start justify-end group w-full  mb-4">
                <div className=" flex flex-col  gap-1">
                  <div className="flex items-center gap-1">
                    <div className="opacity-0 invisible duration-150 group-hover:opacity-100 group-hover:visible ">
                      <Button
                        size="icon"
                        type="button"
                        className="w-7 h-7 rounded-full "
                      >
                        <Icon icon="heroicons:ellipsis-vertical-16-solid" />
                      </Button>
                    </div>
                    <div className="whitespace-pre-wrap break-all">
                      <div className="bg-primary/70 text-primary-foreground  text-sm  py-2 px-3 rounded-2xl  flex-1  ">
                        {item.messages?.map((message, index) => (
                          <span key={`group-chat-message-${index}`}>
                            {message}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-end text-default-500">
                    {formatTime(item.time)}
                  </span>
                </div>
                <div className="flex-none self-end -translate-y-5">
                  <div className="h-8 w-8 rounded-full ">
                    <Image
                      width={32}
                      height={32}
                      src={item.avatar}
                      alt="/images/avatar/avatar-2.jpg"
                      className="block w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex gap-x-2 items-start group  mb-4"
              key={`message-wrapper-key-2-${index}`}
            >
              {/* recived Text */}
              <div className="flex-none self-end -translate-y-5">
                <div className="h-8 w-8 rounded-full">
                  <Image
                    height={32}
                    width={32}
                    src={item.avatar}
                    alt="/images/avatar/avatar-2.jpg"
                    className="block w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-col   gap-1">
                  <div className="flex items-center gap-1">
                    <div className="whitespace-pre-wrap break-all relative z-[1]">
                      <div className="bg-default-200  text-sm  py-2 px-3 rounded-2xl  flex-1  ">
                        {item.messages?.map((message, index) => (
                          <span key={`group-chat-message-2-${index}`}>
                            {message}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="opacity-0 invisible duration-150 group-hover:opacity-100 group-hover:visible ">
                      <Button
                        size="icon"
                        type="button"
                        color="secondary"
                        className="w-7 h-7 rounded-full "
                      >
                        <Icon icon="heroicons:ellipsis-vertical-16-solid" />
                      </Button>
                    </div>
                  </div>
                  <span className="text-xs   text-default-500">
                    {formatTime(item.time)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Messages;
