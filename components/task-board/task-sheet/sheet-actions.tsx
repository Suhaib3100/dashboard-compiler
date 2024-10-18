"use client";
import { faker } from "@faker-js/faker";
import TaskDate from "../common/task-date";
import Dependency from "../common/dependency";
import StoryPoint from "../common/story-point";
import AssignTags from "../common/assign-tags";
import { Icon } from "@iconify/react";
import AssignMembers from "../common/assign-members";
import { Check, Hash, List, Plus } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Priority from "../common/priority";
import AssignList from "../common/assign-list";
import { type Task as TaskType } from "@/app/api/tasks/data";

const SheetActions = ({ task, taskId }: {
  task: TaskType
  taskId: TaskType["id"]
}) => {
  return (
    <div className="py-5 px-4 lg:px-6 border-b border-default-200">
      <div className="grid  grid-cols-2  md:grid-cols-3 md:gap-2 gap-y-6">
        {/* assignd members */}
        <div>
          <div className="flex items-center gap-1 mb-3">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <Icon
                icon="heroicons:user-plus"
                className="text-primary w-3.5 h-3.5"
              />
            </div>
            <span className="text-sm font-medium text-default-900">
              Assigned
            </span>
          </div>
          <div className="flex items-center gap-3">
            {task?.assign?.length > 0 && (
              <AvatarGroup
                countClass="w-5 h-5"
                total={task?.assign?.length}
                max={3}
              >
                {task?.assign?.map((member, i) => (
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
            <AssignMembers icon={<Plus className="w-3 h-3 text-primary" />} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-3">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <Icon
                icon="heroicons:scale"
                className="text-primary w-3.5 h-3.5"
              />
            </div>
            <span className="text-sm font-medium text-default-900">
              Priority
            </span>
          </div>
          <Priority task={task} taskId={taskId} />
        </div>
        {/*  assigned list*/}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <List className="text-primary w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-medium text-default-900">List</span>
          </div>
          <AssignList />
        </div>

        {/* task date */}
        <div>
          <div className="flex items-center gap-1 mb-3">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <Icon
                icon="heroicons:calendar"
                className="text-primary w-3.5 h-3.5"
              />
            </div>
            <span className="text-sm font-medium text-default-900">Date</span>
          </div>
          <TaskDate />
        </div>

        <div>
          <div className="flex items-center gap-1 mb-1">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <Check className="text-primary w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-medium text-default-900">
              Dependency
            </span>
          </div>
          <Dependency />
        </div>
        <div>
          <div className="flex items-center gap-1 mb-3">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <Hash className="text-primary w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-medium text-default-900">
              Story Points
            </span>
          </div>
          <StoryPoint />
        </div>
      </div>
      <div className="mt-6">
        <AssignTags task={task} taskId={taskId} />
      </div>
    </div>
  );
};

export default SheetActions;
