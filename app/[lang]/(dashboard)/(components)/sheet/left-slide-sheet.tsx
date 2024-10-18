"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import cover2 from "@/public/images/all-img/cover-2.jpg";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LeftSideSheet = () => {
  const data = [
    {
      id: 1,
      label: "Getting Started",
      link: "#",
      icon: "heroicons:arrow-trending-up",
      active: true
    },
    {
      id: 2,
      label: "Payment",
      link: "#",
      icon: "logos:mastercard"
    },
    {
      id: 3,
      label: "Project Update",
      link: "#",
      icon: "heroicons:chart-bar"
    },
    {
      id: 4,
      label: "Returns",
      link: "#",
      icon: "heroicons:arrow-uturn-left"
    },
    {
      id: 5,
      label: "My Account",
      link: "#",
      icon: "heroicons:user"
    },
    {
      id: 5,
      label: "Contact",
      link: "#",
      icon: "heroicons:envelope"
    },
  ]
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Left Drawer</Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 max-w-[300px] ">
        <div>
          <div className="h-24">
            <Image src={cover2} className="w-full h-full object-cover" alt="" priority={true} />
          </div>
          <div className="-mt-4 relative">
            <div className="flex items-center gap-4 pb-4 px-4">
              <Avatar className="h-20 w-20 ring-1 ring-border ring-offset-[3px]  ring-offset-background ">
                <AvatarImage src={avatar10.src} alt="" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div>
                <span className="text-lg font-bold text-default-800  block mt-5">
                  Jone Doe
                </span>
                <Link href="#" className="text-base font-medium text-primary block">
                  @sakil
                </Link>
              </div>
            </div>
            <hr />
            <div
              className="py-4 px-4 space-y-2 overflow-y-auto"
              style={{ height: "calc(100vh - 180px)" }}
            >
              {
                data.map((item, index) => (
                  <Button
                    key={`button-${index}`}
                    className={cn("rounded-md w-full justify-start gap-2 ", {
                      "bg-transparent text-default-900 hover:bg-primary/30": index > 0
                    })}

                  >
                    <Icon icon={item.icon} className="w-[18px] h-[18px]" />

                    {item.label}
                  </Button>
                ))
              }

            </div>
            <div className="absolute left-0 bottom-0  pb-5 bg-card w-full px-5 drop-shadow-2xl">
              <Button className="w-full rounded-md">
                <span className="text-xl mr-1">
                  {" "}
                  <Icon icon="material-symbols:logout" />
                </span>
                Logout
              </Button>
            </div>
          </div>
        </div>

      </SheetContent>
    </Sheet>
  );
}

export default LeftSideSheet;
