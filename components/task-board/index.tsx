"use client";
import React from "react";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TaskHeader from "./task-header";
import { useState } from "react";
import Board from "./board";
import Task from "./task";
import CreateBoard from "./create-borad";
import Blank from "@/components/blank";
import { Button } from "@/components/ui/button";
import AddTask from "./add-task";
import TaskSheet from "./task-sheet";
import TaskTable from "./task-list/task-table";
import TaskList from "./task-list";
import { toast } from "react-hot-toast";
// dnd
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { editBoardAction, swapBoardAction } from "@/action/project-action";
import { type Board as BoardType } from "@/app/api/boards/data";
import { type Task as TaskType } from "@/app/api/tasks/data";
import { type SubTask as SubTaskType } from "@/app/api/tasks/data";
import { type Comment as CommentType } from "@/app/api/comments/data";
const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

interface TaskBoardProps {
  boards: BoardType[];
  tasks: TaskType[];
  subTasks: SubTaskType[];
  comments: CommentType[];
}
const TaskBoard = ({ boards, tasks, subTasks, comments }: TaskBoardProps) => {
  const [taskView, setTaskView] = useState<string>("kanban");

  const [open, setOpen] = useState<boolean>(false);
  // for task create modal
  const [open2, setOpen2] = useState<boolean>(false);
  // update task
  const [open3, setOpen3] = useState<boolean>(false);
  // for board
  const [selectedBoardId, setSelectedBoardId] = React.useState<BoardType["id"] | undefined>(undefined);
  const [selectedBoard, setSelectedBoard] = React.useState<BoardType | undefined>(undefined);
  // for task
  const [selectedTaskId, setSelectedTaskId] = React.useState<TaskType["id"] | undefined>(undefined);
  const [selectedTask, setSelectedTask] = React.useState<TaskType | undefined>(undefined);
  const [selectedBoardForTask, setSelectedBoardForTask] = React.useState<BoardType["id"] | undefined>(undefined);

  // handler task view
  const taskViewHandler = (value: string) => {
    setTaskView(value);
  };
  // handle create board
  const openCreateBoard = () => {
    setSelectedBoardId(undefined);
    setSelectedBoard(undefined);
    setOpen(true);
  };
  // handle edit board
  const openEdit = (board: BoardType) => {
    setSelectedBoardId(board.id);
    setSelectedBoard(board);
    setOpen(true);
  };

  // handle close create board
  const closeCreateBoard = () => {
    setSelectedBoardId(undefined);
    setSelectedBoard(undefined);
    setOpen(false);
    wait().then(() => (document.body.style.pointerEvents = "auto"));
  };

  // handle task board opener
  const handleTaskOpener = (boardId: BoardType["id"]) => {
    setSelectedTaskId(undefined);
    setSelectedTask(undefined);
    setSelectedBoardForTask(boardId);
    setOpen2(true);
  };

  const closeTaskHandler = () => {
    setSelectedTaskId(undefined);
    setSelectedTask(undefined);
    setSelectedBoardForTask(undefined);
    setOpen2(false);
  };

  // update task handler
  const updateTaskHandler = (task: TaskType) => {
    setSelectedTaskId(task.id);
    setSelectedTask(task);
    setOpen3(true);
  };
  const closeUpdateTaskHandler = () => {
    setSelectedTaskId(undefined);
    setSelectedTask(undefined);
    setOpen3(false);
  };

  const filteredTasks = (tasks: TaskType[], boardId: BoardType["id"]) => {
    // Add your filtering logic here
    return tasks?.filter((task) => task.boardId === boardId);
  };
  // dnd
  const [isPending, startTransition] = React.useTransition();
  const boardsId = React.useMemo(
    () => boards.map((board) => board.id),
    [boards]
  );
  const tasksIds = React.useMemo(() => tasks.map((task) => task.id), [tasks]);
  const [activeBoard, setActiveBoard] = React.useState(null);
  const handleDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      setActiveBoard(event.active.data.current.board);

      return;
    }
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeBoardId = active.id.toString(); // Convert to string
    const overBoardId = over.id.toString(); // Convert to string
    if (activeBoardId === overBoardId) return;

    const oldIndex = boardsId.indexOf(activeBoardId);

    const newIndex = boardsId.indexOf(overBoardId);

    if (oldIndex !== newIndex) {
      let data = {
        activeBoardId,
        overBoardId,
      };
      var result;
      startTransition(async () => {
        result = await swapBoardAction(data);
        toast.success("Successfully update");
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );
  const onDragOver = (event: DragOverEvent) => {
    console.log("ami k");
  };
  return (
    <>
      {boards?.length > 0 ? (
        <Card className="overflow-y-auto">
          <CardHeader className="border-none pt-6 mb-6">
            <TaskHeader
              taskView={taskView}
              taskViewHandler={taskViewHandler}
              openCreateBoard={openCreateBoard}
            />
          </CardHeader>
          <CardContent>
            {taskView === "kanban" && (
              <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                collisionDetection={closestCorners}
                onDragOver={onDragOver}
              // onDragOver={handleDragOver}
              // onDragCancel={handleDragCancel}
              >
                <div className="overflow-x-auto">
                  <div className="flex flex-nowrap gap-6">
                    <SortableContext items={boardsId}>
                      {boards?.map((board, i) => (
                        <Board
                          key={`board-id-${board.id}`}
                          board={board}
                          onEdit={() => openEdit(board)}
                          taskHandler={() => handleTaskOpener(board.id)}
                          isTaskOpen={open2}
                          showButton={
                            !open2 || selectedBoardForTask !== board.id
                          }
                          tasks={tasks.filter(
                            (task) => task.boardId === board.id
                          )}
                          onUpdateTask={updateTaskHandler}
                          boards={boards}
                        >
                          <SortableContext items={tasksIds}>
                            {filteredTasks(tasks, board.id)?.map(
                              (filteredTask, j) => (
                                <Task
                                  key={`task-key-${j}`}
                                  task={filteredTask}
                                  onUpdateTask={updateTaskHandler}
                                  boards={boards}
                                />
                              )
                            )}
                          </SortableContext>
                          {open2 && selectedBoardForTask === board.id && (
                            <AddTask
                              onClose={closeTaskHandler}
                              boardId={selectedBoardForTask}
                            />
                          )}
                        </Board>
                      ))}
                    </SortableContext>
                  </div>
                </div>

                {/* <DragOverlay adjustScale={false}>
                  {activeBoard && (
                    <Board board={activeBoard}>
                      {filteredTasks(tasks, activeBoard.id)?.[0] && (
                        <Task
                          task={filteredTasks(tasks, activeBoard.id)?.[0]}
                          boards={boards}
                        />
                      )}
                    </Board>
                  )}
                </DragOverlay> */}
              </DndContext>
            )}

            {taskView === "list" &&
              boards.map((board, i) => (
                <TaskList
                  key={`list-view-key-${i}`}
                  board={board}
                  onEdit={openEdit}
                  length={filteredTasks(tasks, board.id).length}
                >
                  <TaskTable
                    boards={boards}
                    data={filteredTasks(tasks, board.id)}
                    onUpdateTask={updateTaskHandler}
                    boardID2={board.id}
                  />
                </TaskList>
              ))}
          </CardContent>
        </Card>
      ) : (
        <Blank className="max-w-[353px] mx-auto space-y-4">
          <div className=" text-xl font-semibold text-default-900">
            No Task Here
          </div>
          <div className=" text-default-600 text-sm">
            There is no task create. If you create a new task then click this
            button & create new board.
          </div>
          <Button onClick={openCreateBoard}>
            <Plus className="w-4 h-4 mr-1" /> Create Board
          </Button>
        </Blank>
      )}
      {/* update task  modal/sheet */}
      <CreateBoard
        open={open}
        onClose={closeCreateBoard}
        board={selectedBoard}
        boardId={selectedBoardId}
      />
      {/* update task  modal/sheet */}
      <TaskSheet
        open={open3}
        onClose={closeUpdateTaskHandler}
        task={selectedTask as TaskType}
        taskId={selectedTaskId as TaskType["id"]}
        subTasks={subTasks}
        comments={comments}
      />
    </>
  );
};

export default TaskBoard;
