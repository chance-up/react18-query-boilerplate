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
        <h1>{data.id}</h1>
      </UserCard>
    </div>
  );
};

const UserCard = styled.div`
  border: solid 1px gainsboro;
  border-radius: 10px;
  font-size: 19px;
  font-weight: 600;
`;
