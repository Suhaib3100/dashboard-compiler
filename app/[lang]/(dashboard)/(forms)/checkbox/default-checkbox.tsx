"use client";
import { Checkbox } from "@/components/ui/checkbox";
const DefaultCheckbox = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <Checkbox defaultChecked id="default_1">
        Right
      </Checkbox>
      <Checkbox id="default_2">
        Wrong
      </Checkbox>
    </div>
  );
};

export default DefaultCheckbox;
