"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SwitchWithLabel = () => {
  return (
    <div className="flex  items-center gap-2.5">
      <Switch id="terms15" />
      <Label
        htmlFor="terms15"
        className="text-base text-muted-foreground  font-normal"
      >
        Auto update
      </Label>
    </div>
  );
};

export default SwitchWithLabel;
