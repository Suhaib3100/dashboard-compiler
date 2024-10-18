"use client";
import { Textarea } from "@/components/ui/textarea";

const RadiusTextarea = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Textarea placeholder="Type Here.." radius="none" />
      <Textarea placeholder="Type Here.." radius="sm" />
      <Textarea placeholder="Type Here.." radius="md" />
      <Textarea placeholder="Type Here.." radius="lg" />
    </div>
  );
};

export default RadiusTextarea;
