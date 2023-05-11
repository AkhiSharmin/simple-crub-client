import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const users = useLoaderData();

  const [myUsers, setUser] = useState(users);

  const handelDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remaining = myUsers.filter((myUser) => myUser._id !== _id);
          setUser(remaining);
        }
      });
  };

  return (
    <div>
      <h2>User:{users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} {user.email}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handelDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
