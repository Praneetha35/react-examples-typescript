import React from "react";
import "./App.css";
import { A } from "./components/stateLifting/A";
import { HOC } from "./components//hoc/hoc";
import { RouterExample } from "./components/router";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>State Lifting</p>
        <A />
        <p>HOC</p>
        <HOC />
        <p>Router</p>
        <RouterExample />
      </header>
    </div>
  );
}

export default App;
