import React, { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const focusInput = () => {
    // Directly accessing the DOM element to set focus
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}
