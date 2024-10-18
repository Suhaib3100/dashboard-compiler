"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const DisabledSelect = () => {
  return (
    <Select disabled>
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
  );
};

export default DisabledSelect;
