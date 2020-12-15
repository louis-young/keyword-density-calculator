import React, { useState } from "react";

const Form = ({ setOccurrences }) => {
  const [content, setContent] = useState("");

  const calculateKeywordDensity = (event) => {
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

      const density = Math.round((value / words.length) * 100 * 100) / 100;

      return [key, value, density];
    });

    setOccurrences(occurrencesWithDensity);
  };

  return (
    <form onSubmit={calculateKeywordDensity}>
      <textarea value={content} onChange={(event) => setContent(event.target.value)} required></textarea>

      <button type="submit">Calculate</button>
    </form>
  );
};

export default Form;
