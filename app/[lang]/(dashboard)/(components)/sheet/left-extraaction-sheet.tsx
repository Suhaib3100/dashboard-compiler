import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AdvancedTimeline from "../timeline/advanced-timeline";

export default function LeftExtraActionSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Left Drawer</Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 max-w-lg ">
        <SheetHeader className="py-3 pl-3.5">
          <SheetTitle>Latest Actions</SheetTitle>
        </SheetHeader>
        <hr />
        <div className="flex flex-col justify-between overflow-y-auto custom-scrollbar" style={{ height: "calc(100vh - 120px)" }}>
          <div className="p-5">
            <AdvancedTimeline />
          </div>
        </div>

        <div className="flex gap-3 pt-4 px-5 ">
          <SheetClose asChild>
            <Button color="warning" variant="outline" size="xs" className="flex-1">Close</Button>
          </SheetClose>
          <Button size="xs" className="flex-1">Show More</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
