import styled from "@emotion/styled";

export const OneQuery = () => {
  return (
    <div>
      <h1>Posts</h1>
      <UserCard>
        {/* <img src={userData.thumbnail} /> <p>{userData.id}</p> */}
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
