import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    image: "",
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
      <h2>Add User</h2>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleInputChange}
          pattern="[a-zA-Z]+"
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleInputChange}
          pattern="[a-zA-Z]+"
          required
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          pattern="[a-zA-Z0-9-]+"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </div>
      <button className="modal-button">Add</button>
    </form>
  );
};

export default AddUserForm;
