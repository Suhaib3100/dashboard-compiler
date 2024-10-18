"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const OutlineFilledCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center">
        <Checkbox defaultChecked variant="filled-outline" id="filled_outline_15">
          Right
        </Checkbox>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox variant="filled-outline" id="filled_outline_16" />
        <Label
          htmlFor="filled_outline_16"
          className="text-sm text-muted-foreground font-normal "
        >
          Wrong
        </Label>
      </div>
    </div>
  );
};

export default OutlineFilledCheckbox;
