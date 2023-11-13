import { useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { getUser, getUserSlow } from "../api/user";

export const useGetUser = () => {
  return useQuery<Promise<User>, Error, User>({
    queryKey: ["user"],
    queryFn: getUser,
  });
};

export const useGetUserSlow = () => {
  return useQuery<Promise<User>, Error, User>({
    queryKey: ["user"],
    queryFn: getUserSlow,
  });
};
