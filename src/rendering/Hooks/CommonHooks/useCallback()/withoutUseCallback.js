import React, { useState } from "react";

function ExpensiveCalculation({ calculate }) {
  console.log("ExpensiveCalculation component re-rendered");
  return (
    <div>
      <h2>Result of calculation {calculate()}</h2>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const calculate = () => {
    console.log("Calculating...");
    return count * 2;
  };

  return (
    <div>
      <h1>Without use callback example</h1>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle other state
      </button>
      <ExpensiveCalculation calculate={calculate} />
    </div>
  );
}
