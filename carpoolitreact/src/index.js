import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = document.getElementById("root");

// Use createRoot instead of ReactDOM.render
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <Router>
    <App />
  </Router>
);
