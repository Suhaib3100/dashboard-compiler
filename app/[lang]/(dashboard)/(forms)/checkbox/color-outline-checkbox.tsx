"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ColorOutlineCheckbox = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6">
      <div className="flex items-center ">
        <Checkbox
          defaultChecked
          variant="outline"
          color="default"
          id="color_outline_21"
        >
          Primary
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox defaultChecked  variant="outline" color="destructive" id="color_outline_25">
          Danger
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox defaultChecked  variant="outline" color="warning" id="color_outline_26">
          Warning
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox defaultChecked  variant="outline" color="success" id="color_outline_27">
          Success
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox defaultChecked  variant="outline" color="info" id="color_outline_28" />
        <Label
          htmlFor="color_outline_28"
          className="text-sm text-muted-foreground font-normal pl-2.5"
        >
          info
        </Label>
      </div>
      <div className="flex items-center">
        <Checkbox defaultChecked  variant="outline" color="dark" id="color_outline_29">
          Black
        </Checkbox>
      </div>
    </div>
  );
};

export default ColorOutlineCheckbox;
