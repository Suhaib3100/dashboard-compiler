"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DefaultRadioGroup = () => {

  return (
    <RadioGroup
      defaultValue="english"
    >
      <RadioGroupItem value="english" id="english">English </RadioGroupItem>
      <RadioGroupItem value="mathematics" id="mathematics">Mathematics </RadioGroupItem>
      <RadioGroupItem value="bangla" id="bangla">Bangla </RadioGroupItem>
      <RadioGroupItem value="physics" id="physics">Physics </RadioGroupItem>
      <RadioGroupItem value="social-science" id="social-science">Social Science </RadioGroupItem>
    </RadioGroup>
  );
};

export default DefaultRadioGroup;