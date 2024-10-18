"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchLabelPlacement = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-row-reverse gap-2 items-center ">
        <Switch id="switch_label_1" />
        <Label htmlFor="switch_label_1">Start</Label>
      </div>
      <div className="flex items-center  gap-2 ">
        <Switch id="switch_label_2" />
        <Label htmlFor="switch_label_2">End</Label>
      </div>
      <div className="flex flex-col-reverse justify-center items-center  gap-2">
        <Switch id="switch_label_3" />
        <Label htmlFor="switch_label_3">Top</Label>
      </div>
      <div className="flex flex-col justify-center items-center  gap-2">
        <Switch id="switch_label_4" />
        <Label htmlFor="switch_label_4">Bottom</Label>
      </div>
    </div>
  );
};

export default SwitchLabelPlacement;
