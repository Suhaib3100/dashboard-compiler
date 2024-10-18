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

export default function NestedSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Two Label Drawer</Button>
      </SheetTrigger>
      <SheetContent className="max-w-[430px] pt-2.5">
        <SheetHeader className="space-y-0">
          <SheetTitle>Level 2 Drawer</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6">
          <p className="text-sm text-default-500 "> This is two label drawer</p>
        </div>

        <SheetFooter>
          <SheetClose asChild>footer content</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
