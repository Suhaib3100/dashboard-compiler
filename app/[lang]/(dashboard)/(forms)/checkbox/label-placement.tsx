"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const LabelPlacement = () => {
  return (
    <div className="flex gap-8  flex-wrap">
      <div className="flex items-center gap-3">
        <Label htmlFor="lp_1" >Start</Label>
        <Checkbox id="lp_1" />
      </div>
      <div className="flex flex-row-reverse items-center gap-3">
        <Label htmlFor="lp_2" >End</Label>
        <Checkbox id="lp_2" />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Label htmlFor="lp_3" >Top</Label>
        <Checkbox id="lp_3" />
      </div>
      <div className="flex  flex-col-reverse justify-center items-center gap-3">
        <Label htmlFor="lp_4" >Bottom</Label>
        <Checkbox id="lp_4" />
      </div>
    </div>
  );
};

export default LabelPlacement;
