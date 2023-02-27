import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import "../scss/styles.scss";

const Showcase = () => {
  return (
    <div className="wrapper-fullpagesize-nopadding background site-default-font">
      <Layout>
        <div className="wrapper-pagewidth center-column">
          <div>
            <h1>Please see the showcased items below</h1>
          </div>
          <div className="container-showcased-cards ">
            <Link to="/item-a" className=" ">
              <div className="card red-find-border">
                <h1>Item A</h1>
                <p>image here</p>
              </div>
            </Link>

            <Link to="/item-b" className=" ">
              <div className="card red-find-border">
                <h1>Item B</h1>
                <p>image here</p>
              </div>
            </Link>

            
            <div className="card red-find-border">
              <h1>demo3</h1>
              <p>image here</p>
            </div>
            <div className="card red-find-border">
              <h1>demo4</h1>
              <p>image here</p>
            </div>
            <div className="card red-find-border">
              <h1>demo5</h1>
              <p>image here</p>
            </div>
            <div className="card red-find-border">
              <h1>demo6</h1>
              <p>image here</p>
            </div>
            <div className="card red-find-border">
              <h1>demo7</h1>
              <p>image here</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Showcase;

export const Head = () => <title>Showcase Page</title>;
