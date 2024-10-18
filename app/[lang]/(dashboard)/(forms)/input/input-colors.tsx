"use client";
import { Input } from "@/components/ui/input";

const InputColors = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
      <div className="space-y-4">
        <Input type="text" placeholder="Default"  />
        <Input type="text" placeholder="Primary" color="primary" />
        <Input type="text" placeholder="Info" color="info" />
        <Input type="text" placeholder="Warning" color="warning" />
        <Input type="text" placeholder="Success" color="success" />
        <Input type="text" placeholder="Destructive" color="destructive" />
      </div>
      <div className="space-y-4">
        <Input type="text" placeholder="Default" variant="flat" />
        <Input type="text" placeholder="Primary" variant="flat" color="primary" />
        <Input type="text" placeholder="Info" variant="flat" color="info" />
        <Input type="text" placeholder="Warning" variant="flat" color="warning" />
        <Input type="text" placeholder="Success" variant="flat" color="success" />
        <Input type="text" placeholder="Destructive" variant="flat" color="destructive" />
      </div>
    </div>
  );
};

export default InputColors;
