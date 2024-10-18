"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
const AccessibleRadio = () => {
  const [selected, setSelected] = useState<string>("acr_1");
  const handleValueChange = (value: string) => {
    setSelected(value)
  }
  return (
    <div>
      <RadioGroup
        defaultValue="acr_1"
        onValueChange={handleValueChange}
      >

        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-primary/10": selected === "acr_1" }
          )}
          htmlFor="acr_1"
        >
          <RadioGroupItem value="acr_1" id="acr_1" color="primary"></RadioGroupItem>
          <span className="text-default-600">Travelling</span>
        </Label>
        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-info/10": selected === "acr_2" }
          )}
          htmlFor="acr_2"
        >
          <RadioGroupItem value="acr_2" id="acr_2" color="info"></RadioGroupItem>
          <span className="text-default-600">Working</span>
        </Label>
        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-success/10": selected === "acr_3" }
          )}
          htmlFor="acr_3"
        >
          <RadioGroupItem value="acr_3" id="acr_3" color="success"></RadioGroupItem>
          <span className="text-default-600">Walking</span>
        </Label>
        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-destructive/10": selected === "acr_4" }
          )}
          htmlFor="acr_4"
        >
          <RadioGroupItem value="acr_4" id="acr_4" color="destructive"></RadioGroupItem>
          <span className="text-default-600">Gaming</span>
        </Label>
        <Label
          className={cn("flex items-center gap-1 bg-default-100 px-2 py-1.5 rounded-md cursor-pointer",
            { "bg-warning/10": selected === "acr_5" }
          )}
          htmlFor="acr_5"
        >
          <RadioGroupItem value="acr_5" id="acr_5" color="warning"></RadioGroupItem>
          <span className="text-default-600">Eating</span>
        </Label>
      </RadioGroup >
    </div >
  );
};

export default AccessibleRadio;