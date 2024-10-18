"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const SizesRadio = () => {
  return (
    <RadioGroup
      defaultValue="xs"
    >
      <RadioGroupItem value="xs" id="size_1" size="xs">
        Extra Small
      </RadioGroupItem>
      <RadioGroupItem value="sm" id="size_2" size="sm" >
        Small
      </RadioGroupItem>
      <RadioGroupItem value="md" id="size_3" size="md">
        Midium
      </RadioGroupItem>
      <RadioGroupItem value="lg" id="size_4" size="lg">
        Large
      </RadioGroupItem>
      <RadioGroupItem value="xl" id="size_5" size="xl">
        Extra Large
      </RadioGroupItem>
    </RadioGroup>
  );
};

export default SizesRadio;