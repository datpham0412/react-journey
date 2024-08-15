import { useState } from "react";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}

// App.js

/* 
import React from "react";
import { useFormInput } from "./rendering/Hooks/CustomHook2";

function App() {
  const firstNameProps = useFormInput("Dat");
  const lastNameProps = useFormInput("Pham");

  return (
    <>
      <label>
        First Name:
        <input type="text" {...firstNameProps} />
      </label>
      <label>
        Last Name:
        <input type="text" {...lastNameProps} />
      </label>
      <p>
        <b>
          Hello {firstNameProps.value} {lastNameProps.value}
        </b>
      </p>
    </>
  );
}
export default App;

*/
