"use server";
import { registerUser } from "@/config/user.config";
import { revalidatePath } from "next/cache";

import { type User } from "@/app/api/user/data";
export const addUser = async (data: User) => {
  const response = await registerUser(data);
  return response;
};
