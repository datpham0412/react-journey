import React from "react";
import StatusMessage from "../src/components/ConditionalRendering/SwitchStatements/status";

function App() {
  return (
    <div>
      <StatusMessage status="success" />{" "}
      {/* Renders "Operation was successful!" */}
      <StatusMessage status="error" /> {/* Renders "There was an error." */}
      <StatusMessage status="loading" /> {/* Renders "Loading..." */}
      <StatusMessage status="other" /> {/* Renders "Unknown status." */}
    </div>
  );
}
export default App;
