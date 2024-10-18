"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import avatar from "@/public/images/avatar/avatar-2.jpg";
import Link from "next/link";
const UserPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>User Profile</Button>
      </PopoverTrigger>
      <PopoverContent side="top">
        <PopoverArrow className="fill-default-300 w-4" />
        <div className="flex">
          <div className="flex-1 flex items-center gap-2">
            <Avatar>
              <AvatarImage src={avatar.src} />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium text-default-900">
                John Doe
              </div>
              <Link
                href="/dashboard"
                className="text-sm text-default-500  hover:text-primary"
              >
                @johndoe
              </Link>
            </div>
          </div>
          <Button size="sm" asChild className="rounded-md h-7 font-normal">
            <Link href="/dashboard">Follow</Link>
          </Button>
        </div>
        <div className="mt-5 text-sm text-default-600 ">
          Web designer and developer at{" "}
          <Link href="#" className="underline text-primary">
            Example Company
          </Link>
          , creating innovative experiences for users.
        </div>
        <div className="mt-4 text-sm text-default-600">
          <Link href="#" className="hover:underline">
            {" "}
            <span className="text-default-900 font-medium"> 1090</span>{" "}
            Following
          </Link>{" "}
          <Link href="#" className="hover:underline">
            <span className="text-default-900 font-medium">4,086</span>{" "}
            Followers
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
