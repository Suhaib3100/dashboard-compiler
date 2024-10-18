import { getTasks } from "@/config/project-config";
import { getContacts } from "../chat/chat-config";
import ViewTask from "./view-task";

const TaskPage = async () => {
  const tasks = await getTasks();
  const contacts = await getContacts();

  return (
      <ViewTask contacts={contacts} tasks={tasks} />
  );
};

export default TaskPage;
