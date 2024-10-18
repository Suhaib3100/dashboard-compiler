"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const BasicRadio = () => {
  return (
    <>
      <RadioGroup defaultValue="right">
        <RadioGroupItem value="right" id="r_1">
          Right
        </RadioGroupItem>
        <RadioGroupItem value="Wrong" id="r_2">
          Wrong
        </RadioGroupItem>
      </RadioGroup>
    </>
  );
};

export default BasicRadio;
