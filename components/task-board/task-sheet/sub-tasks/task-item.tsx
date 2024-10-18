"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ArrowRightLeft, Check, Tag, Trash2, X } from "lucide-react";

import AssignMembers from "../../common/assign-members";
import { cn } from "@/lib/utils";
import {
  updateSubTaskAction,
  deleteSubTaskAction,
} from "@/action/project-action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { type SubTask as SubTaskType } from "@/app/api/tasks/data";
const TaskItem = ({ subtask, handlerSubSheet }: {
  subtask: SubTaskType;
  handlerSubSheet: () => void;
}) => {
  const { completed, assignDate, id } = subtask;
  const [isDone, setIsDone] = React.useState<boolean>(completed);
  // update isComplete
  const [open, setOpen] = useState<boolean>(false);

  const handleIsComplete = async (value: boolean) => {
    try {
      const newData = {
        ...subtask,
        completed: value,
      };

      await updateSubTaskAction(id, newData);
    } catch (error) {
      console.log(error);
    }
    setIsDone(!isDone);
  };

  const onAction = async (dltId: string) => {
    await deleteSubTaskAction(dltId);
  };
  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onAction(id)}
      />
      <div
        className={cn(
          "flex gap-2 border-b border-dashed border-default-200 py-3 px-6 cursor-pointer",
          {
            "bg-default-50": completed,
          }
        )}
        onClick={handlerSubSheet}
      >
        <div className="mt-1 flex-none">
          <div onClick={(e) => e.stopPropagation()}>
            <Checkbox
              size="sm"
              checked={isDone}
              onCheckedChange={handleIsComplete}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex">
            <div
              className={cn("flex-1 text-base font-medium text-default-900", {
                "line-through": completed,
              })}
            >
              {subtask?.title}
            </div>
            <div className="flex-none flex items-center gap-2">
              {/* assigned members */}
              {subtask?.assign?.length > 0 && (
                <div>
                  <AvatarGroup
                    max={3}
                    total={subtask.assign.length}
                    countClass="w-7 h-7"
                  >
                    {subtask.assign?.map((user, i) => (
                      <Avatar
                        className=" ring-1 ring-background ring-offset-[2px]  ring-offset-background h-7 w-7"
                        key={`avatar-key-${i}`}
                      >
                        <AvatarImage src={user.image} />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </div>
              )}
              {/* add new members start*/}
              <div onClick={(e) => e.stopPropagation()}>
                <AssignMembers />
              </div>

              {/* add new members end*/}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    size="icon"
                    className="h-6 w-6 bg-default-100 text-primary rounded-full hover:bg-default-100 relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon
                      icon="heroicons:ellipsis-horizontal"
                      className="w-4 h-4 text-default-900"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-fit" align="end">
                  {!completed && (
                    <>
                      <DropdownMenuItem className="gap-2">
                        <Icon
                          icon="heroicons:calendar"
                          className="w-4 h-4 text-default-500"
                        />
                        Add a due date
                      </DropdownMenuItem>

                      <DropdownMenuItem className="gap-2">
                        <Tag className="w-4 h-4 text-default-500" />
                        Manage Tags
                      </DropdownMenuItem>

                      <DropdownMenuItem className="gap-2">
                        <Check className="w-4 h-4 text-default-500" />
                        Convert to a task
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <ArrowRightLeft className="w-4 h-4 text-default-500" />
                        Move into another task
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuItem
                    className="gap-2 hover:bg-destructive hover:text-destructive-foreground group"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(true);
                    }}
                  >
                    <Trash2 className="w-4 h-4 text-default-500 group-hover:text-destructive-foreground" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            {completed ? (
              <Badge
                color="success"
                variant="soft"
                className="text-[10px] px-1 py-0 rounded leading-4 capitalize"
              >
                Completed
              </Badge>
            ) : (
              <Badge
                color="warning"
                variant="soft"
                className="text-[10px] px-1 py-0 rounded leading-4 capitalize"
              >
                {subtask.priority}
              </Badge>
            )}

            <div className="text-xs text-default-500 flex items-center gap-1">
              <Icon
                icon="heroicons:calendar"
                className="w-3.5 h-3.5 text-default-500"
              />
              <span>{assignDate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
