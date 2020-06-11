import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    first_name: "",
    last_name: "",
    title: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.first_name || !user.last_name) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>First Name</label>
      <input
        type="text"
        name="first_name"
        value={user.first_name}
        onChange={handleInputChange}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="last_name"
        value={user.last_name}
        onChange={handleInputChange}
      />
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={user.title}
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
};

export default AddUserForm;
