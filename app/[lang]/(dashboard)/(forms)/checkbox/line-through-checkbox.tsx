"use client";
import { Checkbox } from "@/components/ui/checkbox";

const LineThroughCheckbox = () => {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox id="line_through_5" defaultChecked lineThrough>
        line through
      </Checkbox>
      <Checkbox id="line_through_6" lineThrough>
        line through
      </Checkbox>
    </div>
  );
};

export default LineThroughCheckbox;
