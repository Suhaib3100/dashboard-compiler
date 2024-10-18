"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WithShortcut = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft">
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2"
            />
            <p className="text-sm leading-5 ">Single Form Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft" color="success">
            Success
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2"
            />
            <p className="text-sm leading-5 ">Single Form Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft" color="warning">
            warning
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2"
            />
            <p className="text-sm leading-5 ">Single Form Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft" color="destructive">
            Danger
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2"
            />
            <p className="text-sm leading-5 ">Single Form Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft" color="info">
            info
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 ltr:mr-2 rtl:ml-2"
            />
            <p className="text-sm leading-5 ">Single Form Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default WithShortcut;
