"use client";
import React from "react";
import TaskBreadCrumbs from "./components/bread-crumbs";
import TaskSidebar from "./components/task-sidebar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TaskTable from "./components/task-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateTask from "./components/create-task";
import EditTask from "./components/edit-task";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { type Contact as ContactType } from "@/app/api/chat/data";
import { type Task as TaskType } from "@/app/api/tasks/data";

const ViewTask = ({ contacts, tasks }: {
  contacts: ContactType[],
  tasks: TaskType[],
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const handleSheetOpen = () => {
    setOpen(!open);
  };
  const handleEditSheetOpen = () => {
    setOpenEdit(!openEdit);
  };
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
  const isDesktop = useMediaQuery("(max-width: 1280px)");
  return (
    <>
      <div className="flex flex-wrap mb-7">
        <div className="text-xl font-medium text-default-900 flex-1">Task</div>
        <div className="flex-none">
          <TaskBreadCrumbs />
        </div>
      </div>

      <div className="app-height flex gap-6 relative overflow-hidden">
        {isDesktop && showSidebar && (
          <div
            className=" bg-background/60 backdrop-filter
         backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"
            onClick={() => setShowSidebar(false)}
          ></div>
        )}
        <div
          className={cn("transition-all duration-150  flex-none  ", {
            "absolute h-full top-0 md:w-[260px] w-[200px] z-[999]": isDesktop,
            "flex-none min-w-[260px]": !isDesktop,
            "left-0": isDesktop && showSidebar,
            "-left-full": isDesktop && !showSidebar,
          })}
        >
          <Card className=" h-full overflow-y-auto no-scrollbar">
            <CardHeader className="sticky top-0 mb-0 bg-card z-50">
              <Button className="w-full" onClick={handleSheetOpen}>
                + Add Task
              </Button>
            </CardHeader>
            <CardContent className="h-full p-2 md:px-6">
              <TaskSidebar contacts={contacts} />
            </CardContent>
          </Card>
        </div>

        <Card className="flex-1 overflow-x-auto">
          <TaskTable
            data={tasks}
            handleEditSheetOpen={handleEditSheetOpen}
            handleSidebar={() => setShowSidebar(true)}
          />
        </Card>
      </div>
      <CreateTask open={open} onClose={handleSheetOpen} />
      <EditTask open={openEdit} onClose={handleEditSheetOpen} />
    </>
  );
};

export default ViewTask;
