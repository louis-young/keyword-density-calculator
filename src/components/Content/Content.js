import React from "react";

import "./Content.scss";

const Content = () => {
  return (
    <article className="content">
      <h1 className="content__title">Keyword Density Tool</h1>
      <p className="content__text">
        A handy tool to analyse keyword density within content. Simply paste your content, click "Analyse" and view the
        results in the table below. The application will rank your keywords on frequency/occurrence, show you how many
        times they appear and their density percentile compared to all of the keywords in the content.
      </p>

      <p className="content__text">
        Developed by{" "}
        <a className="link" href="https://www.louisyoung.co.uk/" target="_blank" rel="noopener noreferrer">
          Louis Young
        </a>
        .
      </p>
    </article>
  );
};

export default Content;
