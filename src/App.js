import react, { useState } from "react";

const App = () => {
  const [content, setContent] = useState("");

  const [occurrences, setOccurrences] = useState([]);

  const count = (event) => {
    event.preventDefault();

    const words = content.match(/\b(\w+)\b/g).map((word) => word.toLowerCase());

    const counts = words.reduce((accumulator, word) => {
      accumulator[word] ? accumulator[word]++ : (accumulator[word] = 1);

      return accumulator;
    }, {});

    const occurrences = Object.entries(counts).sort(([, a], [, b]) => {
      return b - a;
    });

    setOccurrences(occurrences);
  };

  return (
    <section className="application">
      <form onSubmit={count}>
        <textarea value={content} onChange={(event) => setContent(event.target.value)} required></textarea>

        <button type="submit">Count</button>
      </form>

      <ul>
        {occurrences.map(([key, value], index) => (
          <li key={value}>
            {index + 1} - {value}:{key}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default App;
