"use client";
import { Checkbox } from "@/components/ui/checkbox";

const DisabledCheckbox = () => {

  return (
    <div className="flex gap-6 flex-wrap">
      <div className="flex items-center">
        <Checkbox defaultChecked id="rd-1" disabled>
          Left
        </Checkbox>
      </div>
      <div className="flex items-center">
        <Checkbox id="rd-2" disabled>
          Right
        </Checkbox>
      </div>
      <div className="flex items-center ">
        <Checkbox id="rd_ex" />
        <label
          htmlFor="rd_ex"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ltr:ml-2.5 rtl:mr-2.5"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
};

export default DisabledCheckbox;
