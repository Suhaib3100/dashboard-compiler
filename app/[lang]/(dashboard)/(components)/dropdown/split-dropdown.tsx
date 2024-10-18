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
const SplitDropdown = () => {
  return (
    <>
      <div className="flex">
        <Button className="ltr:rounded-r-none rtl:rounded-l-none">Primary</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="ltr:rounded-l-none ltr:border-l rtl:rounded-r-none rtl:border-r border-primary-foreground/30 "
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
        <Button className="ltr:rounded-r-none rtl:rounded-l-none" color="success">
          Success
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="success"
              className=" ltr:rounded-l-none ltr:border-l rtl:rounded-r-none rtl:border-r border-success-foreground/30 "
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
        <Button className=" ltr:rounded-r-none rtl:rounded-l-none" color="warning">
          Warning
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="warning"
              className=" ltr:rounded-l-none ltr:border-l rtl:rounded-r-none rtl:border-r border-warning-foreground/30 "
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
          color="destructive"
        >
          Danger
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="destructive"
              className=" ltr:rounded-l-none ltr:border-l rtl:rounded-r-none rtl:border-r border-destructive-foreground/30 "
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
        <Button className=" ltr:rounded-r-none rtl:rounded-l-none" color="info">
          Info
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="info"
              className=" ltr:rounded-l-none ltr:border-l rtl:rounded-r-none rtl:border-r border-info-foreground/30 "
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

export default SplitDropdown;
