import React from "react";
import Greeting from "../src/components/ConditionalRendering/IfStatements/Greeting";

function App() {
  return (
    <div>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>
  );
}

export default App;
