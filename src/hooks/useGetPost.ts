import { useQuery } from "@tanstack/react-query";
import { Post } from "../types/post";
import { getPost } from "../api/post";

export const useGetPost = () => {
  return useQuery<Promise<Post>, Error, Post>({
    queryKey: ["post"],
    queryFn: getPost,
  });
};
