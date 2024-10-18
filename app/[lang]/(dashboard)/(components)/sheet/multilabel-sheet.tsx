"use client"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NestedSheet from "./nested-sheet";

export default function MultiLabelSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent className="max-w-[736px] pt-2.5">
        <SheetHeader className="py-0 space-y-0">
          <SheetTitle>Level 1 Sheet</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <NestedSheet />
        </div>
      </SheetContent>
    </Sheet>
  );
}
