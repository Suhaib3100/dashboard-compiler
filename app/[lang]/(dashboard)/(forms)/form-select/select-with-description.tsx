"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectWithDescription = () => {
  return (
    <div>
      <Label htmlFor="sub1" className="mb-3">
        Subject
      </Label>
      <Select>
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
      <p className="mt-2 text-xs text-default-600">
        This book list is one of the best lists in the world.
      </p>
    </div>
  );
};

export default SelectWithDescription;
