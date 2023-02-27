import * as React from "react";

import Layout from "../components/layout";

import "../scss/styles.scss";

const IndexPage = () => {
  return (
    <div className='wrapper-fullpagesize-nopadding background site-default-font'>
      <Layout>
        <div className='wrapper-pagewidth center-column'>
          <div className=''>
            <div className=''>
              <p className='red-text'>hi inside layout</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
