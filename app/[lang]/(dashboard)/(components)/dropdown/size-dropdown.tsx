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
const SizeDropdown = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="xl">
            Button xl
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
          <Button size="lg">
            Button lg
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
          <Button>
            Button
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
          <Button size="md">
            Button md
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
          <Button size="xs">
            Button xs
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
    </>
  );
};

export default SizeDropdown;
