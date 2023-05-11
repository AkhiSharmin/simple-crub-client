import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handelUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  };

  return (
    <div>
      <h3>Update Information of {loadedUser.name}</h3>
      <form onSubmit={handelUpdate}>
        <input
          type="text"
          name="name"
          defaultValue={loadedUser?.name}
          id="name"
        />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUser?.email}
          id="email"
        />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Update;
