import React from "react";

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;

// Using UserList component:

/* 
import React, { useState } from "react";
import UserList from "../src/rendering/ListsAndKeys/UserList";

function App() {
  // Initial list of users:
  const initialUsers = [
    { id: 1, name: "Dat Pham" },
    { id: 2, name: "Naot" },
    { id: 3, name: "Hna" },
  ];

  const [users, setUsers] = useState(initialUsers);

  // Function to add new user
  const addUser = () => {
    const newUser = { id: users.length + 1, name: `User ${users.length + 1}` };
    setUsers([...users, newUser]);
  };

  // Function to remove the last user
  const removeUser = () => {
    setUsers(users.slice(0, -1));
  };

  // Function to shuffle the list of the user
  const shuffleUser = () => {
    setUsers([...users].sort(() => Math.random() - 0.5));
  };
  return (
    <div>
      <h1>User list</h1>
      <button onClick={addUser}>Add User</button>
      <button onClick={removeUser}>Remove User</button>
      <button onClick={shuffleUser}>Shuffle User</button>
      <UserList users={users} />
    </div>
  );
}

export default App;

*/
