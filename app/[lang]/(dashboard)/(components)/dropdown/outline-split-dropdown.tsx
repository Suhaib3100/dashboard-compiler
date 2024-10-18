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
const OutlineSplitDropdown = () => {
  return (
    <>
      <div className="flex">
        <Button className="ltr:rounded-r-none  rtl:rounded-l-none" variant="outline">
          Primary
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ltr:rounded-l-none ltr:border-l-0 rtl:rounded-r-none rtl:border-r-0"
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
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
      </div>
      <div className="flex">
        <Button
          className="ltr:rounded-r-none rtl:rounded-l-none"
          variant="outline"
          color="success"
        >
          Success
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="success"
              variant="outline"
              className=" ltr:rounded-l-none ltr:border-l-0 rtl:rounded-r-none rtl:border-r-0 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
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
      </div>
      <div className="flex">
        <Button
          className=" ltr:rounded-r-none rtl:rounded-l-none"
          variant="outline"
          color="warning"
        >
          Warning
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="warning"
              variant="outline"
              className=" ltr:rounded-l-none ltr:border-l-0 rtl:rounded-r-none rtl:border-r-0 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
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
      </div>
      <div className="flex">
        <Button
          className=" ltr:rounded-r-none rtl:rounded-l-none"
          variant="outline"
          color="destructive"
        >
          Danger
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="destructive"
              variant="outline"
              className=" ltr:rounded-l-none ltr:border-l-0 rtl:rounded-r-none rtl:border-r-0 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
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
      </div>
      <div className="flex">
        <Button
          className=" ltr:rounded-r-none rtl:rounded-l-none"
          variant="outline"
          color="info"
        >
          Info
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="info"
              variant="outline"
              className=" ltr:rounded-l-none ltr:border-l-0 rtl:rounded-r-none rtl:border-r-0 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
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
      </div>
    </>
  );
};

export default OutlineSplitDropdown;
