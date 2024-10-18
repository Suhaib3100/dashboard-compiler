"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchLineStyle = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch
          className="h-1 w-11 flex items-center"
          thumbClass="h-5 w-5 data-[state=checked]:ml-6 data-[state=unchecked]:ml-0"
          defaultChecked
          id="line_1"
        />
        <Label htmlFor="line_1">Enabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
        disabled
          className="h-1 w-11 flex items-center"
          thumbClass="h-5 w-5 data-[state=checked]:ml-6 data-[state=unchecked]:ml-0"
          id="line_2"
        />
        <Label htmlFor="line_2">Disabled</Label>
      </div>
    </div>
  );
};

export default SwitchLineStyle;
