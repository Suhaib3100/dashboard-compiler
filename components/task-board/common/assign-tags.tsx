import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Plus, X } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { updateTaskAction } from "@/action/project-action";
import { Input } from "@/components/ui/input";
import { CustomPopover } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { type Task as TaskType } from "@/app/api/tasks/data";

const newtags = [
  {
    value: "design",
    label: "Design",
  },
  {
    value: "development",
    label: "Development",
  },
  {
    value: "planning",
    label: "Planning",
  },
  {
    value: "ui/ux",
    label: "UI/UX",
  },
];
const tagsColorMap: { [key: string]: string } = {
  development: "destructive",
  planning: "info",
  design: "success",
};
const themeColors = ["primary", "success", "info", "warning", "destructive"];

const AssignTags = ({ task, taskId }: {
  task: TaskType;
  taskId: TaskType["id"];
}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState(task?.tags || []);
  const [openTagColor, setOpenTagColor] = useState(false);

  const [newTagName, setNewTagName] = useState("");

  const [newTagColor, setNewTagColor] = useState("primary");

  const toggleOpenTagColor = () => setOpenTagColor(!openTagColor);

  const handlePopover = () => {
    setOpen(true);
  };
  const closePopover = () => {
    setOpen(false);
    setOpenTagColor(false);
  };
  const handleSelect = async (value: any) => {
    const index = selectedValues.indexOf(value);
    let updatedValues;

    if (index === -1) {
      updatedValues = [...selectedValues, value];
    } else {
      updatedValues = [...selectedValues];
      updatedValues.splice(index, 1);
    }

    setSelectedValues(updatedValues);

    const newVal = {
      ...task,
      tags: updatedValues,
    };

    try {
      await updateTaskAction(taskId, newVal);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTagSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTag = {
      value: newTagName.toLowerCase(),
      label: newTagName,
    };

    const updatedValues = [...selectedValues, newTag.value];
    setSelectedValues(updatedValues);

    const newVal = {
      ...task,
      tags: updatedValues,
    };

    try {
      await updateTaskAction(taskId, newVal);
      closePopover();
      setNewTagName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CustomPopover
        trigger={
          <div className="flex items-center gap-1">
            <div className="text-sm font-medium text-default-900">Add Tags</div>
            <Button
              onClick={handlePopover}
              className="h-5 w-5 rounded-full bg-default-100 hover:bg-default-200"
              size="icon"
            >
              <Plus className="w-3 h-3 text-primary" />
            </Button>
          </div>
        }
        open={open}
        onClose={closePopover}
      >
        {openTagColor ? (
          <div>
            <div className="flex items-center justify-between px-2 py-1 border-b border-default-100 bg-default-50">
              <div className="text-sm font-medium text-default-900">
                Create a new tag
              </div>
              <Button
                type="button"
                size="icon"
                className="rounded-full w-8 h-8"
                onClick={closePopover}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-2">
              <form onSubmit={handleTagSubmission}>
                <div>
                  <Input
                    type="text"
                    placeholder="type a name"
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                  />
                </div>
                <div className="text-sm font-medium text-default-700 my-2">
                  Select Color
                </div>
                <div className="flex flex-wrap gap-4">
                  {themeColors.map((item, index) => (
                    <label
                      htmlFor={item}
                      className={`w-10 h-10 p-0 flex flex-wrap justify-center items-center rounded cursor-pointer bg-${item}`}
                    >
                      {newTagColor === item && (
                        <Check className="w-5 h-5 text-primary-foreground" />
                      )}
                      <input
                        type="radio"
                        value={item}
                        id={item}
                        className="hidden"
                        checked={newTagColor === item}
                        onChange={() => setNewTagColor(item)}
                      />
                    </label>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="soft" type="button" onClick={closePopover}>
                    Cancel
                  </Button>
                  <Button>Save</Button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <>
            <Command className="p-0">
              <CommandInput placeholder="Search..." />
              <CommandEmpty>No newtag found.</CommandEmpty>
              <CommandGroup>
                {newtags.map((newtag) => (
                  <CommandItem
                    key={newtag.value}
                    value={newtag.value}
                    onSelect={() => handleSelect(newtag.value)}
                    className={cn(
                      " bg-primary  text-primary-foreground mb-1  aria-selected:text-primary-foreground",
                      {
                        "bg-destructive aria-selected:bg-destructive":
                          newtag.value === "development",
                        "bg-info aria-selected:bg-info":
                          newtag.value === "planning",
                        "bg-success aria-selected:bg-success":
                          newtag.value === "design",
                        "bg-warning aria-selected:bg-warning":
                          newtag.value === "ui/ux",
                      }
                    )}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValues.includes(newtag.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {newtag.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>

            <div
              className="pl-8 py-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Stop the event from propagating to the outer div
                toggleOpenTagColor();
              }}
            >
              Create a new tag
            </div>
          </>
        )}
      </CustomPopover>
      <div className="mt-3 flex gap-2">
        {selectedValues?.map((tag, index) => (
          <Badge
            color={tagsColorMap[tag] as any}
            className="capitalize"
            key={`badge-tag-key-index-${index}`}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default AssignTags;
