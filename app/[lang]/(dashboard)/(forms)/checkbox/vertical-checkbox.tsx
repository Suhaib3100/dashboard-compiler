"use client";
import { Checkbox } from "@/components/ui/checkbox";
const VerticalCheckbox = () => {
  return (
    <div className="flex flex-col gap-6 flex-wrap">
      <Checkbox defaultChecked id="vr_1">
        Bangla
      </Checkbox>
      <Checkbox id="vr_2">
        English
      </Checkbox>
      <Checkbox id="vr_3">
        Mathmatics
      </Checkbox>
      <Checkbox id="vr_4">
        Physics
      </Checkbox>
      <Checkbox id="vr_5">
        Chemistry
      </Checkbox>
      <Checkbox id="vr_6">
        Biology
      </Checkbox>
    </div>
  );
};

export default VerticalCheckbox;
