"use client";
import { Textarea } from "@/components/ui/textarea";

const ColorsTextarea = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Textarea placeholder="Type Here.." color="primary" />
      <Textarea placeholder="Type Here.." color="primary" variant="flat" />
      <Textarea placeholder="Type Here.." color="info" />
      <Textarea placeholder="Type Here.." color="info" variant="flat" />
      <Textarea placeholder="Type Here.." color="warning" />
      <Textarea placeholder="Type Here.." color="warning" variant="flat" />
      <Textarea placeholder="Type Here.." color="success" />
      <Textarea placeholder="Type Here.." color="success" variant="flat" />
      <Textarea placeholder="Type Here.." color="destructive" />
      <Textarea placeholder="Type Here.." color="destructive" variant="flat" />
    </div>
  );
};

export default ColorsTextarea;
