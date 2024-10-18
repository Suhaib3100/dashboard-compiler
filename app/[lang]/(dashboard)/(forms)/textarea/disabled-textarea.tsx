"use client";
import { Textarea } from "@/components/ui/textarea";

const DisabledTextarea = () => {
  return (
    <Textarea placeholder="This textarea is disabled" rows={3} disabled />
  );
};

export default DisabledTextarea;
