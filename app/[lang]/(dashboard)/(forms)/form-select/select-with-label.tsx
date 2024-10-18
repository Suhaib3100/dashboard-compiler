
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const SelectWithLabel = () => {
  return (
    <div>
      <Label htmlFor="selectId" className="mb-2 block">Select A Subject(label not working)</Label>
      <Select>
        <SelectTrigger id="selectId">
          <SelectValue placeholder="Select a subject" />
        </SelectTrigger>
        <SelectContent className="mt-2">
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

export default SelectWithLabel;