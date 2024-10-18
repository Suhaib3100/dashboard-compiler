"use client";
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
import { Icon } from '@iconify/react';
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const DialogWithProgressbar = () => {
  const [value2, setValue2] = useState<number>(96);
  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Modal With Progressbar</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base font-medium text-warning"> Almost out of storage </DialogTitle>
          </DialogHeader>
          <div>
            <div className="text-sm font-semibold text-default-950 mb-2">Approaching Full Capacity</div>
            <p className="text-xs text-default-700">If you run out, you can't back up photos, or send and receive any documents.</p>
          </div>
          <div className="flex justify-between">
            <Label className="flex items-center gap-2">
              <span className="text-xl"><Icon icon="ic:outline-cloud" /></span>
              My Storage
            </Label>
            <Label>{value2}% used</Label>
          </div>
          <Progress value={value2} color="warning" />
          <DialogFooter className="sm:justify-start mt-5" >
            <Button >Upgrade To Pro</Button>
            <DialogClose asChild>
              <Button  variant="outline" color="warning">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );
};

export default DialogWithProgressbar;
