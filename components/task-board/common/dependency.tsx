"use client"

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CustomPopover } from "@/components/ui/popover";

import { useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";

const data = [
  {
    name: "Create Layout",
    projectId: "DT 01",
    date: "Jan 07"
  },
  {
    name: "Create Theme",
    projectId: "DT 01",
    date: "Jan 08"
  },
  {
    name: "Create Components",
    projectId: "DT 01",
    date: "Jan 09"
  },
]
const Dependency = () => {
  const [open, setOpen] = useState<boolean>(false);
  const togglePopover = () => setOpen(!open);

  return (
    <CustomPopover
      trigger={
        <Button
          type="button"
          onClick={togglePopover}
          className="text-sm font-medium text-primary hover:underline cursor-pointer bg-transparent hover:bg-transparent p-0"
        >Set</Button>
      }
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="flex justify-between items-center bg-default-50  border-b border-default-300 px-3 py-3">
        <div className=" text-sm font-medium text-default-900">Set Task Dependency</div>
        <Button
          type="button"
          size="icon"
          className="w-6 h-6 bg-default-400 rounded-full"
          onClick={togglePopover}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      <Command className="p-2">
        <CommandInput
          placeholder="Search tasks..."
          inputWrapper="border border-default-200 rounded-md"
          className="h-9"
        ></CommandInput>
        <CommandEmpty>No Task found</CommandEmpty>
        <CommandGroup>
          {
            data.map((item, index) => (
              <CommandItem
                key={`assigned-list-item-${index}`}
                className="flex-col items-start p-2"
              >
                <div className="text-sm font-semibold text-defaut-800">{item.name}</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="border border-default-200  px-2 text-xs font-medium h-5 leading-5 rounded ">
                    {item.projectId}
                  </div>
                  <div className="text-sm text-default-700 ">{item.date}</div>
                </div>
              </CommandItem>
            ))
          }

        </CommandGroup>
      </Command>
    </CustomPopover>
  );
};

export default Dependency;