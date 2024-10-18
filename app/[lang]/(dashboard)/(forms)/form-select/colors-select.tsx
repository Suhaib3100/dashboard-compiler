"use client"
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

export default SelectColors;