"use client";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CheckboxRadioGroup = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>
          <Checkbox color="secondary" />
        </InputGroupText>

        <Input
          type="text"
          radius="sm"
          placeholder="Small Radius"
          className="h-8"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <RadioGroup defaultValue="right">
            <RadioGroupItem color="secondary" value="right" id="r_1" />
          </RadioGroup>
        </InputGroupText>

        <Input
          type="text"
          radius="sm"
          placeholder="Small Radius"
          className="h-8"
        />
      </InputGroup>
    </>
  );
};

export default CheckboxRadioGroup;
