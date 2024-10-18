"use client";
import { Input } from "@/components/ui/input";

const InputRadius = () => {
  return (   
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        <Input type="text" placeholder="Default" />
        <Input type="text" placeholder="Default" radius="sm" />
        <Input type="text" placeholder="Default" radius="md" />
        <Input type="text" placeholder="Default" radius="lg" />
        <Input type="text" placeholder="Default" radius="xl" />
    </div>
  );
};

export default InputRadius;
