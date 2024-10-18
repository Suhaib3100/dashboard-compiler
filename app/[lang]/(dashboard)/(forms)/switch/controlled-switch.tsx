"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ControlledSwtich = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleCheckedChange = (value: boolean) => {
    setChecked(value);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <Switch onCheckedChange={handleCheckedChange} id="controlled_Switch" />
        <Label htmlFor="controlled_Switch">Designing</Label>
      </div>
      <p className="mt-3 text-default-600 text-sm">
        Value: {checked ? "Checked" : "Unchecked"}
      </p>
    </div>
  );
};

export default ControlledSwtich;
