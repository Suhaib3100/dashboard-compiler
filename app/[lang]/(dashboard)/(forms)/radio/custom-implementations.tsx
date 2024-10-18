"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
const CustomImplementation = () => {
  const [selected, setSelected] = useState<string>("cr_1");
  const handleValueChange = (value: string) => {
    setSelected(value)
  }
  return (
    <div>
      <RadioGroup
        defaultValue="cr_1"
        onValueChange={handleValueChange}
      >
        <Label
          className={cn("flex justify-between items-center w-full border border-default-400 p-4 rounded-md",
            {
              "border-success": selected === "cr_1"
            }
          )} htmlFor="cr_1"
        >
          <div>
            <h4 className="font-medium text-default-800 mb-1">Subject 1: Mathmatics</h4>
            <span className="text-sm text-default-600">90 out of 100</span>
          </div>
          <RadioGroupItem value="cr_1" id="cr_1" color="success"></RadioGroupItem>
        </Label>
        <Label
          className={cn("flex  justify-between items-center w-full border border-default-400 p-4 rounded-md",
            {
              "border-success": selected === "cr_2"
            }
          )}
          htmlFor="cr_2">
          <div>
            <h4 className="font-medium text-default-800 mb-1">Subject 1: Physics</h4>
            <span className="text-sm text-default-600">82 out of 100</span>
          </div>
          <RadioGroupItem value="cr_2" id="cr_2" color="success"></RadioGroupItem>
        </Label>
        <Label className={cn("flex  justify-between items-center w-full border border-default-400 p-4 rounded-md",
          {
            "border-success": selected === "cr_3"
          }
        )}
          htmlFor="cr_3">
          <div>
            <h4 className="font-medium text-default-800 mb-1">Subject 1: Mathmatics</h4>
            <span className="text-sm text-default-600">90 out of 100</span>
          </div>
          <RadioGroupItem value="cr_3" id="cr_3" color="success"></RadioGroupItem>
        </Label>

      </RadioGroup>
    </div>
  );
};

export default CustomImplementation;