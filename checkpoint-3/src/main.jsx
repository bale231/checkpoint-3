import React from "react";
import ReactDOM from "react-dom/client";
/* ! Components */
import Root from "./components/Root.jsx";
/* ! CSS */
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
