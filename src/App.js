import React from "react";
import SimpleForm from "./Forms/simpleForm"; // Import SimpleForm component

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>My App</h1>
      <SimpleForm /> {/* Add SimpleForm component */}
    </div>
  );
};

export default App;
