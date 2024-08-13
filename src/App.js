import React, { useState } from "react";
import Display from "../src/components/Prop_State/display";

function App() {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <div>
      <Display message={message} /> {/* Pass the message as a prop */}
      <button onClick={() => setMessage("You clicked the button")}>
        Click me
      </button>
    </div>
  );
}

export default App;
