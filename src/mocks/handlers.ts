import { http, HttpResponse } from "msw";
import { post } from "./post";
import { user } from "./user";

export function handlers() {
  return [http.get("/post", getPost), http.get("/user", getUser)];
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getPost = async () => {
  await sleep(3000);
  return HttpResponse.json(post);
};

const getUser = async () => {
  await sleep(2000);
  return HttpResponse.json(user);
};
