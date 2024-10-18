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
import BasicTimeline from "../timeline/basic-timeline";
const DialogWithTimeline = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Modal With Timeline</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-base font-medium ">
            Submit Your Weekly Report
          </DialogTitle>
        </DialogHeader>
        <BasicTimeline />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" color="warning">Close</Button>
          </DialogClose>
          <Button >Okay</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogWithTimeline;
