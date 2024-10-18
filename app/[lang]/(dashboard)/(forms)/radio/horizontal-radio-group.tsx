"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const HorizontalRadioGroup = () => {

  return (
      <RadioGroup
        className="flex flex-row gap-6"
        defaultValue="hr_1"
      >
        <RadioGroupItem value="hr_1" id="hr_1">Mercury </RadioGroupItem>
        <RadioGroupItem value="hr_2" id="hr_2">Venus </RadioGroupItem>
        <RadioGroupItem value="hr_3" id="hr_3">Earth </RadioGroupItem>
        <RadioGroupItem value="hr_4" id="hr_4">Mars </RadioGroupItem>
        <RadioGroupItem value="hr_5" id="hr_5">Jupiter</RadioGroupItem>
      </RadioGroup>
  );
};

export default HorizontalRadioGroup;