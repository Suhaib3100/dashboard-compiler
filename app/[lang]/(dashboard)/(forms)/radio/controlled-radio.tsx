"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
const ControlledRadio = () => {
  const [selected, setSelected] = useState<string>("apple");
  const handleSelect = (value: string) => {
    setSelected(value)
  }
  return (
    <>
      <RadioGroup
        defaultValue={selected}
        onValueChange={handleSelect}
      >
        <RadioGroupItem value="banana" id="banana">Banana </RadioGroupItem>
        <RadioGroupItem value="apple" id="apple">Apple </RadioGroupItem>
        <RadioGroupItem value="orange" id="orange">Orange </RadioGroupItem>
      </RadioGroup>
      <p className="mt-4 text-sm text-default-600">Selected: <span className="capitalize text-default-700">{selected}</span> </p>
    </>
  );
};

export default ControlledRadio;