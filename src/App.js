import React, { useState } from "react";

import Form from "./components/Form/Form";
import List from "./components/List/List";

import "./stylesheets/main.scss";

const App = () => {
  const [content, setContent] = useState("");

  const splitWords = (text) => {
    const words = text.match(/\b(\w+)\b/g) || [];

    const lowerCaseWords = words.map((word) => word.toLowerCase());

    return lowerCaseWords;
  };

  const calculateOccurrences = (words) => {
    const occurrences = words.reduce((accumulator, word) => {
      accumulator[word] ? accumulator[word]++ : (accumulator[word] = 1);

      return accumulator;
    }, {});

    return occurrences;
  };

  const sortOccurrences = (occurrences) => {
    const sortedOccurrences = Object.entries(occurrences).sort(([, a], [, b]) => b - a);

    return sortedOccurrences;
  };

  const calculatePercentage = (occurrences, total) => {
    const percentage = (occurrences / total) * 100;

    const roundedPercentage = Math.round(percentage * 100) / 100;

    return roundedPercentage;
  };

  const addDensityPercentile = (occurrence, words) => {
    const [word, occurrences] = occurrence;

    const density = calculatePercentage(occurrences, words.length);

    return { word, occurrences, density };
  };

  const calculateKeywordDensity = () => {
    const words = splitWords(content);

    const occurrences = calculateOccurrences(words);

    const sortedOccurrences = sortOccurrences(occurrences);

    const densities = sortedOccurrences.map((occurrence) => addDensityPercentile(occurrence, words));

    return densities;
  };

  return (
    <section className="application">
      <Form setContent={setContent} />
      <List densities={calculateKeywordDensity()} />
    </section>
  );
};

export default App;
