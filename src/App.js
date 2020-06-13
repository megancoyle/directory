import React, { useState, useEffect } from "react";
import DirectoryTable from "./components/DirectoryTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import Pagination from "./components/Pagination";

const dummyData = [
  { id: 1, first_name: "Ann", last_name: "Smith", title: "Dev" },
  { id: 2, first_name: "Shawn", last_name: "Williams", title: "Analyst" },
  { id: 3, first_name: "Sarah", last_name: "Jones", title: "Teller" },
  { id: 4, first_name: "Ann", last_name: "Smith", title: "Dev" },
  { id: 5, first_name: "Shawn", last_name: "Williams", title: "Analyst" },
  { id: 6, first_name: "Sarah", last_name: "Jones", title: "Teller" },
  { id: 7, first_name: "Ann", last_name: "Smith", title: "Dev" },
  { id: 8, first_name: "Shawn", last_name: "Williams", title: "Analyst" },
  { id: 9, first_name: "Sarah", last_name: "Jones", title: "Teller" },
  { id: 10, first_name: "Ann", last_name: "Smith", title: "Dev" },
  { id: 11, first_name: "Shawn", last_name: "Williams", title: "Analyst" },
  { id: 12, first_name: "Sarah", last_name: "Jones", title: "Teller" },
];

const App = () => {
  const [users, setUsers] = useState(dummyData);
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    first_name: "",
    last_name: "",
    title: "",
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  // incrementing ids manually since this uses hardcoded dummy data
  // TODO: update this when tying it to an API/database
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      title: user.title,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>Employee Directory</h1>
      {editing ? (
        <>
          <h2>Edit user</h2>
          <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </>
      ) : (
        <>
          <AddUserForm addUser={addUser} />
        </>
      )}
      <DirectoryTable
        users={currentUsers}
        editUser={editUser}
        deleteUser={deleteUser}
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
