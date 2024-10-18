"use client"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const AlignmentOptions = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Left-align
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 rtl:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Right-align
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 rtl:rotate-180 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="end" avoidCollisions>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Center</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="center">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Left Side
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 rtl:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" side="left">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
          <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ltr:hidden rtl:mr-2 " />
            Right Side
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 rtl:hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" side="right">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Top Side
            <Icon icon="heroicons:chevron-up" className=" h-5 w-5 ltr:ml-2 rtl:mr-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" side="top">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Bottom Side
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" side="bottom">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default AlignmentOptions;
