import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("Dat");
  const [lastName, setLastName] = useState("Pham");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <label>
        First Name:
        <input value={firstName} onChange={handleFirstNameChange}></input>
      </label>
      <label>
        Last Name:
        <input value={lastName} onChange={handleLastNameChange}></input>
      </label>
      <p>
        <b>
          Good morning {firstName} {lastName}
        </b>
      </p>
    </div>
  );
}
