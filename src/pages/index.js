import * as React from "react";

import Layout from "../components/layout";

import "../scss/styles.scss";

const IndexPage = () => {
  return (
    <>
    <p className="red-text">hi above layout</p>
    <Layout>
      <p className="red-text">hi inside layout</p>
    </Layout>
    <p className="red-text">hi below layout</p>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
