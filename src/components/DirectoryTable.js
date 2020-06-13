import React, { useState, useMemo } from "react";
import SearchBox from "./SearchBox";

const useSortableData = (users, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedUsers = useMemo(() => {
    let sortableUsers = [...users];
    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableUsers;
  }, [users, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { users: sortedUsers, requestSort, sortConfig };
};

const DirectoryTable = (props) => {
  const { users, requestSort, sortConfig } = useSortableData(props.users);
  const { editUser, deleteUser } = props;
  const [searchValue, setSearchValue] = useState("");
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const searchHandler = (value) => {
    setSearchValue(value) 
  }

  let updateUsers = users.filter((user) => {
  return Object.keys(user).some(key =>
    user[key].toString().toLowerCase().includes(searchValue.toString().toLowerCase())
  )
})

  return (
    <>
    <SearchBox searchHandler={searchHandler}/>
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("first_name")}
              className={getClassNamesFor("first_name")}
            >
              First Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("last_name")}
              className={getClassNamesFor("last_name")}
            >
              Last Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("title")}
              className={getClassNamesFor("title")}
            >
              Job Title
            </button>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          updateUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.title}</td>
              <td>
                <button
                  onClick={() => {
                    editUser(user);
                  }}
                  className="button"
                >
                  Edit
                </button>
                <button onClick={() => deleteUser(user.id)} className="button">
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Data</td>
          </tr>
        )}
      </tbody>
    </table>
    </>
  );
};

export default DirectoryTable;
