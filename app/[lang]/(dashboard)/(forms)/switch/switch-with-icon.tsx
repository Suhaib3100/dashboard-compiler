"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, Sun, Moon, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const SwitchWithIcon = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <Switch
        color="destructive"
        size="lg"
        startContent={<Bell className=" text-default " />}
        endContent={<Bell className=" text-default " />}
        defaultChecked
      />
      <Switch
        color="info"
        size="lg"
        startContent={<Heart className=" text-default " />}
        endContent={<Heart className=" text-default " />}
        defaultChecked
      />
      <Switch
        size="lg"
        color="dark"
        thumbClass={cn("h-6 w-6  data-[state=unchecked]:ml-0 ", {
          "bg-foreground text-background": selected,
          "bg-default": !selected,
        })}
        onCheckedChange={() => setSelected(!selected)}
        thumbIcon={
          selected ? (
            <Moon className=" stroke-background w-4 h-4" />
          ) : (
            <Sun className=" stroke-foreground w-4 h-4 " />
          )
        }
      />

      <Switch
        color="dark"
        size="lg"
        startContent={<Moon className="stroke-background w-4 h-4" />}
        endContent={<Moon className=" stroke-foreground w-4 h-4 " />}
        defaultChecked
      />
    </div>
  );
};

export default SwitchWithIcon;
