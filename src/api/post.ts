import httpClient from "./axios";

export const getPost = async () => {
  try {
    const response = await httpClient.get(`/post`);
    return response.data;
  } catch (error) {
    throw Error("");
  }
};
