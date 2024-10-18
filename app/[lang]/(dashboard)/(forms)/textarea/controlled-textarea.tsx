"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ControlledTextarea = () => {
  const [value, setValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <div>
        <Label className="mb-2" htmlFor="controlled_desc">Description</Label>
        <Textarea
          placeholder="what's on your mind..."
          id="controlled_desc"
          rows={3}
          onChange={handleChange}
        />
      </div>
      <p className="text-sm mt-3">Textarea Value: {value} </p>
    </div>
  )
};

export default ControlledTextarea;
