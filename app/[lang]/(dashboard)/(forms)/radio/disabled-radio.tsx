"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DisabledRadio = () => {
  return (
    <RadioGroup
      defaultValue="rb1"
      disabled
    >
      <RadioGroupItem value="rb1" id="rb1">
        Checked
      </RadioGroupItem>
      <RadioGroupItem value="rb2" id="rb2" >
        Unchecked
      </RadioGroupItem>
    </RadioGroup>
  );
};

export default DisabledRadio;