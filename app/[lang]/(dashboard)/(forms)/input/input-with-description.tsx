"use client";
import { Input } from "@/components/ui/input";
const InputWithDescription = () => {
  return (
    <div>
      <Input type="text" placeholder="username" />
      <p className="text-sm text-default-400 mt-2">We'll never share your email with anyone else.</p>
    </div>
  );
};

export default InputWithDescription;
