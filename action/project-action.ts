"use server";
import {
  createProject,
  deleteProject,
  getProject,
  updateProject,
  createBoard,
  deleteBoard,
  updateBoard,
  createTask,
  updateTask,
  getSubtasks,
  createSubTask,
  updateSubTask,
  deleteTask,
  deleteSubTask,
  postComment,
  swapBoard,
} from "@/config/project-config";
import { revalidatePath } from "next/cache";
import { type Project } from "@/app/api/projects/data";
import { type Board } from "@/app/api/boards/data";
import { type Task } from "@/app/api/tasks/data";
import { type SubTask } from "@/app/api/tasks/data";
import { type Comment } from "@/app/api/comments/data";

export async function addProjectAction(project: Project) {
  await createProject(project);
  revalidatePath("/");
}

export const deleteProjectAction = async (id: Project["id"]) => {
  await deleteProject(id);
  revalidatePath("/");
};

export const editProjectAction = async (id: Project["id"], project: Project) => {
  await updateProject(id, project);
  revalidatePath("/");
};

export const viewProjectAction = async (id: Project["id"]) => {
  await getProject(id);
  revalidatePath("/");
};

// boards
export async function addBoardAction(board: Board) {
  await createBoard(board);

  revalidatePath("/");
}

export const editBoardAction = async (id: Board["id"], board: Board) => {
  await updateBoard(id, board);
  revalidatePath("/");
};
export const swapBoardAction = async (data: any) => {
  await swapBoard(data);
  revalidatePath("/");
};
export const deleteBoardAction = async (id: Board["id"]) => {
  await deleteBoard(id);
  revalidatePath("/");
};

// task
export async function addTaskAction(task: any) {
  await createTask(task);
  revalidatePath("/");
}

export const deleteTaskAction = async (id: Task["id"]) => {
  await deleteTask(id);
  revalidatePath("/");
};
export const updateTaskAction = async (taskId: Task["id"], updatedFields: Task) => {
  await updateTask(taskId, updatedFields);
  revalidatePath("/");
};

// sub task
export async function addSubTaskAction(subtask: SubTask) {
  await createSubTask(subtask);
  revalidatePath("/");
}

export const deleteSubTaskAction = async (id: SubTask["id"]) => {
  await deleteSubTask(id);
  revalidatePath("/");
};
export const updateSubTaskAction = async (subtaskId: SubTask["id"], updatedFields: SubTask) => {
  await updateSubTask(subtaskId, updatedFields);
  revalidatePath("/");
};

// comments
export async function postCommentAction(comment: Comment) {
  await postComment(comment);
  revalidatePath("/");
}
