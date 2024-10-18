"use client";

import { Checkbox } from "@/components/ui/checkbox";

const SizeCheckbox = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6">
      <Checkbox defaultChecked size="xs" id="ck-xs">
        Extra-Small
      </Checkbox>
      <Checkbox size="sm" id="ck-sm" defaultChecked>
        Small
      </Checkbox>
      <Checkbox size="md" id="ck-md" defaultChecked>
        Default
      </Checkbox>
      <Checkbox size="lg" id="ck-lg" defaultChecked>
        Large
      </Checkbox>
      <Checkbox size="xl" id="ck-xl" defaultChecked>
        Extra-Large
      </Checkbox>
    </div>
  );
};

export default SizeCheckbox;
