import React from "react";

function Mailbox(props) {
  const unreadMessage = props.unreadMessage;
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessage.length > 0 && (
        <h2>You have {unreadMessage.length} unread messages</h2>
      )}
    </div>
  );
}

export default Mailbox;

// Using Mailbox component:

// import React from "react";
// import Mailbox from "../src/components/ConditionalRendering/LogicalOperator/Mailbox";

// function App() {
//   return (
//     <div>
//       <Mailbox unreadMessage={["Hello", "World"]} />
//       <Mailbox unreadMessage={[]} />
//     </div>
//   );
// }

// export default App;
