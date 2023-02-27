import React from "react";

import Layout from "../components/layout";

import "../scss/styles.scss";

const Showcase = () => {
  return (
    <>
      <Layout>
        <p className="red-text">hi inside layout</p>
        <div>
          <p>Showcase Page content here</p>
        </div>
      </Layout>
    </>
  );
};

export default Showcase;

export const Head = () => <title>Showcase Page</title>;
