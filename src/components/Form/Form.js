import React, { useState } from "react";

const Form = ({ setContent }) => {
  const [value, setValue] = useState("");

  const submit = (event) => {
    event.preventDefault();

    setContent(value);
  };

  return (
    <form onSubmit={submit}>
      <textarea value={value} onChange={(event) => setValue(event.target.value)} required></textarea>

      <button type="submit">Calculate</button>
    </form>
  );
};

export default Form;
