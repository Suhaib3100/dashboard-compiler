"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";
import {
  Calendar,
  ChevronDown,
  Link,
  List,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getWords } from "@/lib/utils";

import { deleteTaskAction, updateTaskAction } from "@/action/project-action";
import AssignMembers from "./common/assign-members";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { cn } from "@/lib/utils";


const prioritiesColorMap: { [key: string]: any } = {
  high: "red",
  medium: "yellow",
  low: "green",
};

const tagsColorMap: { [key: string]: any } = {
  development: "destructive",
  planning: "info",
  design: "success",
  "ui/ux": "warning",
};
// dnd
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { type Board as BoardType } from "@/app/api/boards/data";
import { type Task as TaskType } from "@/app/api/tasks/data";
interface TaskProps {
  task: TaskType;
  onUpdateTask: (task: TaskType) => void;
  boards: BoardType[];
}

const Task = ({ task, onUpdateTask, boards }: TaskProps) => {
  const [open, setOpen] = React.useState(false);
  const {
    id,
    tags,
    title,
    desc,
    priority,
    status,
    assign,
    image,
    category,
    pages,
    messageCount,
    link,
    date,
    time,
  } = task;

  const handleMoveTask = (task: TaskType, boardId: BoardType["id"]) => {
    const newData = {
      ...task,
      boardId: boardId,
    };
    updateTaskAction(task.id, newData);
  };

  const getBoardNameById = (boardId: BoardType["id"]) => {
    const foundBoard = boards.find((board: BoardType) => board.id === boardId);
    return foundBoard ? foundBoard.name : "Unknown Board";
  };
  // delete task
  const onAction = async (dltId: string) => {
    await deleteTaskAction(dltId);
  };
  // dnd
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: false,
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
        onConfirm={() => onAction(id)}
      />
      <Card
        ref={setNodeRef}
        style={style}
        {...attributes}
        className={cn(
          "shadow  border-default-200  p-3 cursor-pointer group relative",
          {
            "opacity-50": isDragging,
          }
        )}
        onClick={() => onUpdateTask(task)}
      >
        <CardHeader className="space-x-0 space-y-0 p-0 flex-row items-center justify-between mb-0 border-none">
          <div className="flex items-center gap-1">
            <div className="text-[10px] leading-[14px] font-semibold uppercase text-default-600 border border-default-200 px-1.5  rounded-sm">
              {getWords(title)}
            </div>

            <div onClick={(e) => e.stopPropagation()}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="text-[10px] leading-[14px] font-semibold  text-default-600 border border-default-200 px-1.5  rounded-sm flex justify-center items-center gap-[2px]">
                    {getBoardNameById(task.boardId)}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[50px]" align="start">
                  {boards?.map((board: BoardType) => (
                    <DropdownMenuItem
                      onSelect={() => handleMoveTask(task, board.id)}
                      className="text-[10px] leading-[14px] font-semibold  text-default-600 py-1"
                      key={`key-dropdown-${board.id}`}
                    >
                      {board.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div
            className="flex items-center gap-1 opacity-0 group-hover:opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  className="h-6 w-6 rounded-full bg-transparent hover:bg-transparent "
                >
                  <MoreHorizontal className="w-4 h-4 text-default-900" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[196px]" align="start">
                <DropdownMenuItem onSelect={() => setOpen(true)}>
                  Delete
                </DropdownMenuItem>
                <DropdownMenuItem>Change List</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Checkbox radius="xl" size="sm" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative">
            <div className="text-sm font-semibold text-default-700 my-1 capitalize">
              {title}
            </div>
          </div>
          <div className="text-[13px] text-default-500">{desc}</div>
          {image && (
            <div className="w-full mt-3 rounded">
              <Image
                alt=""
                src={image}

                className=" rounded"
                height={190}
                width={277}
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-1 mt-2">
            <Badge
              color={prioritiesColorMap[task.priority]}

              className="text-[10px] px-1 py-0 rounded leading-4 capitalize"
            >
              {priority}
            </Badge>
            {tags?.map((tag, i) => (
              <Badge
                key={`badge-key-ssk-${i}`}
                color={tagsColorMap[tag]}
                className="text-[10px] px-1 py-0 rounded leading-4 capitalize"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div onClick={(e) => e.stopPropagation()}>
              <AssignMembers icon={null} />
            </div>
            {assign?.length > 0 && (
              <AvatarGroup total={assign?.length} max={3} countClass="w-5 h-5">
                {assign?.map((member, i) => (
                  <TooltipProvider key={`assign-member-task-${i}`}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar className="w-5 h-5 ring-1 ring-background ring-offset-[2px]  ring-offset-background">
                          <AvatarImage src={member.image.src} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="py-[2px] px-1">
                        <p className="text-xs font-medium">{member.name}</p>
                        <TooltipArrow className=" fill-primary" />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </AvatarGroup>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-0 mt-2">
          <div className="w-full flex flex-wrap items-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-1 text-xs text-default-600">
              <List className="w-3.5 h-3.5 text-default-500" />
              {category}
            </div>
            <div
              className="flex items-center gap-1 text-xs text-default-600"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon="arcticons:documents" className="w-4 h-4" />
              0/7
              <ChevronDown className="w-3.5 h-3.5 text-default-600" />
            </div>
            <div className="flex items-center gap-1 text-xs text-default-600">
              <Icon
                icon="heroicons:chat-bubble-oval-left-ellipsis"
                className="w-3.5 h-3.5 text-default-500"
              />
              {messageCount}
            </div>
            <div className="flex items-center gap-1 text-xs text-default-600">
              <Link className="w-2.5 h-2.5 text-default-500" />
              {link}
            </div>
            <div
              className="flex items-center gap-1 text-xs text-default-600"
              onClick={(e) => e.stopPropagation()}
            >
              <Calendar className="w-3.5 h-3.5 text-default-500" />
              {date} / {time}
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Task;
