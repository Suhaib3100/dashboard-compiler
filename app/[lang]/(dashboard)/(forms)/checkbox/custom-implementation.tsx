"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";

const CustomImplementation = () => {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const [isSelected1, setIsSelected1] = useState<boolean>(false);
  return (
    <>
      <div
        className={cn(
          " rounded-lg border p-4  w-full transition-all duration-200",
          {
            "border-success": isSelected,
          }
        )}
      >
        <Checkbox
          id="custom_11"
          className="space-x-3 rtl:space-x-reverse"
          defaultChecked
          color="success"
          onCheckedChange={() => setIsSelected(!isSelected)}
        >
          <div className="flex  items-center gap-4 flex-wrap justify-end">
            <div className="flex flex-1 gap-4 items-center">
              <Avatar>
                <AvatarImage src={avatar7.src} alt="" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div className=" space-y-1">
                <h4 className=" font-medium text-default-800">
                  Jeneefer Acnoladge
                </h4>
                <div className=" text-sm text-default-600 font-normal">
                  UX/UI Designer
                </div>
              </div>
            </div>
            <div className="flex-none">
              <Badge
                color={isSelected ? "success" : "secondary"}
                variant={isSelected ? "soft" : "outline"}
              >
                <span
                  className={cn("h-2 w-2 rounded-md mr-2 ", {
                    "bg-default-400": !isSelected,
                    "bg-success": isSelected,
                  })}
                ></span>
                {isSelected ? "Active Now" : "Inactive"}
              </Badge>
            </div>
          </div>
        </Checkbox>
      </div>
      <div
        className={cn(
          " rounded-lg border p-4  w-full transition-all duration-200",
          {
            "border-success": isSelected1,
          }
        )}
      >
        <Checkbox
          id="custom_12"
          className="space-x-3 rtl:space-x-reverse"
          color="success"
          onCheckedChange={() => setIsSelected1(!isSelected1)}
        >
          <div className="flex  items-center gap-4 flex-wrap justify-end">
            <div className="flex flex-1 gap-4 items-center">
              <Avatar>
                <AvatarImage src={avatar8.src} alt="" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div className=" space-y-1">
                <h4 className=" font-medium text-default-800">
                  Jeneefer Acnoladge
                </h4>
                <div className=" text-sm text-default-600 font-normal">
                  UX/UI Designer
                </div>
              </div>
            </div>
            <div className="flex-none">
              <Badge
                color={isSelected1 ? "success" : "secondary"}
                variant={isSelected1 ? "soft" : "outline"}
              >
                <span
                  className={cn("h-2 w-2 rounded-md mr-2 ", {
                    "bg-default-400": !isSelected1,
                    "bg-success": isSelected1,
                  })}
                ></span>
                {isSelected1 ? "Active Now" : "Inactive"}
              </Badge>
            </div>
          </div>
        </Checkbox>
      </div>
    </>
  );
};

export default CustomImplementation;
