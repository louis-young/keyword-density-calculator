import React from "react";

import "./Table.scss";

const Table = ({ densities }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <th className="table__header">Result</th>
          <th className="table__header">Keyword</th>
          <th className="table__header">Occurrences</th>
          <th className="table__header">Density</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {densities.map(({ word, occurrences, density }, index) => (
          <tr className="table__row" key={word}>
            <td className="table__cell">{index + 1}</td>
            <td className="table__cell">{word}</td>
            <td className="table__cell">{occurrences}</td>
            <td className="table__cell">{density}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
