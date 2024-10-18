"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DisabledRadioGroup = () => {

  return (
    <RadioGroup
      defaultValue="earth"
      disabled
    >
      <RadioGroupItem value="mercury" id="mercury">Mercury </RadioGroupItem>
      <RadioGroupItem value="venus" id="venus">Venus </RadioGroupItem>
      <RadioGroupItem value="earth" id="earth">Earth </RadioGroupItem>
      <RadioGroupItem value="mars" id="mars">Mars </RadioGroupItem>
      <RadioGroupItem value="jupiter" id="jupiter">Jupiter</RadioGroupItem>
    </RadioGroup>
  );
};

export default DisabledRadioGroup;