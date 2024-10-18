"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
const CheckboxWithBackground = () => {
  const [checked1, setChecked1] = useState<boolean>(true);
  const [checked2, setChecked2] = useState<boolean>(false);
  return (
    <div className="space-y-5">

      <Label htmlFor="cbbg1" className={cn("bg-default-100 dark:bg-default-200  h-10 px-2 rounded-md w-full flex justify-between items-center", {
        "bg-primary": checked1
      })}>
        <span className={cn("text-default-600", { "text-primary-foreground": checked1 })}>I'm number one.</span>

        <Checkbox id="cbbg1" color="success" defaultChecked onCheckedChange={() => setChecked1(!checked1)}
        />
      </Label>
      <Label htmlFor="cbbg2" className={cn("bg-default-100 dark:bg-default-200  h-10 px-2 rounded-md w-full flex justify-between items-center", {
        "bg-primary": checked2
      })}>
        <span className={cn("text-default-600", { "text-primary-foreground": checked2 })}>I'm number two.</span>

        <Checkbox id="cbbg2" color="success" onCheckedChange={() => setChecked2(!checked2)}
        />
      </Label>


    </div >
  );
};

export default CheckboxWithBackground;