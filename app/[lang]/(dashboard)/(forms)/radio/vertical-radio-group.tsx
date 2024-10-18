"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const VerticalRadioGroup = () => {

  return (
    <RadioGroup
      className="flex-col"
      defaultValue="grapes"
    >
      <RadioGroupItem value="grapes" id="grapes">Grapes </RadioGroupItem>
      <RadioGroupItem value="watermelon" id="watermelon">Watermelon </RadioGroupItem>
      <RadioGroupItem value="kiwi" id="kiwi">Kiwi </RadioGroupItem>
      <RadioGroupItem value="strawberry" id="strawberry">Strawberry </RadioGroupItem>
      <RadioGroupItem value="mango" id="mango">Mango</RadioGroupItem>
    </RadioGroup>
  );
};

export default VerticalRadioGroup;