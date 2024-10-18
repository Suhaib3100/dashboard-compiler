import { api } from "@/config/axios.config";
import { type Mail } from "@/app/api/email/data";
export const getEmails = async () => {
  try {
    const response = await api.get(`/email`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getMail = async (id: Mail["id"]) => {
  try {
    const response = await api.get(`/email/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

// create
export const createEmail = async (data: Mail) => {
  try {
    const response = await api.post("/email", data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
// delete
export const deleteEmail = async (id: Mail["id"]) => {
  try {
    const response = await api.delete(`/email/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
