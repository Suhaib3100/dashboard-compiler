"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchWithBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex gap-2 items-center">
        <Switch
          startContent="On"
          endContent="Off"
          defaultChecked
          id="switch_badge_1"
        />
        <Label htmlFor="switch_badge_1">Enabled</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Switch disabled startContent="off" endContent="Off" id="switch_badge_2" />
        <Label htmlFor="switch_badge_2">Disabled</Label>
      </div>
    </div>
  );
};

export default SwitchWithBadge;
