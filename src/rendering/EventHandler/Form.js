import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    alert(`Submitting name: ${name}`);
  }

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
