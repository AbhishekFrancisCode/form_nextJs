import React, { useEffect } from "react";
import Header from "./header";

const Layout = ({ headText, children }) => {
  useEffect(() => {
    const window_location = window.location.host;
    if (window_location === "finemake.in") {
      window.location.href = "https://www.finemake.in/";
    }
  });
  return (
    <div className="container-fluid">
      <div className="row px-0">
        <main role="main" className={`col-lg-12 ml-sm-auto p-0`}>
          <Header title={headText} />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
