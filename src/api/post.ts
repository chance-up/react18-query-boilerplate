import { Post } from "../types/post";
import httpClient from "./axios";

export const getPost = async () => {
  try {
    const response = await httpClient.get<Post>(`/post`);
    return response.data;
  } catch (error) {
    throw Error("");
  }
};
