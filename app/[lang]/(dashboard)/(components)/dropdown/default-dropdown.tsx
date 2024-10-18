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
const DefaultDropdown = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
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
          <Button color="secondary">
            Secondary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2" />
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
          <Button color="success">
            Success
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2" />
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
          <Button color="info">
            Info
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2" />
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
          <Button color="warning">
            Warning
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2" />
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
          <Button color="destructive">
            Destructive
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2" />
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
          <Button color="dark">
            Dark
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2" />
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
    </>
  );
};

export default DefaultDropdown;
