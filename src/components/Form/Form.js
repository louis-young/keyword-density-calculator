import React, { useState } from "react";

import "./Form.scss";

const Form = ({ setContent }) => {
  const [value, setValue] = useState("");

  const submit = (event) => {
    event.preventDefault();

    setContent(value);
  };

  return (
    <form className="form" onSubmit={submit}>
      <textarea
        value={value}
        className="form__input"
        onChange={(event) => setValue(event.target.value)}
        required
      ></textarea>

      <button type="submit" className="form__submit button">
        Analyse
      </button>
    </form>
  );
};

export default Form;
