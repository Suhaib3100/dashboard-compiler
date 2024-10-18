"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icon } from "@iconify/react";

const IconInRadio = () => {
  return (
    <RadioGroup
      defaultValue="icon_1"
    >
      <RadioGroupItem
        value="icon_1"
        icon={<Icon icon="heroicons:heart-solid" />}
        id="icon_1"
        color="destructive"
      >
        Heart
      </RadioGroupItem>
      <RadioGroupItem
        value="icon_2"
        color="info"
        icon={<Icon icon="tabler:message" />}
        id="icon_2"
      >
        Message
      </RadioGroupItem>
      <RadioGroupItem
        value="icon_3"
        color="info"
        id="icon_3"
      >
        Correct
      </RadioGroupItem>
      <RadioGroupItem
        value="icon_4"
        color="warning"
        icon={<Icon icon="heroicons:x-mark" />}
        id="icon_4"
      >
        Incorrect
      </RadioGroupItem>
      <RadioGroupItem
        value="icon_5"
        color="success"
        icon={<Icon icon="mdi:like" />}
        id="icon_5"
      >
        Thumb
      </RadioGroupItem>
    </RadioGroup>
  );
};

export default IconInRadio;
