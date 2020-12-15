import React from "react";

const List = ({ densities }) => {
  return (
    <ul>
      {densities &&
        densities.map(({ word, occurrences, density }, index) => (
          <li key={word}>
            {index + 1} - {occurrences} - {word} - {density}%
          </li>
        ))}
    </ul>
  );
};

export default List;
