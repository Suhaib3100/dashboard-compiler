"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const LabelSlot = () => {
  return (
    <RadioGroup defaultValue="label_slot_1" className="flex flex-col">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="label_slot_1" id="label_slot_1" color="success"></RadioGroupItem>
        <Label
          htmlFor="label_slot_1"
          className="text-base text-muted-foreground font-normal"
        >
          I agree with your
          <span className="text-success ml-1">Privacy Policy</span>
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="label_slot_2" id="label_slot_2" color="info"></RadioGroupItem>
        <Label
          htmlFor="label_slot_2"
          className="text-base text-muted-foreground font-normal"
        >
          I agree with your
          <span className="text-info ml-1">Terms & Condition</span>
        </Label>
      </div>
    </RadioGroup>
  );
};

export default LabelSlot;
