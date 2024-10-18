"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
const ControlledSelect = () => {
  const [value, setValue] = useState<string>("");
  const handleValueChange = (value: string) => {
  setValue(value)
}
return (
  <div>
    <Select onValueChange={handleValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">English</SelectItem>
        <SelectItem value="mathmatics">Mathmatics</SelectItem>
        <SelectItem value="physics">Physics</SelectItem>
        <SelectItem value="chemistry">Chemistry</SelectItem>
        <SelectItem value="biology">Biology</SelectItem>
      </SelectContent>
    </Select>
    <p className="mt-3 text-xs text-default-600">Selected: <strong>{value}</strong> </p>
  </div>
);
};

export default ControlledSelect;