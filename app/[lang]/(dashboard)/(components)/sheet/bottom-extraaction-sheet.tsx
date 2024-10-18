import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import BlogCard from "./blog-card";

export default function BottomExtraActionSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Bottom Drawer</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="p-0 max-h-[400px] xl:max-h-[500px] overflow-y-auto">
        <SheetHeader className="p-5 py-2 space-y-0">
          <SheetTitle>Features Showcase</SheetTitle>
          <SheetDescription> Explore Our Features Here! </SheetDescription>
        </SheetHeader>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-3.5 py-6 gap-6">
          <BlogCard />
        </div>
        <div className="flex gap-4 pb-5 px-4">
          <SheetClose asChild>
            <Button variant="outline" size="xs" color="destructive">Cancel</Button>
          </SheetClose>
          <Button size="xs" >Ok</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

