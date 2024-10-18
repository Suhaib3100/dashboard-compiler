"use client";
import { Textarea } from "@/components/ui/textarea";

const VariantTextarea = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Textarea placeholder="Type Here.." variant="bordered" />
      <Textarea placeholder="Type Here.." variant="underline" radius="none" />
      <Textarea placeholder="Type Here.." variant="faded" />
      <Textarea placeholder="Type Here.." variant="flat" />
      <Textarea placeholder="Type Here.." variant="flat-underline" />
      <Textarea placeholder="Type Here.." variant="ghost" />
    </div>
  );
};

export default VariantTextarea;
