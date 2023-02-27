import React from "react";

import Layout from "../components/layout";

import "../scss/styles.scss";

const Showcase = () => {
  return (
    <div className="wrapper-fullpagesize-nopadding background site-default-font">
      <Layout>
        <div className="wrapper-pagewidth center-column">
          <div>
            <p>Showcase Page content here</p>
          </div>
          <div className="container-showcased-cards red-find-border">
            <div className="card red-find-border">
              <h1>demo1</h1>
              <p>image here</p>
            </div>
            <div className="card red-find-border">
              <h1>demo2</h1>
              <p>image here</p>
            </div>
            <div className="card red-find-border">
              <h1>demo3</h1>
              <p>image here</p>
            </div>
            <div className="card red-find-border">
              <h1>demo1</h1>
              <p>image here</p>
            </div>
            <div className="card red-find-border">
              <h1>demo2</h1>
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
