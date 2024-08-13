import React from "react";
import Greeting from "../src/components/ConditionalRendering/TernaryOperator/Greeting";

function App() {
  return (
    <div>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>
  );
}

export default App;
