import { useState } from "react";

const App = () => {
  const [content, setContent] = useState("");

  const [occurrences, setOccurrences] = useState([]);

  const calculateDensity = (event) => {
    event.preventDefault();

    const words = content.match(/\b(\w+)\b/g).map((word) => word.toLowerCase());

    const occurrences = words.reduce((accumulator, word) => {
      accumulator[word] ? accumulator[word]++ : (accumulator[word] = 1);

      return accumulator;
    }, {});

    const sortedOccurrences = Object.entries(occurrences).sort(([, a], [, b]) => {
      return b - a;
    });

    const occurrencesWithDensity = sortedOccurrences.map((occurrence) => {
      const [key, value] = occurrence;

      const percentage = (value / words.length) * 100;

      const density = Math.round(percentage * 100) / 100;

      return [key, value, density];
    });

    setOccurrences(occurrencesWithDensity);
  };

  return (
    <section className="application">
      <form onSubmit={calculateDensity}>
        <textarea value={content} onChange={(event) => setContent(event.target.value)} required></textarea>

        <button type="submit">Count</button>
      </form>

      <ul>
        {occurrences.map(([key, value, density], index) => (
          <li key={key}>
            {index + 1} - {value} - {key} - {density}%
          </li>
        ))}
      </ul>
    </section>
  );
};

export default App;
