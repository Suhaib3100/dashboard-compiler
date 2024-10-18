"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const RequiredTextarea = () => {
  return (
    <>
      <Label className="mb-2" htmlFor="description">Description <span className="text-destructive">*</span> </Label>
      <Textarea placeholder="Description..." id="description" rows={3} required />
    </>
  );
};

export default RequiredTextarea;
