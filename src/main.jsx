import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./index.css";

const root = document.getElementById("root");

// Use createRoot instead of ReactDOM.render
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
