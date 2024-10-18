export const basicSelect = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const BasicSelect = () => {
  return (
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
  );
};

export default BasicSelect;
`;
export const disabledSelect = `
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const DisabledSelect = () => {
  return (
    <Select
      disabled
    >
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

export default DisabledSelect;`;
export const disabledItems = `
"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const DisabledItems = () => {

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">English</SelectItem>
        <SelectItem value="mathmatics">Mathmatics</SelectItem>
        <SelectItem value="physics" disabled>Physics</SelectItem>
        <SelectItem value="chemistry" disabled>Chemistry</SelectItem>
        <SelectItem value="biology">Biology</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DisabledItems;`;
export const controlledSelect = `
"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
const ControlledSelect = () => {
  const [value, setValue] = useState("");
  const handleValueChange = value => {
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

export default ControlledSelect;`;
export const selectWithDescription = `"use client";
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
      <Select id="sub1">
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
`;
export const customSelectorIcon = `"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronsUpDown } from "lucide-react";
const CustomSelectorIcon = () => {

  return (
    <Select>
      <SelectTrigger
        icon={<ChevronsUpDown />}
      >
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

export default CustomSelectorIcon;`;
export const selectColors = `"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const SelectColors = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-4 gap-x-6">
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
      <Select >
        <SelectTrigger color="primary">
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
      <Select >
        <SelectTrigger color="info">
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
      <Select >
        <SelectTrigger color="warning">
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
      <Select >
        <SelectTrigger color="success">
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
      <Select >
        <SelectTrigger color="destructive">
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
        <SelectTrigger variant="flat" >
          <SelectValue placeholder="Select a subject - flat" />
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
        <SelectTrigger variant="flat" color="default">
          <SelectValue placeholder="Select a subject - flat" />
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
        <SelectTrigger variant="flat" color="primary">
          <SelectValue placeholder="Select a subject - flat" />
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
        <SelectTrigger variant="flat" color="info">
          <SelectValue placeholder="Select a subject - flat" />
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
        <SelectTrigger variant="flat" color="warning">
          <SelectValue placeholder="Select a subject - flat" />
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
        <SelectTrigger variant="flat" color="success">
          <SelectValue placeholder="Select a subject - flat" />
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

export default SelectColors;`;
export const sizesSelect = `"use client"
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

export default SizesSelect;`;
export const radiusSelect = `"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const RadiusSelect = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-4 gap-x-6">
      <Select>
        <SelectTrigger radius="none">
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
        <SelectTrigger radius="sm">
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
        <SelectTrigger radius="md">
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
        <SelectTrigger radius="lg">
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
        <SelectTrigger radius="xl">
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

export default RadiusSelect;`;
export const selectVariant = `"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectVariant = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a subject - default" />
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
        <SelectTrigger variant="underline" radius="none">
          <SelectValue placeholder="Select a subject - underlined" />
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
        <SelectTrigger variant="bordered">
          <SelectValue placeholder="Select a subject - bordered" />
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
        <SelectTrigger variant="ghost">
          <SelectValue placeholder="Select a subject - ghost" />
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
        <SelectTrigger variant="flat">
          <SelectValue placeholder="Select a subject - flat" />
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
        <SelectTrigger variant="flat-underline" radius="none">
          <SelectValue placeholder="Select a subject - flat-underline" />
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
        <SelectTrigger variant="flat-underline" radius="none" className="rounded-t-md">
          <SelectValue placeholder="Select a subject - flat-underline" />
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
        <SelectTrigger variant="faded">
          <SelectValue placeholder="Select a subject - faded" />
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

export default SelectVariant;
`;