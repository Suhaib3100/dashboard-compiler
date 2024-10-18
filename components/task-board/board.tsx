"use client";
import React, { useState, useTransition } from "react";
import { toast } from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MoreHorizontal, Plus, Trash2, UserPlus, Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

import { deleteBoardAction } from "@/action/project-action";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";

// dnd
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Task from "./task";
import { type Board as BoardType } from "@/app/api/boards/data";
import { type Task as TaskType } from "@/app/api/tasks/data";
interface TaskBoardProps {
  board: BoardType;
  children?: React.ReactNode;
  onEdit?: () => void;
  taskHandler?: () => void;
  isTaskOpen?: boolean;
  showButton?: boolean;
  tasks?: TaskType[];
  onUpdateTask?: (task: TaskType) => void;
  boards?: BoardType[];
}
const taskBoard = ({
  board,
  children,
  onEdit,
  taskHandler,
  isTaskOpen,
  showButton,
  tasks,
  onUpdateTask,
  boards,
}: TaskBoardProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  async function onAction(id: string) {
    await deleteBoardAction(id);
  }
  const { name, status, id } = board;

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "Column",
      board,
    },
    disabled: isTaskOpen,
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onAction(board.id)}
      />
      <Card
        ref={setNodeRef}
        style={style}
        {...attributes}
        className={cn(
          "max-w-[277px] border-t-4 rounded-md  flex-none w-full  shadow-lg bg-default-100 dark:bg-default-50 ",
          {
            "border-primary": status === "primary",
            "border-warning": status === "warning",
            "border-success": status === "success",
            "opacity-50": isDragging,
          }
        )}
      >
        <CardHeader
          {...listeners}
          className="flex-row items-center mb-0 justify-between border-b border-default-200 rounded-sm py-2.5 space-y-0 px-3"
        >
          <div className="flex items-center">
            <Button
              type="button"
              size="icon"
              className="w-5 h-5 bg-transparent text-primary/80 border border-default-200 rounded-sm hover:bg-transparent"
            >
              <UserPlus className="w-3 h-3" />
            </Button>
          </div>
          <div className="text-sm font-semibold text-default-800 capitalize">
            {name}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="w-8 h-8 rounded-full bg-transparent hover:bg-default-200"
              >
                <MoreHorizontal className="w-4 h-4 cursor-pointer text-default-900" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="end">
              <DropdownMenuItem onSelect={onEdit}>
                <Icon
                  icon="heroicons:pencil-square"
                  className="w-3.5 h-3.5 mr-1 text-default-700"
                />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setOpen(true)}>
                <Trash2 className="w-3.5 h-3.5 mr-1 text-default-600" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        {/* main content  */}
        <CardContent className="px-0 pb-0">
          {/* all tasks */}
          <div className="h-[calc(100vh-300px)]">
            <ScrollArea className="h-full">
              <div className="space-y-3 p-3">{children}</div>
            </ScrollArea>
          </div>
        </CardContent>
        <CardFooter className="w-full px-3 pb-2">
          {showButton && (
            <Button
              className="flex justify-center items-center gap-1 w-full bg-transparent hover:bg-transparent"
              onClick={taskHandler}
            >
              <Plus className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-primary">
                Add Task
              </span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default taskBoard;
