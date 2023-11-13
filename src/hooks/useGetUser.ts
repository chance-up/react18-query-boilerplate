import { useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { getUser } from "../api/user";

export default function useGetUser() {
  return useQuery<Promise<User>, Error, User>({
    queryKey: ["user"],
    queryFn: getUser,
  });
}
