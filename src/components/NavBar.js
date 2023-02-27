import * as React from "react";
import { Link } from "gatsby";

import "../scss/styles.scss";

const NavBar = () => {
  return (
    <div className="red-find-border nav-background">
      <header className="container-general-row">
        <div className="flexgrow1 red-find-border">
          <div className="flexcontainer-center-left">
            <h1 className="red-text red-find-border">LOGO HERE</h1>
          </div>
        </div>

        <div className="flexgrow1 red-find-border"></div>

        <nav className="flexgrow1">
          <ul className="nav-links red-find-border">
            <li className="nav-link-item ">
              <Link to="/" className="nav-link-text ">
                Home
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/about" className="nav-link-text">
                About Us
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/showcase" className="nav-link-text">
                Showcase
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
