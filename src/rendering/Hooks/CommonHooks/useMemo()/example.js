import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += num;
    }
    return total;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Expensive Calculation Result: {memoizedValue}</p>
      </div>
    </div>
  );
}

export default App;
