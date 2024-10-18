"use client";
import { Input } from "@/components/ui/input";

const InputSize = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
      <Input type="text" placeholder="Username" size="sm" />
      <Input type="text" placeholder="Username" size="md" />
      <Input type="text" placeholder="Username" size="lg" />
      <Input type="text" placeholder="Username" size="xl" />
    </div>
  );
};

export default InputSize;
