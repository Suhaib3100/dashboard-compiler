"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icon } from "@iconify/react";

const MuteNotification = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <Button
            type="button"
            color="secondary"
            size="icon"
            className="rounded-full"
          >
            <Icon icon="ci:bell-ring" className="h-5 w-5" />
          </Button>
          <span className="text-xs text-default-900">Mute</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Mute conversation</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-default-500  mt-8">
          <RadioGroup
            className="flex flex-col gap-3"
            defaultValue="messageNotification"
          >
            <RadioGroupItem
              value="messageNotification"
              id="messageNotification"
            >
              Mute message notifications{" "}
            </RadioGroupItem>
            <RadioGroupItem value="callNotification" id="callNotification">
              Mute call notifications{" "}
            </RadioGroupItem>
            <RadioGroupItem
              value="messageCallNotification"
              id="messageCallNotification"
            >
              Mute message and call notifications{" "}
            </RadioGroupItem>
          </RadioGroup>
          <p className="text-xs   text-default-500 mt-10">
            Chat windows will stay closed and you won't get push notifications
            on your devices.
          </p>
        </div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button type="button" variant="outline" color="destructive">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Next</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MuteNotification;