"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const RadiusCheckbox = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6">
      <div className="flex items-center ">
        <Checkbox defaultChecked radius="none" id="circle_34">
          None
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox radius="sm" id="circle_35">
          Small
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox radius="base" id="circle_36">
          Default
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox radius="lg" id="circle_38">
          Large
        </Checkbox>
      </div>
      <div className="flex items-center gap-2.5">
        <Checkbox radius="xl" id="circle_48" />
        <Label
          htmlFor="circle_48"
          className="text-sm text-muted-foreground font-normal"
        >
          Full
        </Label>
      </div>
    </div>
  );
};

export default RadiusCheckbox;
