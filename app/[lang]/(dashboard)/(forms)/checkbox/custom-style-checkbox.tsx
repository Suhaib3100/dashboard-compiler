"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
const CustomStyledCheckbox = () => {
  const [checked1, setchecked1] = useState<boolean>(true);
  const [checked2, setchecked2] = useState<boolean>(false);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <Label
        className={cn(
          "flex justify-end sm:justify-between items-center w-full flex-wrap p-4 rounded-md border border-transparent gap-2",
          {
            "border-success": checked1,
          }
        )}
        htmlFor="csc_1"
      >
        <div className="flex items-center gap-3 ">
          <Checkbox
            value="csc_1"
            id="csc_1"
            color="success"
            defaultChecked
            onCheckedChange={() => setchecked1(!checked1)}
          />
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar7.src} alt="" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-bold md:font-medium text-sm md:text-base text-default-800">
                Jeneefer Acnoladge
              </h4>
              <p className="text-xs md:text-sm font-semibold text-default-600">
                UX/UI Designer
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-default-200 h-6 px-2 flex items-center gap-1 rounded-md "
        >
          <span
            className={cn("h-1.5 w-1.5 rounded-full bg-default-400", {
              "bg-success": checked1,
            })}
          ></span>
          {checked1 ? (
            <span className="text-xs text-success">Active Now</span>
          ) : (
            <span className="text-xs text-default-600">Inactive</span>
          )}
        </button>
      </Label>

      <Label
        className={cn(
          "flex justify-end sm:justify-between items-center w-full flex-wrap p-4 rounded-md border border-transparent gap-2",
          {
            "border-success": checked2,
          }
        )}
        htmlFor="csc_2"
      >
        <div className="flex items-center gap-3 ">
          <Checkbox
            value="csc_2"
            id="csc_2"
            color="success"
            onCheckedChange={() => setchecked2(!checked2)}
          />
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar8.src} alt="" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-bold md:font-medium text-sm md:text-base text-default-800">
                Jeneefer Acnoladge
              </h4>
              <p className="text-xs md:text-sm font-semibold text-default-600">
                UX/UI Designer
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-default-200 h-6 px-2 flex items-center gap-1 rounded-md "
        >
          <span
            className={cn("h-1.5 w-1.5 rounded-full bg-default-400", {
              "bg-success": checked2,
            })}
          ></span>
          {checked2 ? (
            <span className="text-xs text-success">Active Now</span>
          ) : (
            <span className="text-xs text-default-600">Inactive</span>
          )}
        </button>
      </Label>
    </div>
  );
};

export default CustomStyledCheckbox;
