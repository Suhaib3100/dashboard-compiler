"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import projectImage from "@/public/images/projects/project-1.png";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { faker } from "@faker-js/faker";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import { type Project } from "@/app/api/projects/data";

const ProjectHeader = ({ project }: { project: Project }) => {
  const data = [
    {
      text: "assigned date",
      date: "24 June 2023",
    },
    {
      text: "Due Date",
      date: "09 Dec 2023",
    },
    {
      text: "Total Hours",
      date: "09 Dec 2023",
    },
    {
      text: "Total Person",
      date: "09 Dec 2023",
    },
  ];
  const users = [
    {
      name: "Nick Jonas",
      value: "userid1",
      image: avatar1,
      lastMessage: "How are you?",
      isUserActive: true,
    },
    {
      name: "Fahim",
      value: "userid2",
      image: avatar2,
      lastMessage: "Are you okay?",
      isUserActive: false,
    },
    {
      name: "Nayeem",
      value: "userid3",
      image: avatar3,
      lastMessage: "",
      isUserActive: true,
    },
    {
      name: "Iftekhar",
      value: "userid4",
      image: avatar4,
      lastMessage: "Is everything fine?",
      isUserActive: false,
    },
  ];
  return (
    <>
      <CardHeader className="flex-row items-center">
        <CardTitle className="flex-1"> {project.title} </CardTitle>
        <div className="flex-none flex items-center gap-3">
          {/* chat */}
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" color="secondary">
                <Icon
                  icon="heroicons:chat-bubble-oval-left-20-solid"
                  className="w-5 h-5 text-default-500"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-0">
              <div className="bg-default-100 pl-4 pr-1 py-1.5 flex items-center justify-between">
                <span className="text-sm font-semibold text-default-900 uppercase ">
                  Workspace Chat
                </span>
                <PopoverClose>
                  <Button
                    type="button"
                    size="icon"
                    className="bg-transparent hover:bg-default-200 rounded-full p-0 "
                  >
                    <X className="w-5 h-5 text-default-900" />
                  </Button>
                </PopoverClose>
              </div>
              <Command>
                <div className="p-2">
                  <CommandInput
                    placeholder="Search By Name..."
                    inputWrapper="border border-default-200 rounded-md"
                    className="h-9"
                  ></CommandInput>
                </div>
                <CommandEmpty>No new members.</CommandEmpty>
                <CommandGroup>
                  {users.map((item) => (
                    <CommandItem
                      key={`project-members-${item.value}`}
                      value={item.name}
                      className="gap-3"
                    >
                      <div className="relative inline-block">
                        <Avatar>
                          <AvatarImage src={item?.image?.src} />
                          <AvatarFallback>SN</AvatarFallback>
                        </Avatar>
                        <Badge
                          className=" h-2 w-2 ring-1 ring-default-100  p-0  items-center justify-center absolute left-[calc(100%-8px)] top-[calc(100%-10px)]"
                          color={item.isUserActive ? "success" : "secondary"}
                        ></Badge>
                      </div>
                      <div className="flex flex-col ">
                        <span className="font-base capitalize text-default-900">
                          {item.name}
                        </span>
                        <span className="truncate text-xs text-default-600">
                          {" "}
                          {item.lastMessage}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          {/* elipsis */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" color="secondary">
                <Icon
                  icon="heroicons:ellipsis-horizontal-20-solid"
                  className="w-5 h-5 text-default-500"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="end">
              <DropdownMenuItem>Create Invoice</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="border-b border-default-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-none">
            <div className="h-[148px] w-[148px] rounded">
              <Image
                src={projectImage}
                alt="dashtail"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-between gap-4">
              <div className="text-xl font-medium text-default-950 truncate">
                {" "}
                Dashtail - Admin Template
              </div>
              <div className="space-x-3 rtl:space-x-reverse ">
                <Badge color="warning" variant="soft">
                  {" "}
                  High{" "}
                </Badge>
                <Badge color="info" variant="soft">
                  {" "}
                  In Progress{" "}
                </Badge>
              </div>
            </div>
            <div className="text-sm text-default-600 w-full  mt-1">
              Create a Brand logo design for a DashTail Admin. Logo should be
              match our dashboard theme.
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 lg:gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="border border-dashed border-default-300 rounded py-2.5 px-3 min-w-fit lg:min-w-[148px]"
                >
                  <div className="text-sm font-medium text-default-500 capitalize">
                    {item.text}
                  </div>
                  <div className="text-sm font-medium text-default-900">
                    {item.date}
                  </div>
                </div>
              ))}
              {project?.assign?.length > 0 && (
                <div>
                  <AvatarGroup max={3} total={project.assign.length}>
                    {project.assign?.map((user, index) => (
                      <Avatar
                        key={index}
                        className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background"
                      >
                        <AvatarImage src={user?.image?.src} />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default ProjectHeader;
