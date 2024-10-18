"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import MuteNotification from "./mute-notification";
import EditNickname from "./edit-nickname";
import ChangeTheme from "./change-theme";
import BlockUser from "./block-user";
import MediaSheet from "./media-sheet";
import { AlertTriangle, FolderClosed, Image } from "lucide-react";
import { type Contact as ContactType, } from "@/app/api/chat/data";
const ContactInfo = ({ handleSetIsOpenSearch, handleShowInfo, contact }: {
  handleSetIsOpenSearch: () => void;
  handleShowInfo: () => void;
  contact: ContactType
}) => {
  const [showDrawer, setShowDrawer] = useState(null);
  const handleDrawer = (itemKey: any) => {
    setShowDrawer(itemKey);
  };
  return (
    <div className="flex-none w-[285px] absolute xl:relative  right-0 h-full z-50 ">
      {showDrawer !== null && (
        <MediaSheet showDrawer={showDrawer} handleDrawer={handleDrawer} />
      )}

      <Card className="h-full overflow-hidden ">
        <CardHeader>
          <div className="absolute xl:hidden">
            <Button
              size="icon"
              className="rounded-full bg-default-100 text-default-500 hover:bg-default-200"
              onClick={handleShowInfo}
            >
              <Icon icon="formkit:arrowright" className="text-sm" />
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <Avatar className="w-16 h-16 lg:h-24 lg:w-24">
              <AvatarImage src={contact?.avatar.src} alt="" />
              <AvatarFallback>{contact?.fullName.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="mt-3 text-lg lg:text-xl font-semibold text-default-900">
              {contact?.fullName}
            </div>
            <span className="text-sm text-default-600 capitalize  text-center line-clamp-2">
              {contact?.about}
            </span>
          </div>
          <div className="flex justify-center gap-6  pt-3">
            <div className="flex flex-col items-center gap-1">
              <Link
                href="/chat"
                className="h-10 w-10 rounded-full bg-secondary dark:bg-default-500/50 flex justify-center items-center"
              >
                <Icon
                  icon="fa-regular:user"
                  className="text-lg text-default-900"
                />
              </Link>
              <span className="text-xs text-default-900">Profile</span>
            </div>
            <MuteNotification />
            <div
              className="flex flex-col items-center gap-1"
              onClick={handleSetIsOpenSearch}
            >
              <Button
                type="button"
                color="secondary"
                size="icon"
                className="rounded-full"
              >
                <Icon icon="zondicons:search" />
              </Button>
              <span className="text-xs text-default-900">Search</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-0 border-0 h-[calc(100%-260px)] overflow-hidden ">
          <ScrollArea className="h-full md:pb-10">
            <Accordion type="single" collapsible className="w-full  space-y-0 ">
              {/* option */}
              <AccordionItem
                value="item-1"
                className="shadow-none dark:shadow-none dark:bg-card/90 px-4"
              >
                <AccordionTrigger>Option</AccordionTrigger>
                <AccordionContent>
                  <EditNickname />
                  <ChangeTheme />
                </AccordionContent>
              </AccordionItem>
              {/* Shared Files */}
              <AccordionItem
                value="item-2"
                className="shadow-none dark:shadow-none dark:bg-card/90 px-4"
              >
                <AccordionTrigger>Shared Files</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <Button
                      type="button"
                      className="w-full justify-start gap-3  bg-transparent hover:bg-default-50 px-1.5 group"
                      onClick={() => handleDrawer("media")}
                    >
                      <span className="w-5 h-5 rounded-full bg-default-200 group-hover:bg-default-300 flex justify-center items-center">
                        <img className="w-3.5 h-3.5 text-default-400" />
                      </span>
                      <span className="text-xs text-default-600">Media</span>
                    </Button>
                    <Button
                      type="button"
                      className="w-full justify-start gap-3  bg-transparent hover:bg-default-50 group px-1.5"
                      onClick={() => handleDrawer("files")}
                    >
                      <span className="w-5 h-5 rounded-full bg-default-200 group-hover:bg-default-300 flex justify-center items-center">
                        <FolderClosed className="w-3 h-3 text-default-500" />
                      </span>
                      <span className="text-xs text-default-600">File</span>
                    </Button>
                    <Button
                      type="button"
                      className="w-full justify-start gap-3  bg-transparent hover:bg-default-50 group px-1"
                      onClick={() => handleDrawer("links")}
                    >
                      <span className="w-5 h-5 rounded-full bg-default-200 group-hover:bg-default-300 flex justify-center items-center">
                        <Icon
                          icon="heroicons:link"
                          className="w-3 h-3 text-default-500"
                        />
                      </span>
                      <span className="text-xs text-default-600">Links</span>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Settings */}
              <AccordionItem
                value="item-3"
                className="shadow-none dark:shadow-none dark:bg-card/90 px-4"
              >
                <AccordionTrigger className="rounded-none">
                  Settings
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <BlockUser />
                    <Button
                      type="button"
                      className="w-full justify-start gap-3  bg-transparent hover:bg-default-50 px-1.5 group"
                    >
                      <span className="w-5 h-5 rounded-full bg-default-200 group-hover:bg-default-300 flex justify-center items-center">
                        <AlertTriangle className="w-3 h-3 text-default-500" />
                      </span>
                      <span className="text-xs text-default-600">
                        Something wrong
                      </span>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
