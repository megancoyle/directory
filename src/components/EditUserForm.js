import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <h2>Edit User</h2>
      <label>First Name</label>
      <input
        type="text"
        name="first_name"
        value={user.first_name}
        onChange={handleInputChange}
        pattern="[a-zA-Z]+"
        required
      />
      <label>Last Name</label>
      <input
        type="text"
        name="last_name"
        value={user.last_name}
        onChange={handleInputChange}
        pattern="[a-zA-Z]+"
        required
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
        pattern="[a-zA-Z0-9-]+"
        required
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
      />
      <button>Update user</button>
    </form>
  );
};

export default EditUserForm;
