import React from "react";
import HOC from "./hoc";

const UserList = ({ data }) => {
  const renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UserList, "users");
export default SearchUsers;
