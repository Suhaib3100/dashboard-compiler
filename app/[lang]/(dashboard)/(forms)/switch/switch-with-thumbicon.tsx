"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { BellRing, Sun, Moon, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SwitchWithThumbIcon = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const [selected1, setSelected1] = useState<boolean>(false);
  return (
    <div className="flex flex-wrap gap-6">
      <Switch
        color="secondary"
        className="h-4 w-11 "
        thumbClass="h-6 w-6  data-[state=unchecked]:ml-0 bg-info"
        thumbIcon={<BellRing className=" stroke-background w-3 h-3" />}
      />
      <Switch
        className="h-4 w-11 "
        color="dark"
        thumbClass={cn("h-6 w-6  data-[state=unchecked]:ml-0 ", {
          "bg-foreground text-background": selected,
          "bg-foreground": !selected,
        })}
        onCheckedChange={() => setSelected(!selected)}
        thumbIcon={
          selected ? (
            <Moon className=" text-dark stroke-dark w-3 h-3 " />
          ) : (
            <Sun className=" stroke-background w-3 h-3" />
          )
        }
      />
      <Switch
        className="h-4 w-11 "
        thumbClass={cn("h-6 w-6  data-[state=unchecked]:ml-0 ", {
          "bg-background": selected1,
          "bg-foreground": !selected1,
        })}
        onCheckedChange={() => setSelected1(!selected1)}
        thumbIcon={
          selected1 ? (
            <ThumbsUp className="text-primary stroke-primary w-3 h-3 " />
          ) : (
            <ThumbsDown className=" stroke-background w-3 h-3" />
          )
        }
      />
    </div>
  );
};

export default SwitchWithThumbIcon;
