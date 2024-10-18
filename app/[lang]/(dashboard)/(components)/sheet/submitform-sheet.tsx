"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


import Link from "next/link";
import { SiteLogo } from "@/components/svg";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function SubmitFormInDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <span className="text-xl mr-1">
            <Icon icon="icon-park-outline:plus" />
          </span>
          New Account
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-[736px] p-0">
        <SheetHeader className="py-3 pl-4">
          <SheetTitle>Create a New Account</SheetTitle>
        </SheetHeader>
        <hr />
        <div className="px-5 py-6 h-[calc(100vh-120px)]">
          <ScrollArea className="h-full">
            <div className=" text-center py-2">
              <div className="flex justify-center">
                <Link href="#">
                  <SiteLogo className="w-12 h-12 mb-2 text-primary" />
                </Link>
              </div>
              <h3 className="text-2xl font-bold text-default-700 ">
                Create a new account
              </h3>
              <p className="text-default-600  mt-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quod delectus amet.
              </p>
            </div>
            {/* form */}
            <div className="md:grid md:grid-cols-2 gap-6 mt-6 space-y-6 md:space-y-0">
              <div className="flex flex-col gap-2">
                <Label htmlFor="username">Name</Label>
                <Input
                  type="text"
                  placeholder="Please enter user name"
                  id="username"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="url">URL</Label>
                <Input type="text" placeholder="Please enter url" id="url" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <Label htmlFor="owner">Owner</Label>
                <Select >
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an owner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Owner 1</SelectItem>
                    <SelectItem value="2">Owner 2</SelectItem>
                    <SelectItem value="3">Owner 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="choose-type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Choose the type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Type 1</SelectItem>
                    <SelectItem value="2">Type 2</SelectItem>
                    <SelectItem value="3">Type 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="approver">Type</Label>
                <Select>
                  <SelectTrigger id="approver">
                    <SelectValue placeholder="Please choose the approver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Approver 1</SelectItem>
                    <SelectItem value="2">Approver 2</SelectItem>
                    <SelectItem value="3">Approver 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="datetime">Date Time</Label>
                <Input type="date" id="url" />
              </div>
              <div className="md:col-span-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea placeholder="Please enter url description" />
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        <SheetFooter className="gap-3 pt-4 block">
          <div className="flex items-center gap-2.5 justify-center">
            <SheetClose asChild>
              <Button color="destructive" variant="outline" size="xs"> Cancel </Button>
            </SheetClose>
            <Button size="xs" >Submit</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
