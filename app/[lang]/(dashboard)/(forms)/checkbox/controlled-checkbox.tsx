"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ControlledCheckbox = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <div>
      <div className="space-y-5">
        <div className="flex items-center space-x-2.5">
          <Checkbox
            onCheckedChange={() => setIsSelected(!isSelected)}
            id="option_38"
          >
            Large
          </Checkbox>
        </div>
        <p className="text-default-500">
          Selected: {isSelected ? "true" : "false"}
        </p>
      </div>
    </div>
  );
};

export default ControlledCheckbox;
