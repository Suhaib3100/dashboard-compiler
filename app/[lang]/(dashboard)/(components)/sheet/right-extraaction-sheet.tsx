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

export default function RightExtraActionSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Right Drawer</Button>
      </SheetTrigger>
      <SheetContent className="max-w-lg p-0">
        <SheetHeader className="py-3 pl-3.5">
          <SheetTitle>Our Activity</SheetTitle>
        </SheetHeader>
        <hr />
        <div className="flex flex-col justify-between overflow-y-auto custom-scrollbar p-4" style={{ height: "calc(100vh - 120px)" }}>
          <AdvancedTimeline />
        </div>
        <div className=" pt-4 px-6">
          <div className="flex justify-start gap-3">
            <SheetClose asChild>
              <Button color="warning" variant="outline" size="xs" className="flex-1">Close</Button>
          </SheetClose>
            <Button size="xs" className="flex-1">Show More</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
