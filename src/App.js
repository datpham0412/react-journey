import React from "react";
import ReactDOM from "react-dom";
import Button from "./Testing/Button"; // Import the Button component

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>My App</h1>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
};

export default App;
