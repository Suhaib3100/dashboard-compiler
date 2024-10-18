"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const LabelSlotCheckbox = () => {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Checkbox id="label_slot_11"  color="success"/>
        <Label
          htmlFor="label_slot_11"
          className="text-sm text-muted-foreground font-normal"
        >
          I agree with your{" "}
          <span className="text-success">Privacy Policy</span>
        </Label>
      </div>
    </div>
  );
};

export default LabelSlotCheckbox;
