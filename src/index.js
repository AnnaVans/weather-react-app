import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import "./App.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="Weather">
      <Weather />
      <span className="sourcecode">
        <a href="https://github.com/AnnaVans/weather-react-app">
          Open-source code
        </a>
        by Anna Vans
      </span>
    </div>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
