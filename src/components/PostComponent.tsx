import styled from "@emotion/styled";
import { useGetPost } from "../hooks/useGetPost";

export const PostComponent = () => {
  const { status: postStatus, data: postData, error: postError } = useGetPost();

  if (postStatus === "pending") {
    return <span>useGetPost Loading...</span>;
  }
  if (postStatus === "error") {
    return <span>useGetPost Error: {postError.message}</span>;
  }

  return (
    <PostCard>
      <h1>{postData.title}</h1>
      <h2>{postData.author}</h2>
      <span>{postData.body}</span>
    </PostCard>
  );
};

const PostCard = styled.div`
  border: solid 1px red;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
