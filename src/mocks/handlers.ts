import { http, HttpResponse } from "msw";
import { post } from "./post";
import { user } from "./user";

export function handlers() {
  return [
    http.get("/post", getPost),
    http.get("/user", getUser),
    http.get("/user-slow", getUserSlow),
  ];
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getPost = async () => {
  await sleep(3000);
  return HttpResponse.json(post);
};

const getUser = async () => {
  return HttpResponse.json(user);
};

const getUserSlow = async () => {
  await sleep(5000);
  return HttpResponse.json(user);
};
