import React from "react";

import "./Layout.scss";

const Layout = ({ left, right, bottom }) => {
  return (
    <main className="layout container container--extra-large">
      <section className="layout__left">{left}</section>
      <aside className="layout__right">{right}</aside>
      <section className="layout__bottom">{bottom}</section>
    </main>
  );
};

export default Layout;
