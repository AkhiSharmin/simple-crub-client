import React from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const users = useLoaderData();

  const handelDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`);
  };

  return (
    <div>
      <h2>User:{users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} {user.email}{" "}
            <button onClick={() => handelDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
