"use client";
import { Input } from "@/components/ui/input";
const InputVariant = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Input type="text" placeholder="Default" />
      <Input type="text" placeholder="Bordered" variant="bordered" />
      <Input
        type="text"
        placeholder="Underline"
        variant="underline"
        radius="none"
      />
      <Input
        type="text"
        placeholder="Faded - background and borderline"
        variant="faded"
      />
      <Input type="text" placeholder="shadow input" shadow="md" />
      <Input
        type="text"
        placeholder="background"
        variant="flat"
        color="primary"
      />
      <Input type="text" placeholder="Ghost" variant="ghost" />
      <Input
        type="text"
        placeholder="background with shadow"
        shadow="md"
        variant="flat"
        color="primary"
      />
      <Input
        type="text"
        placeholder="flat underline"
        variant="flat-underline"
        color="primary"
        radius="none"
      />
      <Input
        type="text"
        placeholder="flat underline"
        variant="flat-underline"
        color="primary"
        radius="none"
      />
    </div>
  );
};

export default InputVariant;
