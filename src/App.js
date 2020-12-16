import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Content from "./components/Content/Content";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

import { insignificantWords } from "./data/constants";

import "./stylesheets/main.scss";

const App = () => {
  const [content, setContent] = useState("");

  const convertWordsToLowerCase = (words) => {
    const lowerCaseWords = words.map((word) => word.toLowerCase());

    return lowerCaseWords;
  };

  const splitWords = (text) => {
    const words = text.match(/\b(\w+)\b/g) || [];

    return words;
  };

  const getKeywords = (words) => {
    const keywords = words.filter((word) => !insignificantWords.has(word) && isNaN(word));

    return keywords;
  };

  const calculateOccurrences = (words) => {
    const occurrences = words.reduce((accumulator, word) => {
      accumulator[word] ? accumulator[word]++ : (accumulator[word] = 1);

      return accumulator;
    }, {});

    return occurrences;
  };

  const sortOccurrencesDescending = (occurrences) => {
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

    const lowerCaseWords = convertWordsToLowerCase(words);

    const keywords = getKeywords(lowerCaseWords);

    const occurrences = calculateOccurrences(keywords);

    const sortedOccurrences = sortOccurrencesDescending(occurrences);

    const densities = sortedOccurrences.map((occurrence) => addDensityPercentile(occurrence, words));

    return densities;
  };

  return (
    <Layout
      left={<Form setContent={setContent} />}
      right={<Content />}
      bottom={<Table densities={calculateKeywordDensity()} />}
    />
  );
};

export default App;
