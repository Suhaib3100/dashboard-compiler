export const defaultDropdown = `import { Icon } from "@iconify/react";
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
    <React.Fragment>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
    </React.Fragment>
  )
}
export default DefaultDropdown;
`;
export const softDropdown = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const SoftDropdown = () => {
  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
    </React.Fragment>
  )
}
export default SoftDropdown;
`;
export const outlineDropdown = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const OutlineDropdown = () => {
  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
    </React.Fragment>
  )
}
export default OutlineDropdown;
`;
export const sizeDropdown = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
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
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="xl">
            Button xl
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
    </React.Fragment>
  )
}
export default SizeDropdown;
`;
export const splitDropdown = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
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
    <React.Fragment>
      <Button className=" rounded-tr-none rounded-br-none">Primary</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className=" rounded-l-none border-l border-primary-foreground/30 "
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
    </React.Fragment>
  )
}
export default SplitDropdown;
`;
export const outlineSplitDropdown = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
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
    <React.Fragment>
      <Button className=" rounded-tr-none rounded-br-none" variant="outline">
        Primary
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className=" rounded-l-none border-l-0 "
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
    </React.Fragment>
  )
}
export default OutlineSplitDropdown;
`;
export const alignmentOptions = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
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
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Left-align
            <Icon icon="heroicons:chevron-right" className=" h-5 w-5 ml-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
            Right Side
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
            <Icon icon="heroicons:chevron-up" className=" h-5 w-5 ml-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
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
    </React.Fragment>
  )
}
export default AlignmentOptions;
`;
export const dropdownMenuItemColor = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const DropdownMenuItemColor = () => {
  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="success">
            Success
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-success/10 focus:text-success ">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-success/10 focus:text-success ">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-success/10 focus:text-success ">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-success/10 focus:text-success ">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  )
}
export default DropdownMenuItemColor;
`;
export const dropdownMenuWithDescription = `"use client";
import React, { useState } from "react";
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

const WithDescription = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="success">
            Success
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="warning">
            warning
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="destructive">
            Danger
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="info">
            info
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Text Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a text item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Number Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a number item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Date Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a date item
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-start group focus:bg-default-200 focus:text-default-950 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 text-default-500 group-hover:text-default-950  "
            />
            <div>
              <p className="text-sm leading-5 text-default-700 group-hover:text-default-950">
                Single Form Item
              </p>
              <p className="text-xs leading-[18px] text-default-500">
                Create a single form item
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default WithDescription;
`;
export const dropdownMenuWithIcon = `"use client";
import React, { useState } from "react";
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

const WithIcon = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft" >
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Text Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Number Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Date Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Single Form Item
              </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft"  color="success">
            Success
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Text Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Number Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Date Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Single Form Item
              </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft"  color="warning">
            warning
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Text Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Number Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Date Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Single Form Item
              </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft"  color="destructive">
            Danger
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Text Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Number Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Date Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Single Form Item
              </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft"  color="info">
            info
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:chart-pie"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Text Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:user"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Number Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:calendar"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Date Item
              </p>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
            />
            <p className="text-sm leading-5 ">
                Single Form Item
              </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default WithIcon;
`;
export const dropdownMenuContent = `"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
const MenuContent = () => {
  const [showStatusBar1, setShowStatusBar1] = useState(false);
  const [showStatusBar2, setShowStatusBar2] = useState(false);
  const [showStatusBar3, setShowStatusBar3] = useState(false);
  const [showStatusBar4, setShowStatusBar4] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Header
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar1}
            onCheckedChange={setShowStatusBar1}
            className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer"
          >
            <p className="text-sm leading-5 ">Text Item</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showStatusBar2}
            onCheckedChange={setShowStatusBar2}
            className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer"
          >
            <p className="text-sm leading-5 ">Number Item</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showStatusBar3}
            onCheckedChange={setShowStatusBar3}
            className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer"
          >
            <p className="text-sm leading-5 ">Date Item</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showStatusBar4}
            onCheckedChange={setShowStatusBar4}
            className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer"
          >
            <p className="text-sm leading-5 ">Single Form Item</p>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Divider
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar1}
            onCheckedChange={setShowStatusBar1}
            className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer"
          >
            <p className="text-sm leading-5 ">Text Item</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showStatusBar2}
            onCheckedChange={setShowStatusBar2}
            className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer"
          >
            <p className="text-sm leading-5 ">Number Item</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showStatusBar3}
            onCheckedChange={setShowStatusBar3}
            className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer"
          >
            <p className="text-sm leading-5 ">Date Item</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar4}
            onCheckedChange={setShowStatusBar4}
            className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer"
          >
            <p className="text-sm leading-5 ">Separated Link</p>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Text
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuItem className=" focus:bg-transparent focus:text-default-950 text-default-500 cursor-pointer">
            Another Action is a show something else here to lorem ipsum dolar
            sit ent another boxes content write here.
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-transparent focus:text-default-950 text-default-500 cursor-pointer">
            Lorem ipsum dolar sit ent another boxes.
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Forms
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] p-4" align="start">
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="mb-3" htmlFor="inputId">
                  Email Address{" "}
                </Label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  id="inputId"
                />
              </div>
              <div>
                <Label className="mb-3" htmlFor="inputId">
                  Password{" "}
                </Label>
                <Input type="password" placeholder="Password" id="inputId" />
              </div>

              <div className="flex items-center ">
                <Checkbox id="rd_ex" />
                <label
                  htmlFor="rd_ex"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2.5"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <Button>Sign In</Button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MenuContent;
`;
export const dropdownMenuWithShortcut = `"use client";
import React from "react";
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-default-950">
            Header Title
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:chart-pie" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Text Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:user" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Number Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon icon="heroicons:calendar" className="w-4 h-4 mr-2 mt-1 " />
            <p className="text-sm leading-5 ">Date Item</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" focus:bg-default-200 focus:text-default-950 text-default-500 cursor-pointer">
            <Icon
              icon="heroicons:clipboard-document"
              className="w-4 h-4 mr-2 mt-1 "
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
`;
export const dropdownVariation = `import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const DropdownVariation = () => {
  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Hidden Arrow</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Hover
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Icon icon="heroicons:home-solid" className=" h-5 w-5 mr-2 " />
            Hover
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Icon
              icon="heroicons:ellipsis-vertical-20-solid"
              className=" h-5 w-5"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  )
}
export default DropdownVariation;
`;
export const customDropdown = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";

const CustomDropdown = () => {
  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div className=" flex items-center  space-x-3">
            <Avatar>
              <AvatarImage src={faker.image.avatarLegacy()} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div className=" flex items-center  space-x-3">
            <Avatar>
              <AvatarImage src={faker.image.avatarLegacy()} />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
};

export default CustomDropdown;

`;
