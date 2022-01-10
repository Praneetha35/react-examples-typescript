import * as React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { HomePage, PageLoad1, PageLoad2 } from "./loadable";
import "./style.css";

export class RouterExample extends React.Component {
  render() {
    console.log(HomePage);
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </ul>
            <ul>
              <Link to="/Page1" style={{ color: "white" }}>
                Page1
              </Link>
            </ul>
            <ul>
              <Link to="/Page2" style={{ color: "white" }}>
                Page2
              </Link>
            </ul>
          </nav>
        </div>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/Page1" element={<PageLoad1 />} />
            <Route path="/Page2" element={<PageLoad2 />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </React.Suspense>
      </Router>
    );
  }
}
