"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon } from "@iconify/react";
import { Pen } from "lucide-react";

import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";

const EditNickname = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="w-full justify-start gap-3  bg-transparent hover:bg-default-50 px-1.5 group"
        >
          <span className="w-5 h-5 rounded-full bg-default-200 group-hover:bg-default-300 flex justify-center items-center">
            <Pen className="w-2.5 h-2.5 text-default-700" />
          </span>
          <span className="text-xs text-default-600">Edit nickname</span>
        </Button>
      </DialogTrigger>
      <DialogContent size="xl">
        <DialogHeader>
          <DialogTitle className="text-center">Nicknames</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-default-500   mt-4">
          <div className="flex justify-between items-center gap-3 cursor-pointer hover:bg-default-100 px-2 py-3 rounded-sm">
            <Avatar>
              <AvatarImage src={avatar7.src} />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ada Lovelace"

                  id="guest"
                  className="peer opacity-0 focus:opacity-100 w-full h-10 px-4 rounded-md border border-default-300"
                />
                <Button
                  className="hidden text-default-900 bg-default-100 hover:bg-default-100
  peer-focus:flex peer-focus:absolute rounded-full top-1/2 -translate-y-1/2 right-2 
 justify-center items-center h-8 w-8
 
 "
                >
                  <span className="text-default-900">
                    <Icon icon="uil:check" className="text-xl " />
                  </span>
                </Button>
                <label
                  htmlFor="guest"
                  className="peer-focus:hidden absolute top-0  left-0 w-full h-full flex justify-between items-center"
                >
                  <div>
                    <div className="text-base font-bold text-default-900">
                      Ada Lovelace
                    </div>
                    <span className="text-sm text-default-700">
                      Set Nickname
                    </span>
                  </div>
                  <Pen className="w-5 h-4 text-default-900  peer-focus:block" />
                </label>
              </div>
            </div>
            <div></div>
          </div>

          <div className="flex justify-between items-center gap-3 cursor-pointer hover:bg-default-100 px-2 py-3 rounded-sm">
            <Avatar>
              <AvatarImage src={avatar2.src} />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Einstain"

                  id="user"
                  className="peer opacity-0 focus:opacity-100 w-full h-10 px-4 rounded-md border border-default-300"
                />
                <Button
                  className="hidden text-default-900 bg-default-100 hover:bg-default-100
peer-focus:flex peer-focus:absolute rounded-full top-1/2 -translate-y-1/2 right-2 
justify-center items-center h-8 w-8

"
                >
                  <span className="text-default-900">
                    <Icon icon="uil:check" className="text-xl " />
                  </span>
                </Button>
                <label
                  htmlFor="user"
                  className="peer-focus:hidden absolute top-0  left-0 w-full h-full flex justify-between items-center"
                >
                  <div>
                    <div className="text-base font-bold text-default-900">
                      Einstain
                    </div>
                    <span className="text-sm text-default-700">
                      Set Nickname
                    </span>
                  </div>
                  <Pen className="w-5 h-4 text-default-900  peer-focus:block mr-3" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-center ">
          <DialogClose asChild>
            <Button type="button" color="destructive" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Next</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditNickname;
