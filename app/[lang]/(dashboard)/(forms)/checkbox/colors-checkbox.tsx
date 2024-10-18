"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ColorsCheckbox = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6">
      <div className="flex items-center ">
        <Checkbox defaultChecked color="default" id="color_4">
          Primary
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox defaultChecked color="destructive" id="color_5">
          Danger
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox defaultChecked color="warning" id="color_6">
          Warning
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox defaultChecked color="success" id="color_7">
          Success
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox defaultChecked color="info" id="color_8">
          Info
        </Checkbox>
      </div>
      <div className="flex items-center gap-2.5 ">
        <Checkbox defaultChecked color="dark" id="color_9" />
        <Label
          htmlFor="color_9"
          className="text-sm text-muted-foreground font-normal"
        >
          Black
        </Label>
      </div>
    </div>
  );
};

export default ColorsCheckbox;
