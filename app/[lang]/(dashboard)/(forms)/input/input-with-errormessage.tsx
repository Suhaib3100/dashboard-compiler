"use client";
import { Input } from "@/components/ui/input";
const InputWithErrorMessage = () => {
  return (
    <div>
      <Input type="text" placeholder="Username" color="destructive" />
      <p className="text-sm text-destructive mt-2">We'll never share your email with anyone else.</p>
    </div>
  );
};

export default InputWithErrorMessage;
