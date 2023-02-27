import * as React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";

import "../scss/styles.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
