"use client";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
const InputControlled = () => {
  const [value, setValue] = useState<string>("UserName");
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  return (
    <div>
      <Input type="text" placeholder="UserName" onChange={handleValue} />
      <p className="text-sm text-default-400 mt-2">Input value: {value} </p>
    </div>
  );
};

export default InputControlled;
