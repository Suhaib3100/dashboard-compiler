"use client"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const LabelPlacementRadio = () => {
  return (
    <RadioGroup
      defaultValue="start"
      className="gap-7"
    >
      <div className="flex  items-center gap-2">
        <Label htmlFor="start">Start</Label>
        <RadioGroupItem value="start" id="start"> </RadioGroupItem>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <Label htmlFor="end">End</Label>
        <RadioGroupItem value="end" id="end" ></RadioGroupItem>
      </div>
      <div className="flex  flex-col items-center gap-2">
        <Label htmlFor="top">Top</Label>
        <RadioGroupItem value="top" id="top" ></RadioGroupItem>
      </div>
      <div className="flex flex-col-reverse items-center gap-2">
        <Label htmlFor="bottom">Bottom</Label>
        <RadioGroupItem value="bottom" id="bottom" ></RadioGroupItem>
      </div>
    </RadioGroup>
  );
};
export default LabelPlacementRadio;