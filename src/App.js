import React from "react";
import Mailbox from "../src/components/ConditionalRendering/LogicalOperator/Mailbox";

function App() {
  return (
    <div>
      <Mailbox unreadMessage={["Hello", "World"]} />
      <Mailbox unreadMessage={[]} />
    </div>
  );
}

export default App;
