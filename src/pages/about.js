import React from "react";

import Layout from "../components/layout";

import "../scss/styles.scss";

const About = () => {
  return (
    <>
      <Layout>
        <p className="red-text">hi inside layout</p>
        <div>
          <p>About Page content here</p>
        </div>
      </Layout>
    </>
  );
};

export default About;

export const Head = () => <title>About Page</title>;
