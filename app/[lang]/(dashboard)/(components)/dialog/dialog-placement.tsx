"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";

const DialogPlacement = () => {
  return (
    <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Left</Button>
        </DialogTrigger>
        <DialogContent size="md" className="left-2 translate-x-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar1.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
                Close
              </Button>
            </DialogClose>
            <Button > Follow me </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Right</Button>
        </DialogTrigger>
        <DialogContent className="left-['unset'] right-2 translate-x-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar2.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button >Follow me</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Top</Button>
        </DialogTrigger>
        <DialogContent className="top-2 translate-y-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar3.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button >Follow me</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Center</Button>
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar4.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button >Follow me</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Bottom</Button>
        </DialogTrigger>
        <DialogContent className="top-['unset'] bottom-2 translate-y-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar5.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button >Follow me</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Top Left</Button>
        </DialogTrigger>
        <DialogContent className="left-2 top-2 translate-y-0 translate-x-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar6.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button  color="success">
              Follow me
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Top Right</Button>
        </DialogTrigger>
        <DialogContent className="left-['unset'] top-2 right-2 translate-y-0 translate-x-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar7.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button >Follow me</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Bottom Left</Button>
        </DialogTrigger>
        <DialogContent className="top-['unset'] left-2 bottom-2 translate-y-0 translate-x-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar8.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button >Follow me</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Bottom Center</Button>
        </DialogTrigger>
        <DialogContent className="top-['unset'] bottom-2 translate-y-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar9.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button >Follow me</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Bottom Right</Button>
        </DialogTrigger>
        <DialogContent className="top-['unset'] left-['unset'] bottom-2 right-2 translate-x-0 translate-y-0">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="w-[72px] h-[72px]">
                <AvatarImage src={avatar10.src} />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <Badge
                color="success"
                className=" h-2 w-2  p-0  absolute top-[2px] right-[8px]"
              ></Badge>
            </div>
            <h3 className="text-lg font-semibold text-default-950 dark:text-primary-foreground">
              Jenyyfer Nolan
            </h3>
            <span className="text-sm text-default-500  mt-1 block">
              UX/UI Designer
            </span>
            <p className="text-sm text-default-500  mt-3">
              I am a UI/UX Designer with over 2.5 years of experience in the
              field. I sincerely believe that by working together, extraordinary
              friendships can be made all over the world
            </p>
          </div>
          <hr className="my-5 border-border" />
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button  variant="outline" color="warning">
              
                Close
              </Button>
            </DialogClose>
            <Button >Follow me</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogPlacement;
