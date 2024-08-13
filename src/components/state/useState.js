import React, { useState } from "react";

function Counter() {
  // Declare a state variable named "count" and a function to update it, initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;

// How to use Counter component

// import React from "react";
// import Counter from "../src/components/state/useState";

// function App() {
//   return (
//     <div>
//       <h1>My Counter App</h1>
//       <Counter /> {/* Use the counter component*/}
//     </div>
//   );
// }
// export default App;
