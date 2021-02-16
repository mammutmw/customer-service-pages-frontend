import React from "react";

//Typography
import "@ingka/base/style.scss";
//Page container
import "@ingka/page-container/style.scss";

function Layout({ children }) {
  return (
    <main className="page-container">
      <div className="page-container__inner">
        <div className="page-container__main">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
