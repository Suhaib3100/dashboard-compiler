"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
const DialogForm = () => {
  const [picker, setPicker] = useState<Date>(new Date());
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Form</Button>
      </DialogTrigger>
      <DialogContent size="2xl">
        <DialogHeader className="p-0">
          <DialogTitle className="text-base font-medium text-default-700 ">
            Create a New Account
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className="h-[290px]">
            <ScrollArea className="h-full">
              <div className="sm:grid  sm:grid-cols-2 sm:gap-5 space-y-4 sm:space-y-0">
                <div className="flex flex-col gap-2">
                  <Label>First Name</Label>
                  <Input type="text" placeholder="Enter first name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Last Name</Label>
                  <Input type="text" placeholder="Enter last name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="Enter email address" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Phone Number</Label>
                  <Input type="number" placeholder="Your phone number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Set Password</Label>
                  <Input type="number" placeholder="Your phone number" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Date of birth</Label>
                  <Flatpickr
                    className="w-full bg-background border border-default-200 focus:border-primary focus:outline-none h-10 rounded-md px-2 placeholder:text-default-600"
                    placeholder="Date of birth"
                    value={picker}
                    onChange={(dates: Date[]) => {
                      setPicker(dates[0] || null);
                    }}
                    id="default-picker"
                  />
                </div>
                <div className="col-span-2 flex  items-center gap-2">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="text-xs text-default-700 cursor-pointer"
                  >
                    You agree to our Terms, Privacy Policy. You may receive SMS
                    notifications from us and can opt out at any time.
                  </Label>
                </div>
              </div>
            </ScrollArea>
          </div>

          <div className=" flex justify-center gap-3 mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button">Create Account </Button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm font-medium text-default-700 ">
              Already Have An Account?
              <Link href="/dashboard" className="text-success">
                {" "}
                Sign In{" "}
              </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
