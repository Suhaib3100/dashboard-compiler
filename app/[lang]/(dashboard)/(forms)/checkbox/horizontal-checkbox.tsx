"use client";
import { Checkbox } from "@/components/ui/checkbox";
const HorizontalCheckbox = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <Checkbox defaultChecked id="hr_1">
        Bangla
      </Checkbox>
      <Checkbox id="hr_2">
        English
      </Checkbox>
      <Checkbox id="hr_3">
        Mathmatics
      </Checkbox>
      <Checkbox id="hr_4">
        Physics
      </Checkbox>
      <Checkbox id="hr_5">
        Chemistry
      </Checkbox>
      <Checkbox id="hr_6">
        Biology
      </Checkbox>
    </div>
  );
};

export default HorizontalCheckbox;
