"use client";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TaskSheetHeader from "./task-sheet-header";
import { Icon } from "@iconify/react";
import SubTasks from "./sub-tasks";
import { ScrollArea } from "@/components/ui/scroll-area";
import Comments from "./comments";
import SheetTitleDesc from "./sheet-title-desc";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Attachments from "./attachments";
import SheetActions from "./sheet-actions";
import { X } from "lucide-react";
import { type Board as BoardType } from "@/app/api/boards/data";
import { type Task as TaskType } from "@/app/api/tasks/data";
import { type SubTask as SubTaskType } from "@/app/api/tasks/data";
import { type Comment as CommentType } from "@/app/api/comments/data";

interface TaskSheetProps {
  open: boolean;
  onClose: () => void;
  taskId: TaskType["id"];
  task: TaskType;
  subTasks: SubTaskType[];
  comments: CommentType[];
}
const TaskSheet = ({ open, onClose, taskId, task, subTasks, comments }: TaskSheetProps) => {
  const [collapseSheet, setCollapseSheet] = useState(false);
  const toggleCollapse = () => setCollapseSheet(!collapseSheet);
  return (
    <Sheet open={open}>
      <SheetContent
        side="right"
        onClose={onClose}
        closeIcon={<X className="h-4 w-4 relative top-4" />}
        className={cn("w-[85%] md:max-w-[1200px] p-0", {
          "md:max-w-[600px]": collapseSheet,
        })}
      >
        <SheetHeader className="sm:flex-row justify-between gap-3 space-y-0 border-b border-default-200  px-2 xl:px-6 py-5">
          <TaskSheetHeader

            toggleCollapse={toggleCollapse}
          />
        </SheetHeader>
        <div
          className={cn("grid grid-cols-1 xl:grid-cols-2", {
            "xl:grid-cols-1": collapseSheet,
          })}
        >
          {/* left side */}
          <div className="border-r border-default-200 min-h-screen">
            <div className="h-[calc(100vh-70px)]">
              <ScrollArea className="h-full">
                {/* sheet title & desc */}
                <SheetTitleDesc task={task} taskId={taskId} />
                {/* sheet actions */}
                <SheetActions task={task} taskId={taskId} />
                {/* tabs */}
                <Tabs defaultValue="subtasks">
                  <TabsList className="flex justify-between w-full bg-default-100 h-12 p-0 px-2 xl:px-12 rounded-none">
                    <TabsTrigger
                      value="subtasks"
                      className=" py-0 h-full bg-transparent text-sm font-medium text-default-600 capitalize rounded-none border-b border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      <Icon
                        icon="heroicons:document-text"
                        className="w-3.5 h-3.5 mr-1.5"
                      />
                      subtasks
                    </TabsTrigger>

                    <TabsTrigger
                      value="attachments"
                      className=" py-0 h-full bg-transparent text-sm font-medium text-default-600 capitalize rounded-none border-b border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      <Icon
                        icon="heroicons:paper-clip"
                        className="w-3.5 h-3.5 mr-1.5"
                      />
                      attachments
                    </TabsTrigger>

                    <TabsTrigger
                      value="comments"
                      className={cn(
                        "py-0 h-full bg-transparent text-sm font-medium text-default-600 capitalize rounded-none border-b border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                        {
                          "flex xl:hidden": !collapseSheet,
                        }
                      )}
                    >
                      <Icon
                        icon="heroicons:chat-bubble-bottom-center"
                        className="w-3.5 h-3.5 mr-1.5"
                      />
                      comments
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="subtasks">
                    <SubTasks subTasks={subTasks} taskId={taskId} />
                  </TabsContent>
                  <TabsContent value="attachments">
                    <Attachments />
                  </TabsContent>
                  <TabsContent value="comments">
                    <Comments
                      comments={comments}
                      taskId={taskId}
                      className="h-[calc(100vh-400px)]"
                    />
                  </TabsContent>
                </Tabs>
              </ScrollArea>
            </div>
          </div>
          {/* right side */}

          <div
            className={cn("hidden xl:block", {
              "xl:hidden": collapseSheet,
            })}
          >
            <Comments
              className="h-[calc(100vh-210px)]"
              comments={comments}
              taskId={taskId}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TaskSheet;
