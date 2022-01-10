import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//hot reload re-renders the app maintains the same state even when the code is changed.
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;

    ReactDOM.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
}
