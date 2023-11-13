import { http, HttpResponse } from "msw";
import { post } from "./post";
import { user } from "./user";

export function handlers() {
  return [http.get("/posts", getPost), http.get("/user", getUser)];
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const getPost = async () => {
  await sleep(5000);
  return HttpResponse.json(post);
};

const getUser = () => {
  return HttpResponse.json(user);
};
