"use client";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { deleteProjectAction } from "@/action/project-action";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";


const prioritiesColorMap: { [key: string]: any } = {
  high: "destructive",
  low: "info",
  medium: "warning",
};
import { useTheme } from "next-themes";
import { type Project } from "@/app/api/projects/data";
interface ProjectGridProps {
  project: Project;
  onEdit: (project: Project) => void;
}
const ProjectGrid = ({ project, onEdit }: ProjectGridProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  async function onAction(id: string) {
    await deleteProjectAction(id);
  }
  const { theme: mode } = useTheme();

  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onAction(project?.id)}
      />
      <Card>
        <CardHeader className="flex-row items-center gap-3 border-none mb-0">
          <div className="flex-1">
            <Badge
              color={
                project?.status === "review"
                  ? "warning"
                  : project?.status === "completed"
                    ? "success"
                    : project?.status === "in progress"
                      ? "default"
                      : "info"
              }
              variant={mode === "dark" ? "soft" : "soft"}
              className=" capitalize"
            >
              {project?.status}
            </Badge>
          </div>
          <div className="flex-none cursor-pointer">
            {project?.isFavorite ? (
              <Icon
                icon="heroicons:star-solid"
                className="text-yellow-400 w-[18px] h-[18px]"
              />
            ) : (
              <Icon
                icon="heroicons:star"
                className="text-default-400 w-[18px] h-[18px]"
              />
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="flex-none h-6 w-6 bg-default-200 rounded-full hover:bg-default-300"
              >
                <MoreHorizontal className="h-4 w-4 text-default-700" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="end">
              <DropdownMenuItem className="cursor-pointer">
                <Link
                  href={{
                    pathname: `projects/${project?.id}`,
                  }}
                  className="w-full"
                  target="_blank"
                >
                  View
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={() => setOpen(true)}
              >
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={() => onEdit(project)}
              >
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="p-4 pt-0 pb-5">
          {/* logo, title,desc */}
          <Link
            href={{
              pathname: `projects/${project?.id}/overview`,
            }}
          >
            <div className="flex gap-2">
              <div>
                <Avatar className="rounded h-12 w-12">
                  <AvatarImage src={project?.logo?.src} alt="" />
                  <AvatarFallback className="rounded uppercase bg-success/30 text-success">
                    {project?.title?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="text-base font-semibold text-default-900 capitalize mb-1">
                  {project?.title}
                </div>
                {project?.description && (
                  <div className="text-xs font-medium text-default-600 max-h-[34px]  overflow-hidden">
                    {project?.description}
                  </div>
                )}
              </div>
            </div>
          </Link>
          {/* team, priority */}
          <div className="flex  mt-6 gap-10">
            <div className="flex-1">
              <div className="text-sm font-medium text-default-900 mb-3">
                Team:
              </div>
              {project?.assign?.length > 0 && (
                <div>
                  <AvatarGroup
                    max={3}
                    total={project.assign.length}
                    countClass="h-7 w-7"
                  >
                    {project.assign?.map((user, index) => (
                      <Avatar
                        className="ring-1 ring-background ring-offset-[2px]  ring-offset-background h-7 w-7 "
                        key={`assign-member-${index}`}
                      >
                        <AvatarImage src={user?.image?.src} />
                        <AvatarFallback>DC</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </div>
              )}
            </div>

            <div className="flex flex-col items-end">
              <div className="text-sm font-medium text-default-900 mb-3 text-right ">
                Priority:
              </div>
              {project.priority && (
                <Badge
                  color={prioritiesColorMap[project.priority]}

                  className=" capitalize"
                >
                  {project?.priority}
                </Badge>
              )}
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-default-900 capitalize">
                Project Progress:
              </span>
              <span className="text-xs font-medium text-default-600">
                {project?.percentage ? project?.percentage : 0}%
              </span>
            </div>
            <Progress value={project?.percentage ? project?.percentage : 0} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t  p-4">
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">
              Assigned Date:
            </div>
            <span className="text-xs font-medium text-default-900">
              {project?.assignDate}
            </span>
          </div>
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">Due Date:</div>
            <span className="text-xs font-medium text-default-900">
              {project?.dueDate}
            </span>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectGrid;
