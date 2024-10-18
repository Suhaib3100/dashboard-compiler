"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const SizesSelect = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-4 gap-x-6">
      <Select>
        <SelectTrigger size="sm">
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
      <Select>
        <SelectTrigger size="md">
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
      <Select>
        <SelectTrigger size="lg">
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
      <Select>
        <SelectTrigger size="xl">
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

    </div>
  );
};

export default SizesSelect;