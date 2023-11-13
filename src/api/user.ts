import { User } from "../types/user";
import httpClient from "./axios";

export const getUser = async () => {
  try {
    const response = await httpClient.get<User>(`/user`);
    return response.data;
  } catch (error) {
    throw Error("");
  }
};

export const getUserSlow = async () => {
  try {
    const response = await httpClient.get<User>(`/user-slow`);
    return response.data;
  } catch (error) {
    throw Error("");
  }
};
