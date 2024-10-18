"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LabelInputRequired = () => {
  return (
    <>
      <Label className="mb-3" htmlFor="username">Name <span className="text-warning">*</span></Label>
      <Input type="text" placeholder="Enter Your Name" id="username" required />
    </>
  );
};

export default LabelInputRequired;
