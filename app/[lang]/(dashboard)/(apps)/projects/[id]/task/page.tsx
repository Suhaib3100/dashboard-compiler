import TaskBoard from "@/components/task-board";
import React from "react";
import {
  getBoards,
  getTasks,
  getSubtasks,
  getComments,
} from "@/config/project-config";
const task = async ({ params }: { params: { id: string } }) => {
  const boards = await getBoards();
  const tasks = await getTasks();
  const subTasks = await getSubtasks();
  const comments = await getComments();
  return (
    <TaskBoard
      boards={boards}
      tasks={tasks}
      subTasks={subTasks}
      comments={comments}
    />
  );
};

export default task;
