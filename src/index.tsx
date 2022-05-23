import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import React from "react";

import "./core/imports.css";
import GlobalStyles from "./core/globalStyles";

import { Provider } from "react-redux";
import store from "./core/store";
import App from "./app";

import "@sweetalert2/theme-dark/dark.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
