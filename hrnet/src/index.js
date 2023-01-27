import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/styles/main.scss";
import App from "./components/App/index";
// import { EmployeeContext } from "./utils/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <EmployeeContext> */}
    <App />
    {/* </EmployeeContext> */}
  </React.StrictMode>
);
