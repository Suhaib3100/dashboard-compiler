import {
  getBoards,
  getTasks,
  getSubtasks,
  getComments,
} from "@/config/project-config";
import KanbanBreadCrumbs from "./bread-crumbs";
import TaskBoard from "@/components/task-board";

const Kanban = async () => {
  const boards = await getBoards();
  const tasks = await getTasks();
  const subTasks = await getSubtasks();
  const comments = await getComments();
  return (
    <>
      <div className="flex flex-wrap mb-7">
        <div className="text-xl font-medium text-default-900 flex-1">
          Kanban Board
        </div>
        <div className="flex-none">
          <KanbanBreadCrumbs />
        </div>
      </div>
      <TaskBoard
        boards={boards}
        tasks={tasks}
        subTasks={subTasks}
        comments={comments}
      />
    </>
  );
};

export default Kanban;
