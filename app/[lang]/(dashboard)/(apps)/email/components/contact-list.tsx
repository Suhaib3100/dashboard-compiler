"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface ContactListProps {
  contact: any;
  handleOpenChatBox: () => void;
  isCollapsed: boolean;

}
const ContactList = ({ contact, handleOpenChatBox, isCollapsed }: ContactListProps) => {
  const { avatar, id, fullName, status, about, chat, unreadmessage, date } =
    contact;

  return (
    <>
      {isCollapsed ? (
        <div
          className={cn(
            " gap-4 py-1.5 px-2   hover:bg-default-300 dark:hover:bg-default-400 cursor-pointer flex rounded "
          )}
        >
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className=" inline-block">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={avatar?.src} />
                    <AvatarFallback className="uppercase">
                      {fullName.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    className=" h-2 w-2  p-0 ring-1 ring-border ring-offset-[1px]   items-center justify-center absolute
             left-[calc(100%-8px)] top-[calc(100%-10px)]"
                    color={status === "online" ? "success" : "secondary"}
                  ></Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <div className="truncate max-w-[120px]">
                  <span className="text-sm text-default-900 font-medium">
                    {" "}
                    {fullName}
                  </span>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ) : (
        <div
          className={cn(
            " gap-4 py-2.5 px-2.5 border-l-2 border-transparent rounded hover:border-primary-500 hover:!rounded-l-none hover:bg-default-100 dark:hover:bg-default-300 ease-in-out duration-200 cursor-pointer flex",

          )}
          onClick={handleOpenChatBox}
        >
          <div className="flex-1 flex  gap-3">
            <div className="relative inline-block">
              <Avatar>
                <AvatarImage src={avatar?.src} />
                <AvatarFallback className="uppercase">
                  {fullName.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <Badge
                className=" h-2 w-2  p-0 ring-1 ring-border ring-offset-[1px]   items-center justify-center absolute
             left-[calc(100%-8px)] top-[calc(100%-10px)]"
                color={status === "online" ? "success" : "secondary"}
              ></Badge>
            </div>
            <div className="hidden lg:block">
              <div className="truncate max-w-[120px]">
                <span className="text-sm text-default-900 font-medium">
                  {" "}
                  {fullName}
                </span>
              </div>
              <div className="truncate  max-w-[120px]">
                <span className=" text-xs  text-default-600 ">
                  {chat?.lastMessage ? chat?.lastMessage : about}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactList;
