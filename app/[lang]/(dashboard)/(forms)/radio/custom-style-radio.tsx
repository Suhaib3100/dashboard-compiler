"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";

const CustomStyledRadio = () => {
  const [selected, setSelected] = useState<string>("csr_1");
  const handleValueChange = (value: string) => {
    setSelected(value)
  }
  return (
    <div>
      <RadioGroup
        defaultValue="csr_1"
        onValueChange={handleValueChange}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Label
          className={cn(
            "flex justify-end sm:justify-between items-center w-full flex-wrap p-4 rounded-md border border-transparent gap-2",
            {
              "border-solid border-success": selected === "csr_1",
            }
          )}
          htmlFor="csr_1"
        >
          <div className="flex items-center gap-3 ">
            <RadioGroupItem
              value="csr_1"
              id="csr_1"
              color="success"
            ></RadioGroupItem>
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
            className="bg-default-200 h-6 px-2 flex items-center gap-1 rounded-md"
          >
            <span
              className={cn("h-1.5 w-1.5 rounded-full bg-default-400", {
                "bg-success": selected === "csr_1",
              })}
            ></span>
            {selected === "csr_1" ? (
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
              "border-solid border-success": selected === "csr_2",
            }
          )}
          htmlFor="csr_2"
        >
          <div className="flex items-center gap-3 ">
            <RadioGroupItem
              value="csr_2"
              id="csr_2"
              color="success"
            ></RadioGroupItem>
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
            className="bg-default-200 h-6 px-2 flex items-center gap-1 rounded-md"
          >
            <span
              className={cn("h-1.5 w-1.5 rounded-full bg-default-400", {
                "bg-success": selected === "csr_2",
              })}
            ></span>
            {selected === "csr_2" ? (
              <span className="text-xs text-success">Active Now</span>
            ) : (
              <span className="text-xs text-default-600">Inactive</span>
            )}
          </button>
        </Label>
      </RadioGroup>
    </div>
  );
};

export default CustomStyledRadio;