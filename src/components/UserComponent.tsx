import styled from "@emotion/styled";
import { useGetUser } from "../hooks/useGetUser";

export const UserComponent = () => {
  const { status: userStatus, data: userData, error: userError } = useGetUser();

  if (userStatus === "pending") {
    return <span>useGetUser Loading...</span>;
  }
  if (userStatus === "error") {
    return <span>useGetUser Error: {userError.message}</span>;
  }

  return (
    <UserCard>
      <img src={userData.thumbnail}></img>
      <UserCardBody>
        <h1>{userData.id}</h1>
        <span>{userData.name}</span>
      </UserCardBody>
    </UserCard>
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
