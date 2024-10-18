"use server";
import { type Mail } from "@/app/api/email/data";
import { createEmail, deleteEmail, getMail } from "@/config/email.config";
import { revalidatePath } from "next/cache";

export const getMailAction = async (id:Mail["id"]) => {
  try {
    const response = await getMail(id);
    revalidatePath("/email");
    return response;
  } catch (error: any) {
    return error.response.data;
  }
};

// create email action
export const createEmailAction = async (data: Mail) => {
  try {
    const response = await createEmail(data);
    revalidatePath("/email");
    return response;
  } catch (error: any) {
    return error.response.data;
  }
};

// delete
export const deleteMailAction = async (id: Mail["id"]) => {
  try {
    const response = await deleteEmail(id);
    revalidatePath("/email");
    return response;
  } catch (error: any) {
    return error.response.data;
  }
};
