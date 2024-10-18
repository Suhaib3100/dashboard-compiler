"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
const RadioWithBackground = () => {
  const [selected, setSelected] = useState<string>("rwb_1");
  const handleValueChange = (value: string) => {
    setSelected(value)
  }
  return (
    <div>
      <RadioGroup
        defaultValue="rwb_1"
        onValueChange={handleValueChange}
      >

        <Label
          htmlFor="rwb_1"
          className={cn("flex justify-between items-center gap-1 bg-default-100 dark:bg-default-200 px-3 py-2.5 w-full rounded-md cursor-pointer",
            { "bg-primary dark:bg-primary": selected === "rwb_1" }
          )}

        >
          <span className={cn("font-base text-default-800", { "text-primary-foreground": selected === "rwb_1" })}>I'm Number one.</span>
          <RadioGroupItem value="rwb_1" id="rwb_1" className="data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary-foreground"></RadioGroupItem>

        </Label>
        <Label
          htmlFor="rwb_2"
          className={cn("flex justify-between items-center gap-1 bg-default-100 dark:bg-default-200 px-3 py-2.5 w-full rounded-md cursor-pointer",
            { "bg-primary dark:bg-primary": selected === "rwb_2" }
          )}
        >
          <span className={cn("font-base text-default-800", { "text-primary-foreground": selected === "rwb_2" })}>I'm Number two.</span>
          <RadioGroupItem value="rwb_2" id="rwb_2" className="data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary-foreground"></RadioGroupItem>

        </Label>

      </RadioGroup >
    </div >
  );
};

export default RadioWithBackground;