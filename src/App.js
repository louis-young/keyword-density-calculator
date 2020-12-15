import React, { useState } from "react";

import Form from "./components/Form/Form";
import List from "./components/List/List";

import "./stylesheets/main.scss";

const App = () => {
  const [occurrences, setOccurrences] = useState([]);

  return (
    <section className="application">
      <Form setOccurrences={setOccurrences} />
      <List occurrences={occurrences} />
    </section>
  );
};

export default App;
