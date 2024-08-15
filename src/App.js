import React, { useState, useCallback } from "react";

function ExpensiveCalculation({ calculate }) {
  console.log("ExpensiveCalculation component re-rendered");
  return (
    <div>
      <h2>Result of calculation: {calculate()}</h2>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Without useCallback(), this function would be re-created on every render
  const calculate = useCallback(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>Use useCallback() example</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment count: {count}
      </button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle other state
      </button>
      <ExpensiveCalculation calculate={calculate} />
    </div>
  );
}

export default App;
