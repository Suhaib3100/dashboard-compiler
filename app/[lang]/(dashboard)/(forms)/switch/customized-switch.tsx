"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const CustomizedSwitch = () => {

  const [selected, setSelected] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const enabledChecked = () => setChecked(true);
  const disabledChecked = () => setChecked(false);
  
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Switch
        className="h-4 w-11 "
        color="dark"
        thumbClass={cn("h-6 w-6  data-[state=unchecked]:ml-0 ", {
          "bg-background text-foreground": selected,
          "bg-background": !selected,
        })}
        onCheckedChange={() => setSelected(!selected)}
        thumbIcon={
          selected ? (
            <Moon className=" stroke-background  w-3 h-3 " />
          ) : (
            <Sun className=" text-dark stroke-dark w-3 h-3" />
          )
        }
      />

      <div className="flex items-center gap-1">
        <Switch id="custom_switch_label" color="success" />
        <Label htmlFor="custom_switch_label">Switch Label</Label>
      </div>
      <Switch color="info" size="md" startContent="On" endContent="Off" />
      <Switch
        color="info"
        size="lg"
        startContent={<Bell />}
        endContent={<Bell />}
      />
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-base text-default-600"
          onClick={disabledChecked}
        >
          off
        </button>
        <Switch defaultChecked={checked} />
        <button
          type="button"
          className="text-base text-default-600"
          onClick={enabledChecked}
        >
          on
        </button>
      </div>
    </div>
  );
};

export default CustomizedSwitch;
