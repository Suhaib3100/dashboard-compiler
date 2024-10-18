"use client";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
const DialogNonDismisable = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>  Open Modal </Button>
      </DialogTrigger>
      <DialogContent className="p-6" size="md">
        <div className="flex flex-col items-center text-center">
          <span className="text-8xl text-success">
            <Icon icon="iconoir:emoji" />
          </span>
          <h3 className="mt-6 mb-4 text-success text-xl font-semibold">
            Now We're Happy Together
          </h3>
          <p className="text-sm text-default-500 ">
            Your body knows that if it achieves an objective, your mind will
            flood the body with dopamine causing you to feel happy. This isn't
            just true of achieving big goals.
          </p>
        </div>
        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button  color="warning"> Close </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogNonDismisable;
