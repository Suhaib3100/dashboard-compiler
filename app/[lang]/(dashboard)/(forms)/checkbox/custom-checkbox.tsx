"use client";
import { Checkbox } from "@/components/ui/checkbox";
const BulkSelectCheckbox = () => {
  return (
    <div>
      <div className="mb-4">
        <Checkbox defaultChecked id="bulk_1">
          Select All
        </Checkbox>
      </div>
      <div className="flex gap-6 flex-wrap">
        <Checkbox defaultChecked id="bulk_2">
          Bangla
        </Checkbox>
        <Checkbox defaultChecked id="bulk_3">
          English
        </Checkbox>
        <Checkbox defaultChecked id="bulk_4">
          Mathmatics
        </Checkbox>
        <Checkbox defaultChecked id="bulk_5">
          Physics
        </Checkbox>
        <Checkbox defaultChecked id="bulk_6">
          Chemistry
        </Checkbox>
        <Checkbox defaultChecked id="bulk_7">
          Biology
        </Checkbox>
      </div>
    </div>
  );
};

export default BulkSelectCheckbox;
