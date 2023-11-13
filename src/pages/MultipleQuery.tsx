import styled from "@emotion/styled";
import { useGetUser } from "../hooks/useGetUser";
import { useGetPost } from "../hooks/useGetPost";

export const MultipleQuery = () => {
  const { status: userStatus, data: userData, error: userError } = useGetUser();
  const { status: postStatus, data: postData, error: postError } = useGetPost();

  if (userStatus === "pending") {
    return <span>useGetUser Loading...</span>;
  }
  if (userStatus === "error") {
    return <span>useGetUser Error: {userError.message}</span>;
  }

  if (postStatus === "pending") {
    return <span>useGetPost Loading...</span>;
  }
  if (postStatus === "error") {
    return <span>useGetPost Error: {postError.message}</span>;
  }

  return (
    <div>
      <h1>User</h1>
      <UserCard>
        <img src={userData.thumbnail}></img>
        <UserCardBody>
          <h1>{userData.id}</h1>
          <span>{userData.name}</span>
        </UserCardBody>
      </UserCard>
      <PostCard>
        <h1>{postData.title}</h1>
        <h2>{postData.author}</h2>
        <span>{postData.body}</span>
      </PostCard>
    </div>
  );
};

const UserCard = styled.div`
  border: solid 1px gainsboro;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const UserCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostCard = styled.div`
  border: solid 1px red;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
