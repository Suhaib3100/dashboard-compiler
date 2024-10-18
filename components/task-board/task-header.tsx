"use client";

import { Input } from "@/components/ui/input";
import { Plus, Search, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

const TaskHeader = ({ taskViewHandler, openCreateBoard, taskView }: {
  taskViewHandler: (value: "kanban" | "list") => void,
  openCreateBoard: () => void,
  taskView: string

}) => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <div className="flex-1 flex items-center  gap-4">
        {/* search task */}
        <div className="relative min-w-[240px]">
          <span className="absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2">
            <Search className="w-4 h-4 text-default-500" />
          </span>
          <Input
            type="text"
            placeholder="search files"
            className="ltr:pl-7 rtl:pr-7"
            size="lg"
          />
        </div>
        {/* filter task */}
        <div className="relative">
          <Icon
            icon="heroicons:swatch"
            className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-2.5 text-default-600"
          />
          <Select>
            <SelectTrigger className="pl-9 min-w-[120px] whitespace-nowrap py-0">
              <SelectValue placeholder="All Task" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="task_1">Task 1</SelectItem>
              <SelectItem value="task_2">Task 2</SelectItem>
              <SelectItem value="task_3">Task 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Group By */}
        <div className="relative">
          <Icon
            icon="heroicons:swatch"
            className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-2.5 text-default-600"
          />
          <Select>
            <SelectTrigger className="pl-9 min-w-[160px] whitespace-nowrap">
              <SelectValue placeholder="Group By: status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="task_1">Inprogress</SelectItem>
              <SelectItem value="task_2">Complete</SelectItem>
              <SelectItem value="task_3">Task 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* right */}
      <div className="flex-none flex items-center gap-4">
        <div className="relative">
          <span className="absolute top-1/2 -translate-y-1/2 right-2.5 text-default-600 w-8 h-full border-l border-default-200 flex justify-center items-center">
            <Settings className="w-4 h-4 " />
          </span>
          <Select onValueChange={taskViewHandler}>
            <SelectTrigger className="pr-11 min-w-[160px]">
              <SelectValue placeholder="Kanban" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kanban">Kanban</SelectItem>
              <SelectItem value="list">List View</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={openCreateBoard}>
          <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> Create Board
        </Button>
      </div>
    </div>
  );
};

export default TaskHeader;
