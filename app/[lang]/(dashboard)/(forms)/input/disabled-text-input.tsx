"use client";
import { Input } from "@/components/ui/input";

const DisabledTextInput = () => {
  return (
      <Input type="text" placeholder="Username" id="userName" disabled />
  );
};

export default DisabledTextInput;
