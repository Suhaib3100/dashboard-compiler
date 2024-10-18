"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FilledCheckbox = () => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="flex items-center">
          <Checkbox defaultChecked variant="filled" id="fill_1">
            Right
          </Checkbox>
        </div>
        <div className="flex items-center ">
          <Checkbox variant="filled" id="fill_2" />
          <Label
            htmlFor="fill_2"
            className="text-sm text-muted-foreground font-normal ltr:pl-2.5 rtl:pr-2.5"
          >
            Wrong
          </Label>
        </div>
      </div>
    </div>
  );
};

export default FilledCheckbox;
