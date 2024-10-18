"use client";
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
  const [showStatusBar1, setShowStatusBar1] = useState<boolean>(false);
  const [showStatusBar2, setShowStatusBar2] = useState<boolean>(false);
  const [showStatusBar3, setShowStatusBar3] = useState<boolean>(false);
  const [showStatusBar4, setShowStatusBar4] = useState<boolean>(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Header
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
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
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ltr:ml-2 rtl:mr-2 " />
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
