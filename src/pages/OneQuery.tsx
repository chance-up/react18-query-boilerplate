import styled from "@emotion/styled";
import useGetUser from "../hooks/useGetUser";

export const OneQuery = () => {
  const { status, data, error } = useGetUser();

  if (status === "pending") {
    return <span>useGetUser Loading...</span>;
  }
  if (status === "error") {
    return <span>useGetUser Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>User</h1>
      <UserCard>
        <img src={data.thumbnail}></img>
        <UserCardBody>
          <h1>{data.id}</h1>
          <span>{data.name}</span>
        </UserCardBody>
      </UserCard>
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
