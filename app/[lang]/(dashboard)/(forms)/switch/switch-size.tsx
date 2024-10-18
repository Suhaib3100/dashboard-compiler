"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SwitchSize = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex items-center gap-2.5">
        <Switch size="sm" id="s1" />
        <Label
          htmlFor="s1"
          className="text-sm text-muted-foreground  font-normal"
        >
          Small
        </Label>
      </div>
      <div className="flex items-center gap-2.5">
        <Switch size="md" id="s2" />
        <Label
          htmlFor="s2"
          className="text-base text-muted-foreground  font-normal"
        >
          Default
        </Label>
      </div>
      <div className="flex items-center gap-2.5">
        <Switch size="lg" id="s3" />
        <Label
          htmlFor="s3"
          className="text-base text-muted-foreground  font-normal"
        >
          Large
        </Label>
      </div>
    </div>
  );
};

export default SwitchSize;
