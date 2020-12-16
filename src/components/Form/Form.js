import React, { useState, useRef, useEffect } from "react";

import "./Form.scss";

const Form = ({ setContent }) => {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submit = (event) => {
    event.preventDefault();

    setContent(value);
  };

  return (
    <form className="form" onSubmit={submit}>
      <textarea
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
        className="form__input"
        placeholder="Start typing or paste some content..."
      ></textarea>

      <button type="submit" className="form__submit button">
        Analyse
      </button>
    </form>
  );
};

export default Form;
