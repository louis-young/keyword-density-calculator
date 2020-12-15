import React from "react";

const List = ({ occurrences }) => {
  return (
    <ul>
      {occurrences.map(([key, value, density], index) => (
        <li key={key}>
          {index + 1} - {value} - {key} - {density}%
        </li>
      ))}
    </ul>
  );
};

export default List;
