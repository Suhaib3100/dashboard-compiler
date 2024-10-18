"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CircleCheckbox = () => {
  return (
    <div className="flex gap-6">
      <div className="flex items-center ">
        <Checkbox defaultChecked radius="xl" color="success" id="circle_11">
          Right
        </Checkbox>
      </div>
      <div className="flex items-center">
        <Checkbox radius="xl" color="destructive" id="circle_12"/>
        <Label
          htmlFor="circle_12"
          className="text-sm text-muted-foreground font-normal ltr:pl-2.5 rtl:pr-2.5"
        >
          Wrong
        </Label>
      </div>
    </div>
  );
};

export default CircleCheckbox;
