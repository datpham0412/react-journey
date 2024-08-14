// src/UserList.js
import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    // Cleanup function to handle any necessary cleanup
    return () => {
      console.log("Cleanup before component unmount");
    };
  }, []); // Empty array ensures this effect runs only once on mount

  // Side effect to log the number of users when the data changes
  useEffect(() => {
    if (users.length > 0) {
      console.log(`Number of users: ${users.length}`);
    }
  }, [users]); // This effect runs whenever the users array changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

// Using UserList component

// import React from "react";
// import UserList from "../src/rendering/ReactiveEffect/UserList";

// function App() {
//   return (
//     <div>
//       <h1>User List</h1>
//       <UserList />
//     </div>
//   );
// }
// export default App;
