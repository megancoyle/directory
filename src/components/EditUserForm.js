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
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={user.title}
        onChange={handleInputChange}
        pattern="[a-zA-Z]+"
        required
      />
      <button>Update user</button>
    </form>
  );
};

export default EditUserForm;
