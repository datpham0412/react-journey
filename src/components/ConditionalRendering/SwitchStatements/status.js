import React from "react";

function StatusMessage(props) {
  const status = props.status;
  switch (status) {
    case "success":
      return <h1>Operation was successful</h1>;
    case "error":
      return <h1>Operation failed</h1>;
    case "loading":
      return <h1>Loading...</h1>;
    default:
      return <h1>Unknown status</h1>;
  }
}
export default StatusMessage;
