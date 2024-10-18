"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";

const SwitchShadow = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-4">
        <Switch
          className="h-5 w-11 shadow-sm data-[state=unchecked]:bg-background data-[state=checked]:bg-background"
          thumbClass="h-4 w-4  data-[state=unchecked]:ml-[3px] data-[state=checked]:ml-6 data-[state=unchecked]:bg-default-400 data-[state=checked]:bg-default-600"
          id="enabled"
          defaultChecked
        />
        <Label htmlFor="enabled">Enabled</Label>
      </div>
      <div className="flex items-center gap-4">
        <Switch
          disabled
          className="h-5 w-11 shadow-md data-[state=unchecked]:bg-background data-[state=checked]:bg-background"
          thumbClass="h-4 w-4  data-[state=unchecked]:ml-[3px] data-[state=checked]:ml-6 data-[state=unchecked]:bg-primary/50 data-[state=checked]:bg-primary"
          id="disabled"
        />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    </div>
  );
};

export default SwitchShadow;
