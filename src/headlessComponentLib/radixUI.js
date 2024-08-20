import * as React from "react";
import { Toggle } from "@radix-ui/react-toggle";

function App() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div>
      <Toggle
        pressed={enabled}
        onPressedChange={setEnabled}
        style={{
          all: "unset",
          fontFamily: "Arial, sans-serif",
          backgroundColor: enabled ? "green" : "gray",
          color: "white",
          padding: "10px 20px",
          borderRadius: "9999px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {enabled ? "Enabled" : "Disabled"}
      </Toggle>
    </div>
  );
}

export default App;
