"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const InputWithHelperText = () => {
  return (
    <div>
      <Input type="text" placeholder="Username" />
      <p className="text-xs text-default-500 mt-2">We’ll never share your details. Read our <Link className="text-primary" href="">Privacy Policy</Link> </p>
    </div>
  );
};

export default InputWithHelperText;
