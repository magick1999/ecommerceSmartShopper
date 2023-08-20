import { Provider } from "react-redux";
import React from 'react';

import "../styles/antd.css";
import "../styles/styles.scss";
import "antd/dist/antd.js";

// import Loading from "../components/other/Loading";
import withReduxStore from "../common/withReduxStore";
import FetchInitData from "../components/other/FetchInitData";

const App = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <FetchInitData>
        <Component {...pageProps} />
      </FetchInitData>
    </Provider>
  );
};

export default withReduxStore(App);
