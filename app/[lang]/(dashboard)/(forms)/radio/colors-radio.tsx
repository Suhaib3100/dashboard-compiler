"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const ColorsRadio = () => {
  return (
    <RadioGroup defaultValue="color_2">
      <RadioGroupItem value="color_2" id="color_2" color="primary">
        Primary{" "}
      </RadioGroupItem>
      <RadioGroupItem value="color_3" id="color_3" color="info">
        Info{" "}
      </RadioGroupItem>
      <RadioGroupItem value="color_4" id="color_4" color="warning">
        Warning{" "}
      </RadioGroupItem>
      <RadioGroupItem value="color_5" id="color_5" color="success">
        Success{" "}
      </RadioGroupItem>
      <RadioGroupItem value="color_6" id="color_6" color="destructive">
        Destructive{" "}
      </RadioGroupItem>
    </RadioGroup>
  );
};

export default ColorsRadio;
