import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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

export default function PreviewSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-primary">
          View Profile
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="max-w-[736px] p-0">
        <SheetHeader className="space-y-0 py-2 pl-5">
          <SheetTitle>My profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <hr />
        <div className="h-[calc(100vh-120px)]">
          <ScrollArea className="h-full">
            <div className="px-5 py-6">
              <span className="mb-4 block text-lg text-default-900 ">Personal</span>
              <ul className="md:grid grid-cols-2 gap-2 space-y-2 md:space-y-0">
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Full Name:
                  </span>{" "}
                  <span className="text-default-500 "> Prantik Chakraborty</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Account:
                  </span>
                  <span className="text-default-500 ">prantik@codeshaper.tech</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    City:
                  </span>{" "}
                  <span className="text-default-500 ">Most worst city</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Country:
                  </span>{" "}
                  <span className="text-default-500 "> Lion has no country.</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Birthday:
                  </span>{" "}
                  <span className="text-default-500 "> 12/03/2004</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Website:
                  </span>{" "}
                  <span className="text-warning">amrafokirsobai.com</span>
                </li>
                <li className="col-span-2">
                  <span className="text-sm text-default-700 font-medium  ">
                    Message:
                  </span>{" "}
                  <span className="text-default-500 ">
                    Please buy me a coffee first, then talk to me.
                  </span>
                </li>
              </ul>
              <hr className="my-8" />
              <ul className="md:grid grid-cols-2 gap-2 space-y-2 md:space-y-0">
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Position:
                  </span>{" "}
                  <span className="text-default-500 "> UX/UI Designer</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Responsibilities:
                  </span>
                  <span className="text-default-500 "> Destroy Programmers</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Department:
                  </span>{" "}
                  <span className="text-default-500 "> I am alone</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Supervisor:
                  </span>{" "}
                  <span className="text-warning"> Codeshaper</span>
                </li>
                <li className="col-span-2">
                  <span className="text-sm text-default-700 font-medium  ">
                    Skills:
                  </span>
                  <span className="text-default-500 ">
                    Onek gula ache, C / C + +, data structures, software
                    engineering, operating systems, computer networks, databases,
                    compiler theory, computer architecture, Microcomputer Principle
                    and Interface Technology, Computer English, Java, ASP, etc.
                  </span>
                </li>
              </ul>
              <hr className="my-6" />
              <span className="mb-4 block text-default-900 font-medium  ">
                Contacts
              </span>
              <ul className="md:grid grid-cols-2 gap-2 space-y-2 md:space-y-0">
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Email:
                  </span>{" "}
                  <span className="text-default-500 ">prantik@codeshaper.tech</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Phone Number:
                  </span>
                  <span className="text-default-500 ">+880 1521781812</span>
                </li>
                <li>
                  <span className="text-sm text-default-700 font-medium  ">
                    Portfolio:
                  </span>{" "}
                  <span className="text-warning"> Search my name in Google</span>
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>

        <SheetFooter>
          <SheetClose asChild>footer content</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
