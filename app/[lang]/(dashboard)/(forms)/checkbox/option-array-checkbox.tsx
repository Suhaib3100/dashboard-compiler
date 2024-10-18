"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
interface Option {
  value: string;
  label: string;
}

const OptionArrayCheckbox = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const options: Option[] = [
    {
      value: "orange",
      label: "Orange",
    },
    {
      value: "apple",
      label: "Apple",
    },
    {
      value: "banana",
      label: "Banana",
    },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2.5 flex-wrap">
        {options.map((option, i) => (
          <Checkbox
            key={option.value}
            checked={selected.includes(option.value)}
            onCheckedChange={() => {
              if (selected.includes(option.value)) {
                setSelected(selected.filter((item) => item !== option.value));
              } else {
                setSelected([...selected, option.value]);
              }
            }}
            id={option.value}
          >
            {option.label}
          </Checkbox>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="text-muted-foreground ">
          Selected: [{selected.join(", ")}]
        </div>
      )}
    </div>
  );
};

export default OptionArrayCheckbox;
