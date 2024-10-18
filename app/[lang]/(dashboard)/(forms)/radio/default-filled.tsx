"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DefaultFilled = () => {
  return (
    <RadioGroup
      defaultValue="df_1"
    >
      <RadioGroupItem value="df_1" id="df_1" >
        Default Active
      </RadioGroupItem>
      <RadioGroupItem value="sm" id="df_2" disabled >
        Default Disabled
      </RadioGroupItem>
    </RadioGroup>
  );
};

export default DefaultFilled;