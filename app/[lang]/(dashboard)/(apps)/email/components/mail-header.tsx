"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ListFilter,
  MailCheck,
  MicOff,
  Paperclip,
  Menu,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Fragment } from "react";

interface MailHeaderProps {
  selectedMail: any | null;
  onClose: () => void;
  handleSpam: () => void;
  handleSidebar: () => void;
}
const MailHeader = ({ selectedMail, onClose, handleSpam, handleSidebar }: MailHeaderProps) => {
  const isDesktop = useMediaQuery("(max-width: 1280px)");
  return (
    <Fragment>
      <div className="flex-1 ">
        <div className="flex items-center flex-wrap gap-1.5">
          {isDesktop && (
            <Menu
              className=" h-5 w-5 cursor-pointer text-default-600 me-2"
              onClick={handleSidebar}
            />
          )}
          {!selectedMail && (
            <div className="flex items-center gap-1">
              <Checkbox className="border-default-200" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    className="bg-transparent hover:bg-transparent px-0 w-fit"
                  >
                    <ChevronDown className="w-4 h-4 text-default-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[196px]" align="start">
                  <DropdownMenuItem>All</DropdownMenuItem>
                  <DropdownMenuItem>Read</DropdownMenuItem>
                  <DropdownMenuItem>Unread</DropdownMenuItem>
                  <DropdownMenuItem>Starred</DropdownMenuItem>
                  <DropdownMenuItem>Unstarred</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          {selectedMail && (
            <Button
              type="button"
              size="icon"
              className="h-9 w-9 rounded-full bg-default-100 hover:bg-default-200"
              onClick={onClose}
            >
              <Icon
                icon="heroicons:arrow-long-left"
                className="w-5 h-5 text-default-900"
              />
            </Button>
          )}
          <div>
            {/* archieve */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className="bg-transparent hover:bg-transparent  hover:bg-default-50 rounded-full"
                  >
                    <Icon
                      icon="heroicons:archive-box-arrow-down"
                      className="w-5 h-5 text-default-600"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Archive</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* spam */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleSpam}
                    size="icon"
                    className="bg-transparent hover:bg-transparent  hover:bg-default-50 rounded-full"
                  >
                    <Icon
                      icon="heroicons:exclamation-circle"
                      className="w-5 h-5 text-default-500"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Report Spam</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* trash */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className="bg-transparent hover:bg-transparent  hover:bg-default-50 rounded-full"
                  >
                    <Icon
                      icon="heroicons:trash"
                      className="w-5 h-5 text-default-600"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Delete</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {/* divider */}
          <div className="hidden md:block relative px-3 before:content-[''] before:absolute before:-top-4 before:left-1/2 before:w-[1px] before:h-9 before:bg-default-300"></div>
          <div>
            {/* read unread toggle */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className="bg-transparent hover:bg-transparent hover:bg-default-50 rounded-full"
                  >
                    {!selectedMail ? (
                      <MailCheck className="w-5 h-5 text-default-600" />
                    ) : (
                      <Icon
                        icon="heroicons:envelope-open"
                        className="w-5 h-5 text-default-600"
                      />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{!selectedMail ? "Mark as Unread" : "Mark as Read"} </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* tag */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  className="bg-transparent hover:bg-transparent hover:bg-default-50 rounded-full"
                >
                  <Icon
                    icon="heroicons:tag"
                    className="w-5 h-5 text-default-600"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit" align="start">
                <DropdownMenuItem>Work</DropdownMenuItem>
                <DropdownMenuItem>Company</DropdownMenuItem>
                <DropdownMenuItem>Private</DropdownMenuItem>
                <DropdownMenuItem>Group</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* dropdown */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  className="bg-transparent hover:bg-transparent  hover:bg-default-50 rounded-full"
                >
                  <Icon
                    icon="heroicons:ellipsis-vertical"
                    className="w-5 h-5 text-default-600"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit" align="end">
                <DropdownMenuItem>
                  <Icon
                    icon="heroicons:paper-airplane"
                    className="w-4 h-4 text-default-600 me-1.5"
                  />
                  Mark as important
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon
                    icon="heroicons:paper-airplane-16-solid"
                    className="w-4 h-4 text-default-600 me-1.5"
                  />
                  Mark as not important
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon
                    icon="heroicons:star"
                    className="w-4 h-4 text-default-600 me-1.5"
                  />
                  Add Star
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ListFilter className="w-4 h-4 text-default-600 me-1.5" />
                  Filter Message
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MicOff className="w-4 h-4 text-default-600 me-1.5" />
                  Mute
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Paperclip className="w-4 h-4 text-default-600 me-1.5" />
                  Forward as attachment
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="flex-none w-full lg:w-fit">
        <InputGroup merged>
          <InputGroupText>
            <Icon icon="heroicons:magnifying-glass" />
          </InputGroupText>
          <Input type="text" placeholder="Search email..." />
        </InputGroup>
      </div>
    </Fragment>
  );
};

export default MailHeader;
